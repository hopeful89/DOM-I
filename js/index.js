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

//--------------------------Navigation-----------------------------//

let nav = document.querySelectorAll('nav a');
let ctaH1 = document.querySelector('.cta-text h1');
let ctaBtn = document.querySelector('.cta-text button');
let ctaIMG = document.getElementById('cta-img');

nav[0].textContent = siteContent['nav']['nav-item-1']; 
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];


ctaH1.textContent = 'DOM' + '\n' + 'IS' + '\n'  + 'AWESOME';
ctaH1.style.whiteSpace = 'pre';

ctaBtn.textContent = siteContent['cta']['button'];

ctaIMG.setAttribute('src', siteContent['cta']['img-src']);


//------------------------------Top Content--------------------------//

let textHeaders = document.querySelectorAll('.text-content h4');
let topText = document.querySelectorAll('.text-content p');

textHeaders[0].textContent = siteContent['main-content']['features-h4']
topText[0].textContent = siteContent['main-content']['features-content']

textHeaders[1].textContent = siteContent['main-content']['about-h4']
topText[1].textContent = siteContent['main-content']['about-content']

//------------------------------Middle Img---------------------------//
let middleImg = document.getElementById('middle-img');

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


//-----------------------------Bottom Content-----------------------//

textHeaders[2].textContent = siteContent['main-content']['services-h4']
topText[2].textContent = siteContent['main-content']['services-content']

textHeaders[3].textContent = siteContent['main-content']['product-h4']
topText[3].textContent = siteContent['main-content']['product-content']

textHeaders[4].textContent = siteContent['main-content']['vision-h4']
topText[4].textContent = siteContent['main-content']['vision-content']

//----------------------------Contact Info-------------------------//

let contactHeader = document.querySelector('.contact h4');
let contactParagraph = document.querySelectorAll('.contact p');


contactHeader.textContent = siteContent['contact']['contact-h4'];
contactParagraph[0].textContent = siteContent['contact']['address']
contactParagraph[1].textContent = siteContent['contact']['phone']
contactParagraph[2].textContent = siteContent['contact']['email']

//------------------------------Footer-----------------------------//

let footerParagraph = document.querySelector('footer p');

footerParagraph.textContent = siteContent['footer']['copyright']


