class Carousel {
    constructor(effect){
        this.effect = effect;
        this.carousel = this.effect.dataset.button;
        this.images = this.activeTab


        if(this.carousel === "button"){
            this.carousel = document.querySelector("left-button")
          } else {
            this.carousel = document.querySelector("right-button")         
         }

        this.carousel = Array.from(this.carousel).map(button => new otherCarousel(button));


        this.effect.addEventListener('click', () => this.selectTab());

    }

    selectTab(){
        const buttons = document.querySelector('.carousel');

        buttons.forEach(button => button.classList.remove(".active-tab"));

        const images = document.querySelectorAll('.carousel[src]');

        images.forEach(tab => tab.style.display = "none");

        this.effect.classList.add(".active-tab");

        this.images.forEach(image => image.selectCard());
    }
}

class otherCarousel {
    constructor (param){
        this.param = param;
    }

    selectCard(){
        this.cardElement.style.display = "flex";
    }
}




let carousel = document.querySelector(".carousel");
carousel.forEach(button => new Carousel(button));
console.log(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
