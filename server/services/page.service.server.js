module.exports=function(app){

var pageModel = require("../models/page/page.model.server.js");

app.post("/api/website/:wid/page/",createPage);
app.get("/api/website/:wid/page/",findAllPagesForWebsites);
app.get ("/api/page/:pid/",findPageById);
app.put("/api/page/:pid/",updatePage);
app.delete("/api/page/:pid/",deletePage);

function createPage(req,res){
  var page = req.body;
  pageModel.createPage(page).then(
(data) => {
			res.json(data);
     	}
     )
   }
 

 function findAllPagesForWebsites(req,res){
   var wid = req.params["wid"];
   pageModel.findAllPagesForWebsite(wid).then(
 (data) => {
			res.json(data);
     	  }
        )
      }
	

  function findPageById(req,res){
    var pid = req.params["pid"];
    pageModel.findPageById(pid).then(
      (page) => {
        res.json(page);
      }
    )
  }
	
   function  updatePage(req,res){
   	var pid = req.params["pid"];
      var page = req.body;
  pageModel.updatePage(pid,page).then(
   (data) => {
  			res.json(data);
       	  }
          );
        }

  function deletePage(req,res){
  	var pid = req.params["pid"];
    pageModel.deletePage(pid).then(
      (data) => {
  			res.json(data);
      }
    );
  }
}
