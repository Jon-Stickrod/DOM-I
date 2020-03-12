const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerNav = document.querySelectorAll('header nav a');
headerNav[0].textContent = siteContent['nav']['nav-item-1'];
headerNav[1].textContent = siteContent['nav']['nav-item-2'];
headerNav[2].textContent = siteContent['nav']['nav-item-3'];
headerNav[3].textContent = siteContent['nav']['nav-item-4'];
headerNav[4].textContent = siteContent['nav']['nav-item-5'];
headerNav[5].textContent = siteContent['nav']['nav-item-6'];
for(let i=0;i<headerNav.length;i++){
	console.log(headerNav[i].style.color = "green");
}


let h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent.cta.h1;
h1.style.textAlign = 'center';

let button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;

let image = document.getElementById('cta-img');
image.setAttribute('src', siteContent['cta']['img-src']);

let topContent = document.querySelectorAll('.top-content .text-content');

//features
let featuresH4 = topContent[0].querySelector('h4')
featuresH4.textContent = siteContent['main-content']['features-h4'];

let featuresP = topContent[0].querySelector('p')
featuresP.textContent = siteContent['main-content']['features-content'];

//about

let aboutH4 = topContent[1].querySelector('h4')
aboutH4.textContent = siteContent['main-content']['about-h4'];

let aboutP = topContent[1].querySelector('p')
aboutP.textContent = siteContent['main-content']['about-content'];

//image
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
//bottom content
let bottomContent = document.querySelectorAll('.bottom-content .text-content');

//service
//let  = bottomContent[].querySelector('')
//__.textContent = siteContent['main-content'][''];

let serviceH4 = bottomContent[0].querySelector('h4')
serviceH4.textContent = siteContent['main-content']['services-h4'];

let serviceP = bottomContent[0].querySelector('p')
serviceP.textContent = siteContent['main-content']['services-content'];

//product
let productH4 = bottomContent[1].querySelector('h4')
productH4.textContent = siteContent['main-content']['product-h4'];

let productP = bottomContent[1].querySelector('p')
productP.textContent = siteContent['main-content']['product-content'];

//vision
let visionH4 = bottomContent[2].querySelector('h4')
visionH4.textContent = siteContent['main-content']['vision-h4'];

let visionP = bottomContent[2].querySelector('p')
visionP.textContent = siteContent['main-content']['vision-content'];

// 
let closer = document.querySelectorAll('.contact p');
closer[0].textContent = siteContent['contact']['address'];
closer[1].textContent = siteContent['contact']['phone'];
closer[2].textContent = siteContent['contact']['email'];

let closerH4 = document.querySelector('.contact h4');
closerH4.textContent = siteContent['contact']['contact-h4'];

//foter
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


let NavNode = document.querySelector("nav");
// .appendChild();
let Append = document.createElement("a");
Append.textContent = "Appended";
Append.style.color = "green"
console.log(Append);
NavNode.appendChild(Append);

// .insertBefore();
let Prepend = document.createElement("a");
Prepend.textContent = "Prepended";
Prepend.style.color = "green"
console.log(Prepend);
NavNode.insertBefore(Prepend, Append);
