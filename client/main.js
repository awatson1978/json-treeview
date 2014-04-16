Template.mainPage.rendered = function(){
  console.log('Template.mainPage.rendered');


  // $("#secondTreeview").kendoTreeView({
  //     checkboxes: {
  //         checkChildren: true
  //     },
  //
  //     dataSource: [{
  //         id: 1, text: "My Documents", expanded: true, spriteCssClass: "rootfolder", items: [
  //             {
  //                 id: 2, text: "Kendo UI Project", expanded: true, spriteCssClass: "folder", items: [
  //                     { id: 3, text: "about.html", spriteCssClass: "html" },
  //                     { id: 4, text: "index.html", spriteCssClass: "html" },
  //                     { id: 5, text: "logo.png", spriteCssClass: "image" }
  //                 ]
  //             },
  //             {
  //                 id: 6, text: "New Web Site", expanded: true, spriteCssClass: "folder", items: [
  //                     { id: 7, text: "mockup.jpg", spriteCssClass: "image" },
  //                     { id: 8, text: "Research.pdf", spriteCssClass: "pdf" },
  //                 ]
  //             },
  //             {
  //                 id: 9, text: "Reports", expanded: true, spriteCssClass: "folder", items: [
  //                     { id: 10, text: "February.pdf", spriteCssClass: "pdf" },
  //                     { id: 11, text: "March.pdf", spriteCssClass: "pdf" },
  //                     { id: 12, text: "April.pdf", spriteCssClass: "pdf" }
  //                 ]
  //             }
  //         ]
  //     }]
  // });

};
Session.setDefault('treeSchemaId', false);

Template.mainPage.renderTree = function(){
  $("#treeview").kendoTreeView();

  var treeSchema = TreeSchemas.find().fetch()[0];
  if(treeSchema){
    console.log(treeSchema);
    Session.set('treeSchemaId', treeSchema._id);

    $("#secondTreeview").kendoTreeView(treeSchema);
    return treeSchema._id;
  }else{
    return "---";
  }
}

Template.mainPage.events({
  'click #miniMongoUpdate':function(){
    TreeSchemas.update({_id: Session.get('treeSchemaId')},{$set:{
      'dataSource.0.text': $("#treeValueInput").val()
    }});
  },
  'click #meteorMethodUpdate':function(){
    var payload = {
      _id: Session.get('treeSchemaId'),
      data: {
        text: $("#treeValueInput").val()
      }
    }
    Meteor.call('updateTreeSchema', payload, function(error, result){
      if(error){console.error(error)};
      if(result){console.log(result)};
    })
  }
});
