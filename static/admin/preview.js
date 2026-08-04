CMS.registerPreviewStyle("/css/style.css");

function value(entry, name, fallback) {
  return entry.getIn(["data", name]) || fallback;
}

var HomepagePreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var hero = entry.getIn(["data", "hero"]);
    var titleSize = hero ? hero.get("title_size") || "medium" : "medium";
    var photoSize = hero ? hero.get("photo_size") || "large" : "large";

    return h(
      "section",
      { className: "hero" },
      h(
        "div",
        { className: "hero-content hero-grid" },
        h(
          "div",
          { className: "hero-copy" },
          h("p", { className: "eyebrow" }, hero ? hero.get("eyebrow") : ""),
          h(
            "h1",
            { className: "hero-title hero-title-" + titleSize },
            hero ? hero.get("title") : ""
          ),
          h(
            "p",
            { className: "hero-description" },
            hero ? hero.get("description") : ""
          )
        ),
        h(
          "div",
          { className: "hero-photo hero-photo-" + photoSize },
          h("img", {
            src: "/images/uploads/headshot.jpg",
            alt: "Portrait of Taylor Azizeh"
          })
        )
      )
    );
  }
});

var StandardPagePreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var image = entry.getIn(["data", "image"]);
    var imageAsset = image ? this.props.getAsset(image) : null;

    var titleSize = value(entry, "title_size", "medium");
    var imageSize = value(entry, "image_size", "large");
    var contentWidth = value(entry, "content_width", "normal");

    return h(
      "main",
      { className: "content-page" },
      h(
        "div",
        {
          className:
            "section-container content-page-container content-width-" +
            contentWidth
        },

        imageAsset
          ? h("img", {
              className: "content-page-image image-size-" + imageSize,
              src: imageAsset.toString(),
              alt: value(entry, "title", "")
            })
          : null,

        h(
          "h1",
          { className: "title-size-" + titleSize },
          value(entry, "title", "")
        ),

        h(
          "p",
          { className: "content-page-description" },
          value(entry, "description", "")
        ),

        h(
          "div",
          { className: "content-page-body" },
          this.props.widgetFor("body")
        )
      )
    );
  }
});

var PhotographyPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var image = entry.getIn(["data", "image"]);
    var imageAsset = image ? this.props.getAsset(image) : null;

    var titleSize = value(entry, "title_size", "medium");
    var imageSize = value(entry, "image_size", "large");
    var contentWidth = value(entry, "content_width", "normal");
    var galleryColumns = value(entry, "gallery_columns", "2");

    var gallery = this.props.widgetsFor("gallery");

    return h(
      "main",
      { className: "content-page" },
      h(
        "div",
        {
          className:
            "section-container content-page-container content-width-" +
            contentWidth
        },

        imageAsset
          ? h("img", {
              className: "content-page-image image-size-" + imageSize,
              src: imageAsset.toString(),
              alt: value(entry, "title", "")
            })
          : null,

        h(
          "h1",
          { className: "title-size-" + titleSize },
          value(entry, "title", "")
        ),

        h(
          "p",
          { className: "content-page-description" },
          value(entry, "description", "")
        ),

        h(
          "div",
          { className: "content-page-body" },
          this.props.widgetFor("body")
        ),

        gallery
          ? h(
              "div",
              {
                className:
                  "photography-grid gallery-columns-" + galleryColumns
              },
              gallery.map(function (item) {
                var imageWidget = item.getIn(["widgets", "image"]);
                var captionWidget = item.getIn(["widgets", "caption"]);

                return h(
                  "figure",
                  { className: "photography-item" },
                  imageWidget,
                  captionWidget
                    ? h("figcaption", {}, captionWidget)
                    : null
                );
              })
            )
          : null
      )
    );
  }
});

CMS.registerPreviewTemplate("homepage", HomepagePreview);
CMS.registerPreviewTemplate("about", StandardPagePreview);
CMS.registerPreviewTemplate("contact", StandardPagePreview);
CMS.registerPreviewTemplate("photography", PhotographyPreview);
CMS.registerPreviewTemplate("research", StandardPagePreview);
