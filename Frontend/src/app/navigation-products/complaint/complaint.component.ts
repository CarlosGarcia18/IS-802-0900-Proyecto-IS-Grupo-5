import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor() { }

  complaintModalSwitch = false

  ngOnInit(): void {
  }

  openModalComplaint(){
    this.complaintModalSwitch = true
  }

  closeModalComplaint(){
    this.complaintModalSwitch = false
  }

}
