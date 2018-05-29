import { Component, OnInit } from '@angular/core';
import[ActivateRoute}from"@angular/router";
import{Page}from"@angular/router";
import{PageService}from"../../../services/page.service.client"]

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
	uid:string;
	wid:string;
	pages:Page[];

  constructor(private pageService:pageService,private activateRouter:ActivateRoute) { 

  ngOnInit() {
  	this.activateRoute.subscribe(params=>){
  		this.uid=params["uid"];
  		this.wid=params['wid'];
  		this.pages=thispageService.findPageByWebsiteId(this.wid);

  	});
  	}
  }
