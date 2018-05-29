import { Component, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute, Router}from"@angular/router";
// import{Page}from"@angular/router";
// import{PageService}from"../../../services/page.service.client"
import{NgForm}from "@angular/forms"

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
	uid:string;
	wid:string;
	pid:string;
	name:string;
	description:string;
	page: any;

  constructor(private pageService:PageService,
  	private activateRouter:ActivatedRoute, private router:Router) { }

  ngOnInit() { 
  	    this.activateRouter.params.subscribe(params=>{
  		this.uid=params["uid"];
  		this.wid=params['wid'];
  		this.pid=params["pid"];
  		this.page=this.pageService.findPageById(this.pid);
        this.name=this.page.name;
        this.description=this.page.description;
});
  }
update(){
	this.name=this.pageForm.value.name;
	this.description=this.pageForm.value.description;
const updatedPage:Page={
	_id:this.pid,
	name:this.name,
	description:this.description,
	websiteId:this.wid
  }
  this.pageService.updatePage(this.pid);
this.router.navigate(["user",this.uid,"website",this.wid,"page"]);
}
remove(){
	this.pageService.deletePage(this.pid);
	this.router.navigate(["user",this.uid,"website",this.wid,"page"]);
  }
}