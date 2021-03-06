// BrowserPolicy.framing.allowAll();
// BrowserPolicy.content.allowSameOriginForAll();
// BrowserPolicy.content.allowDataUrlForAll();
// BrowserPolicy.content.allowDataUrlForAll("http://localhost");


Meteor.startup(function(){

  Meteor.publish("trees", function () {
    return TreeSchemas.find();
  });

  if((TreeSchemas.find().count() == 0)) {
    TreeSchemas.insert({
        checkboxes: {
            checkChildren: true
        },

        dataSource: [{
            id: 1, text: "My Documents", expanded: true, spriteCssClass: "rootfolder", items: [
                {
                    id: 2, text: "Kendo UI Project", expanded: true, spriteCssClass: "folder", items: [
                        { id: 3, text: "about.html", spriteCssClass: "html" },
                        { id: 4, text: "index.html", spriteCssClass: "html" },
                        { id: 5, text: "logo.png", spriteCssClass: "image" }
                    ]
                },
                {
                    id: 6, text: "New Web Site", expanded: true, spriteCssClass: "folder", items: [
                        { id: 7, text: "mockup.jpg", spriteCssClass: "image" },
                        { id: 8, text: "Research.pdf", spriteCssClass: "pdf" },
                    ]
                },
                {
                    id: 9, text: "Reports", expanded: true, spriteCssClass: "folder", items: [
                        { id: 10, text: "February.pdf", spriteCssClass: "pdf" },
                        { id: 11, text: "March.pdf", spriteCssClass: "pdf" },
                        { id: 12, text: "April.pdf", spriteCssClass: "pdf" }
                    ]
                }
            ]
        }]
    });

  };
});
