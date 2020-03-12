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
headerNav[0].textContent = siteContent.nav[0];
headerNav[1].textContent = 'Product';
headerNav[2].textContent = 'Vision';
headerNav[3].textContent = 'Features';
headerNav[4].textContent = 'About';
headerNav[5].textContent = 'Contact';


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