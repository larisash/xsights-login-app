import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConnectionPageComponent } from "./pages/conection-page/conection-page.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { AuthGuard } from "./helpers/auth.gurd";

const routes: Routes = [
  { path: "login", component: ConnectionPageComponent },
  {
    path: "user-detailes",
    component: UserPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "/user-detailes",
    canActivate: [AuthGuard],
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
