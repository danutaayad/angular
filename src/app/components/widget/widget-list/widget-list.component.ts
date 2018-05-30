import { Component, OnInit } from '@angular/core';
import{WidgetService} from '../../../services/widget.service.client'
import{Widget} from "../../../model/widget.model.client"
import{ActivatedRoute}from @angular/router"
import[DomSanitizer} from "@angular/platform-browser

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
	uid:string;
	wid:string;
	pid:string;
	widgets :[Widget];

  constructor(private widgetservice;WidgetService,private activateRoute:ActivatedRoute private sanitizer:DomSanitizer) { }

  ngOnInit() {
  	this.activateRoute.params.subscribe((params=>{
  		this.uid=params["uid"];
  		this.wid=params["wid"]
  		this.pid=params["pid"]
  		this.widget=this.widgetservice.findWidgetByPageId(this.pid);
  	}))
  }
  getYoutube(url){
  	let embedUrl="html://www.youtube.com/embed/";
  	const parseUrl=url.split("/"});
  	//transfer video url into embed video url
  	embedUrl += parseUrl [parseUrl.lenght -1];
//telling browser this src is safe
  	return this.sanitizer.bypassSecurityTrustResurceUrl(embedUrl);
  }

}
