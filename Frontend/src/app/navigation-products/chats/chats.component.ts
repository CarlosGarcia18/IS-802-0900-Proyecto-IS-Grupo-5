import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  @ViewChild("messengeContainer") mCont:ElementRef = new ElementRef("")
  constructor() {
    
  }

  ngOnInit(): void {
    var div:HTMLElement|null = document.getElementById('scrollDiv');
      div!.scrollTop = 9999;
  }

  ngAfterViewChecked(){
    this.mCont.nativeElement.scrollTop = 
    this.mCont.nativeElement.scrollHeight;
  }

}
