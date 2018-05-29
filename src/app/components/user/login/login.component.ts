import { Component, OnInit,ViewChild) } from '@angular/core';
import{NgForm}from'@angular/forms'
import{User Service}from'../../../services/user.service.client'
import{User}from '../../../models/user.model.client'
import{router}from'@angular/router'

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls;['./login.component.css']
})

export class LoginComponent implements OnInit{
	@ViewChild(#f)loginForm:NgForm;

	username;string
	password:string;
	errrorflag;boolean;
	
	constractor(private userService:UserService,private router:Router){}
	ngOnInit(){}
	login(){
		this.username=this.loginForm.value.username;
		this.password=thisloginForm.value.password;

		const user:User=this.userService.finduserByCredentials9this.username,this.password);
if(user){
	//navigate to profile
	
	this. errorflag = false;
	this.router.navigate({'user',user._id]);
} else 
{
	this.errorFlag=true;
    }
   }
}




 
