
import { Component, OnInit,ViewChild } from '@angular/core';
import[ActivateRoute, Router}from"@angular/router";
import{Page}from"@angular/router";
import{PageService}from"../../../services/page.service.client"]
import{NgForm}from "@angular/forms"
@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
	@ViewChild ("f") pageForm:ngForm
	uid:string;
	wid:string;
    name:string;
    description:string;

  constructor(private pageService:pageService,private activateRouter:ActivateRoute, private router:Router) { }

  ngOnInit() {
 this.activateRoute.subscribe(params=>){
  		this.uid=params["uid"];
  		this.wid=params['wid'];
  		
  		
});
}
create(){
	this.name=this.pageForm.value.name;
	this.description=this.pageForm.value.description;

	const newPage:Page={
	_id:"",
	name:this.name,
	websiteId:this.wid,
	description:this.description,	
	}
this.pageService.createPage (this.wid,newPage);	
this.router.navigate(["user",this.uid,"website",this.wid,"page"]);

 }
}
