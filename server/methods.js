Meteor.methods({
  updateTreeSchema: function(payload){
    console.log('updateTreeSchema');
    console.log(payload);

    TreeSchemas.update({_id: payload._id},{$set:{
      'dataSource.0.text': payload.data.text
    }});
  }
});
