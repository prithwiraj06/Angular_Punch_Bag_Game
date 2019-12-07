import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Punch-Bag';
  health: number = 100;
  ended: boolean = false;
  punch() {    
    this.health -=10;
    if(this.health <= 0){
      this.ended = true;
    }
  }

  restartGame() {    
    this.health = 100;
    this.ended = false;
  }


}
