import { Component, OnInit } from "@angular/core";

@Component({
  selector: "connection-page",
  templateUrl: "./connection-page.component.html",
  styleUrls: ["./connection-page.component.css"]
})
export class ConnectionPageComponent implements OnInit {
  newUser = false;
  constructor() {}

  ngOnInit() {}
  changeToNotAMember(event) {
    this.newUser = event;
  }
  changeToMember() {
    this.newUser = false;
  }
}
