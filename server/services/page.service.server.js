module.export=function(app){

	pages: Page = [
	  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
	  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
	  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
	]
app.post("/api/website/:wid/page/",createPage);
app.get("/api/website/:wid/page/",findAllPagesForWebsites);
app.get ("/api/page/:pid/",findPageteById);
app.put("/api/page/:pid/",updatePage);
app.delete("/api/page/:pid/",deletePage);


function createPage(req,res){
  var page = req.body;
page._id = Math.floor(Math.random() * 10000).toString();
		page.websiteId = req.params[":wid"];
		pages.push(page);
		res.json(page);
 }

 function findAllPagesForWebsites(req,res){
var wid = req.params[":wid"];
let result = [];
		for(let i =0; i < pages.length;i++){
			if(pages[i].websiteId === wid) {
				result.push(pages[i]);
			}
		}

		res.json(result) ;
	}

	function selectPageteById(pid){

for(let i=0;i<pages.length;i++) {
			if(pages[i]._id === pageId) {
				return pages[i];
			}
		}
	}

function findPageteById(req,res){

var pid = req.params[":pid"];
var page= selectpagebyId(pid);
res.json(page);
 }


 function  updatePage(req,res){
 	var pid = req.params[":pid"];
    var page = req.body;
    var oldPage = selectPageById(pid)
    const index = pages.indexof(oldPage);
  		pages[index].name = page.name;
		pages[index].description = page.description;
		res.json(page);
}

function deletePage(req,res){
	var pid = req.params[":pid"];
      let oldPage = selectPageteById(pid);
		const index = pages.indexOf(oldPage);
		pages.splice(index, 1);
        res.json(pages);
 }
}