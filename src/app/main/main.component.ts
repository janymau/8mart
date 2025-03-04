import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  imagePATH = 'assets/black-cat.jpg';
  ballonPATH = 'assets/ballons.PNG';
  private yesButtonElement!: HTMLElement;
  private noButtonElement!:HTMLElement;
  private bodyMainText!:HTMLElement;
  
  private bodyMainText2!:HTMLElement;

  private a = 20;
  private count = 0;


  constructor(private route:Router) {}

  ngAfterViewInit() {
    this.yesButtonElement = document.querySelector(".body-chose-button") as HTMLElement;
    this.noButtonElement = document.querySelector(".body-chose-button-no") as HTMLElement;
    this.bodyMainText = document.querySelector(".body-text") as HTMLElement;
    this.bodyMainText2 = document.querySelector(".body-text-2") as HTMLElement;

  }
  yesButton() {
    for (let i = 0; i < 8; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");

        const img = document.createElement("img");
        img.src = this.ballonPATH;
        img.className = "balloon-img";
        balloon.appendChild(img);
        document.body.appendChild(balloon);
        img.style.width="200px";
        img.style.height="200px";

        balloon.style.position = "absolute";

        const maxLeft = window.innerWidth - 400; 
        const minLeft = 150; 

        balloon.style.left = `${Math.random() * (maxLeft - minLeft) + minLeft}px`;
        balloon.style.top = `${window.innerHeight}px`;

        setTimeout(() => {
            let topPos = window.innerHeight;
            const moveUp = setInterval(() => {
                topPos -= 7;
                balloon.style.top = `${topPos}px`;
                if (topPos <= 0) {
                    clearInterval(moveUp);
                    balloon.remove(); 
                }
            }, 20);
        }, 100);
    }

    setTimeout(() => {
        this.route.navigate(["about"]);
    }, 3000);
}

  noButton(){
    this.noButtonElement.style.position = "absolute";
    if(this.count < 5){
      const yesWidthHeight = window.getComputedStyle(this.yesButtonElement); 
      const noWidthHeight = window.getComputedStyle(this.noButtonElement);

      let yesWidth = parseInt(yesWidthHeight.width);
      let yesHeight = parseInt(yesWidthHeight.height);
      let yesFontSize = parseInt(yesWidthHeight.fontSize);
      
      let noWidth = parseInt(noWidthHeight.width);
      let noHeightt = parseInt(noWidthHeight.height);
      let noFontSize = parseInt(noWidthHeight.fontSize);
      let noLeftMax = parseInt(noWidthHeight.right)-150;
      let noLeft = parseInt(noWidthHeight.left) - 150;
      let noTop = parseInt(noWidthHeight.top) - 50;

      this.yesButtonElement.style.width =  `${yesWidth+this.a}px`;
      this.yesButtonElement.style.height = `${yesHeight+this.a}px`;
      this.yesButtonElement.style.fontSize = `${yesFontSize+10}px`;

      this.noButtonElement.style.width = `${noWidth-10}px`;
      this.noButtonElement.style.height = `${noHeightt-10}px`;

      this.noButtonElement.style.left = `${Math.random()* noWidth}px`
      this.noButtonElement.style.top = `${Math.random() * window.innerHeight}px`

      this.imagePATH = "assets/angry-cat.jpg";
      


      this.count++;
    }
    else{
      this.imagePATH = "assets/black-cat-2.jpg"

      this.noButtonElement.style.display = "none";
   this.bodyMainText.innerText = "Ты чеееее многое теряешь!!";
      this.bodyMainText2.innerText = "Последний шанс детка, подумай";

    }
    
  }

}
