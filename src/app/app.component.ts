import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  val:number=0
  
Counter(type:string){
type==='add'?this.val++:this.val--

  }
  }
