import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpService,
    private toast: ToastrService,
    private route: Router,
    private aroute: ActivatedRoute,
    private spinner: NgxSpinnerService,
  ) {
    localStorage.clear()
  }
  password
  email
  submit(f) {
    if (f.valid) {
      this.spinner.show()
      this.http.auth({ email: this.email, password: this.password }).subscribe(data => {
        console.log(data);
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('name', data.name);
        this.spinner.hide()
        this.route.navigate(["/pages"]);

      }, err => {
        console.log(err);
        this.spinner.hide()
        this.toast.error(err.error.message)
      })
    } else {
      this.toast.error("please provide the credentials")
    }
  }

  ngOnInit(): void {
  }

}
