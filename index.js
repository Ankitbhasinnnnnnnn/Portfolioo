// Fix Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});


// Toggle Menu
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Colors

const widget = document.querySelector(".widget");
const control = document.querySelector(".control");

widget.addEventListener("click", () => {
  control.classList.toggle("open");
});

const colors = [...document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#0044ff");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const currentColor = color.dataset.id;
    document
      .querySelector(":root")
      .style.setProperty("--customColor", currentColor);
  });
});

window.addEventListener("scroll", () => {
  control.classList.remove("open");
});

// Glidejs

const glide = document.querySelector(".glide");

if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();

AOS.init();

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.8, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.1, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 1.4, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 1.7, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2.1, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 2.4, y: -10 });

gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.2,
});

gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 2.5,
  x: -30,
  stagger: 0.2,
});


// Callback functions

// QUOTE API CALLING 

let quote = document.getElementById("quote");
let author = document.getElementById("quoteh");
const url ='http://quotes.stormconsultancy.co.uk/random.json';

let getQuote = () => {
  fetch(url)
  .then((data) => data.json())
  .then((item) => {
    console.log(item.quote);
    quote.innerHTML = item.quote;
    author.innerHTML = item.author;
  });
} 

window.addEventListener("load" , getQuote);

// fetch api by using github api and using callbac
let quote2  = document.getElementById("quote2");
let author2 = document.getElementById("author2");

let getQuote2 = () => {
  fetch(url) 
  .then((data) => data.json())
  .then((item) => {
    console.log(item);
    quote2.innerHTML = item.quote;
    author2.innerHTML= item.author; 
  })
}
window.addEventListener("load" , getQuote2);

let quote3 = document.getElementById("quote3");
let author3 = document.getElementById("author3");
console.log(quote3);
console.log(author3);


let getQuote3 = () => {
  fetch(url) 
  .then((data) => data.json())
  .then((item) => {
    console.log(item);
    quote3.innerHTML = item.quote;
    author3.innerHTML= item.author; 
  })
}

window.addEventListener("load" , getQuote3);



// const gallery = new photoGallery;




 //   this.API_KEY = '563492ad6f917000010000019b40c63a2a7d4a11955e270eee972d74';
   
class photoGallery {

  
  constructor() {
    
    this.API_KEY = '563492ad6f917000010000019b40c63a2a7d4a11955e270eee972d74';
    this.eventHandle();
    this.galleryDIv = document.querySelector('.blog-box');
    console.log(this.galleryDIv);

  }
  eventHandle() {
    document.addEventListener('DOMContentLoaded' , ()=>{
      this.getImg();
    });
  }
   async getImg() {
    const baseURL = 'https://api.pexels.com/v1/search?query=coding&per_page=1';
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos)
           
    console.log(data);
  }
  async fetchImages(baseURL) {
    const response =  await fetch(baseURL , {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: this.API_KEY,
      }
    });
    console.log(response);
    const data =  await response.json();
    return data;
    console.log(data);
  }
  GenerateHTML(photos){
    photos.forEach(photo =>{
      const item = document.createElement('div');
      item.classList.add('image-container');
      console.log(photo.src.medium);
      console.log(item);
      item.innerHTML =`
      
      <img src ="${photo.src.medium}">
      
      `;
      this.galleryDIv.appendChild(item);
    })
    
  }

}

const gallery = new photoGallery;


