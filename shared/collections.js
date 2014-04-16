TreeSchemas = new Meteor.Collection("trees");
TreeSchemas.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});
