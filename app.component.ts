import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
// import { product } from '../models/product';
//import { UserProfileComponent } from './components/user-profile/user-profile.component';
//import { JokesComponent } from './components/jokes/jokes.component';
import { CalciComponent } from './components/calci/calci.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CalciComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angWork';

  // users=[
  //     {name:"Sakshi",isSalaried:false,salary:20000},
  //    {name:"Asvita",isSalaried:false,salary:22000},
  //    {name:"Prakash",isSalaried:false,salary:23000},
  //     {name:"Janhvi",isSalaried:false,salary:24555},
  //   ];

    // receiveData(e:product){
      //  console.log("Data received");
      // document.write("Data received..");
      // console.log(e);
  
}
