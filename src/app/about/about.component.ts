import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  imgPATH = "assets/ura-cat.jpg";
  imgINST = "assets/inst.PNG";
  imgWHT = "assets/whts.PNG";
  imgTG = "assets/tg.PNG";
  name:string = "";

  updateName() {
    console.log(this.name);
  }
  



}
