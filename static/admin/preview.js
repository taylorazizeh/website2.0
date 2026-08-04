CMS.registerPreviewStyle("/css/style.css");

var StandardPagePreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var image = entry.getIn(["data", "image"]);
    var imageAsset = image ? this.props.getAsset(image) : null;

    return h(
      "main",
      { className: "content-page" },
      h(
        "div",
        { className: "section-container content-page-container" },

        imageAsset
          ? h("img", {
              className: "content-page-image",
              src: imageAsset.toString(),
              alt: entry.getIn(["data", "title"]) || ""
            })
          : null,

        h("h1", {}, entry.getIn(["data", "title"]) || ""),
        h(
          "p",
          { className: "content-page-description" },
          entry.getIn(["data", "description"]) || ""
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

var ResearchPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var image = entry.getIn(["data", "image"]);
    var imageAsset = image ? this.props.getAsset(image) : null;

    return h(
      "main",
      { className: "content-page" },
      h(
        "div",
        { className: "section-container content-page-container" },

        imageAsset
          ? h("img", {
              className: "content-page-image",
              src: imageAsset.toString(),
              alt: entry.getIn(["data", "title"]) || ""
            })
          : null,

        h("p", { className: "section-label" }, "Research"),
        h("h1", {}, entry.getIn(["data", "title"]) || ""),
        h(
          "p",
          { className: "content-page-description" },
          entry.getIn(["data", "description"]) || ""
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

var PublicationPreview = createClass({
  render: function () {
    var entry = this.props.entry;

    return h(
      "main",
      { className: "publications-page" },
      h(
        "div",
        { className: "section-container" },
        h(
          "article",
          { className: "publication-entry" },

          h(
            "p",
            { className: "publication-year" },
            String(entry.getIn(["data", "year"]) || "")
          ),

          h(
            "div",
            {},
            h("h2", {}, entry.getIn(["data", "title"]) || ""),
            h(
              "p",
              { className: "publication-authors" },
              entry.getIn(["data", "authors"]) || ""
            ),
            h(
              "p",
              { className: "publication-journal" },
              entry.getIn(["data", "journal"]) || ""
            ),
            h(
              "div",
              { className: "publication-summary" },
              this.props.widgetFor("body")
            )
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("about", StandardPagePreview);
CMS.registerPreviewTemplate("contact", StandardPagePreview);
CMS.registerPreviewTemplate("photography", StandardPagePreview);
CMS.registerPreviewTemplate("research", ResearchPreview);
CMS.registerPreviewTemplate("publications", PublicationPreview);
