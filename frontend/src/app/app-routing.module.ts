import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SummonerpageComponent } from './summonerpage/summonerpage.component';

const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:'summoners/EUW1/Yusi', component:SummonerpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
