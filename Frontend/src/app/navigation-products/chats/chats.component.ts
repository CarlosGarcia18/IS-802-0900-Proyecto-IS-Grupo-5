import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {WebSocketsService} from '../../SERVICES/web-sockets.service'

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  @ViewChild("messengeContainer") mCont:ElementRef = new ElementRef("")
  constructor(private WebSocketsService:WebSocketsService) {
    
  }

  ngOnInit(): void {
    var div:HTMLElement|null = document.getElementById('scrollDiv');
      div!.scrollTop = 9999;
    
    this.WebSocketsService.listen("emitMessenge").subscribe((data)=>{
      console.log(data);
    })

    this.valida()
    
  }

  valida(){
    this.WebSocketsService.emit("messenge",[{"hola":"hola"}])
  }

  ngAfterViewChecked(){
    this.mCont.nativeElement.scrollTop = 
    this.mCont.nativeElement.scrollHeight;
  }

}
