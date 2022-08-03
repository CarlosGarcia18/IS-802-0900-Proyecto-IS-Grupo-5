import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import io from 'socket.io-client'
import { WebSocketsService } from "../../SERVICES/web-sockets.service";
import {chats,messenge} from '../../../assets'

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  //io = io('http://localhost:3000/')
  @ViewChild("messengeContainer") mCont:ElementRef = new ElementRef("")
  constructor(private WebSocketsService:WebSocketsService) {}

  chats:chats[] = []

  ngOnInit(): void {
    this.WebSocketsService.emit("getchats",{"id_user":localStorage.getItem("token")})
    this.WebSocketsService.listen("getchatsresponse").subscribe((data:any)=>{
      this.chats = data
    })
  }

  getLastMessenge(idChat:string){
    this.WebSocketsService.emit("getlastmessage",{"id_chat":idChat})
    this.WebSocketsService.listen("getchatsresponse").subscribe((data:any)=>{
      console.log(data);
      return ""
    })
  }

  ngAfterViewChecked(){
    this.mCont.nativeElement.scrollTop = 
    this.mCont.nativeElement.scrollHeight;
  }


}
