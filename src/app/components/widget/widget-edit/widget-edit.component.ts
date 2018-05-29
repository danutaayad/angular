import { Component, OnInit } from '@angular/core';
imort{Widget}from"../../../models/widget.model.client"
import{WidgetService}from"../../../services/widget.service.client"
import{ActivatedRoute}from"@angular/router"

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  constructor(private widgetService:WidgetService:WidgetService,private activatedRoute:ActivatedRoute) { } 
  	widget:Widget;
  	wgit: string ;

  ngOnInit() {
  	this.activatedRoute.params.subscribe( params=>) {
  		this.wgid=params['wigd'];
  		this.widget=this.widgetService.findwidgetById(wgid);


  	})
  }

}
