import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {


  constructor() {}

  ngOnInit() {}

  login(loginForm: NgForm) {
    console.log(loginForm.value, loginForm.valid);
  }
}
