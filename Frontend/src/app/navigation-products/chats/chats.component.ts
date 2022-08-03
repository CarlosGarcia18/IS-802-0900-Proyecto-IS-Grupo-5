import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import io from 'socket.io-client'
import { WebSocketsService } from "../../SERVICES/web-sockets.service";
import {chats,sendMessenge,listMessenge} from '../../../assets'
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  dataMessenge=new FormGroup({
    messenge: new FormControl('', [Validators.required] )
  });

  dataM:sendMessenge = {
    fk_id_chat:"",
    fk_id_user:"",
    text_contents:""
  }

  get messengeControl():FormControl{
    return this.dataMessenge.get('messenge') as FormControl
  }

  @ViewChild("messengeContainer") mCont:ElementRef = new ElementRef("")
  constructor(private WebSocketsService:WebSocketsService) {}

  chats:chats[] = []
  messenge:listMessenge[]|null = null
  token:string|null = ""

  ngOnInit(): void {
    this.dataM.fk_id_user = localStorage.getItem('token')
    this.token = localStorage.getItem('token')
    this.WebSocketsService.emit("getchats",{"id_user":this.token})
    this.WebSocketsService.listen("getchatsresponse").subscribe((data:any)=>{
      this.chats = data
    })
  }

  getMessages(idChat:string){
    this.WebSocketsService.emit("listmessages",{"id":idChat})
    this.WebSocketsService.listen("listmessagesResponse").subscribe((data:any)=>{
      if (data.status=="200") {
        this.messenge = data.msg
      }
    })
  }

  sendMessenge(idChat:string){
    this.dataM.fk_id_chat = idChat
    this.WebSocketsService.emit("listmessages",this.dataM)
    this.WebSocketsService.listen("listmessagesResponse").subscribe((data:any)=>{
      if (data.status=="200") {
        this.messenge = data.msg
      }
    })
  }

  ngAfterViewChecked(){
    this.mCont.nativeElement.scrollTop = 
    this.mCont.nativeElement.scrollHeight;
  }


}
