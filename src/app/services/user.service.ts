import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../models/user";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class UserService {
  BASE_URL = "https://api-dev-all.antelopesystem.com/SignalsServer/client/api";

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getCurrentUser() {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }

  register(user: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers: headers };
    return this.http.post(`${this.BASE_URL}/users/register`, user, options);
  }

  edit(user: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      auth_token: JSON.parse(localStorage.getItem("token"))
    });
    let options = { headers: headers };
    return this.http.put<any>(`${this.BASE_URL}/users`, user, options).pipe(
      map(user => {
        if (user && user.success) {
          this.authService.setUser(user);
        }

        return user;
      })
    );
  }
}
