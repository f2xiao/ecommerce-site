
module.exports = {

  createCrud: function (req, res) {
    // console.log(res.json(req.body));
    const data = res.json(req.body);
         return data;
    },
    fetchCrud:function(){
      data="data was fetched";
      return data;   
    },
    editCrud:function(editData){
      data= "Data is edited by id: "+editData;
      return data; 
    },
    UpdateCrud:function(updateId){
      data= "Data was updated by id: "+updateId;
      return data; 
    },
    deleteCrud:function(deleteId){
      data= "Data was deleted by id: "+deleteId;
      return data; 
    }
  }