import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ContatoComponent } from "./contato/contato.component";
import { LoginComponent } from "./login/login.component";
import { ServicosComponent } from "./servicos/servicos.component";
import { HomeComponent } from "./home/home.component";
import { SenacComponent } from "./senac/senac.component";
import { GamesComponent } from "./games/games.component";



const routes: Routes = [

{ path: '', redirectTo: '/header', pathMatch: 'full' },
{ path: 'header', component: HeaderComponent },
{ path: 'jumbotron', component: JumbotronComponent },
{ path: 'contato', component: ContatoComponent },
{ path: 'login', component: LoginComponent },
{ path: 'servicos', component: ServicosComponent },
{ path: 'home', component: HomeComponent },
{ path: 'games', component: GamesComponent },
{ path: 'senac', component: SenacComponent }



];

@NgModule({
  
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]

})

export class AppRoutingModule {}