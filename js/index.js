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

// Task 1: Create selectors to point your data into elements
// Task 2: Update the HTML with the JSON data

// Add Content for Header Nav Bar
  const headerNavList = document.querySelectorAll('header nav a');
  let i = 1;
  headerNavList.forEach( navItem => {
    navItem.textContent = siteContent["nav"]["nav-item-" + i];
    i++;
  });

//CTA 
  // CTA H1
  const ctaHeader = document.querySelector('.cta-text h1');
  ctaHeader.textContent = siteContent["cta"]["h1"];

  // CTA Button
  const ctaHeaderbutton = document.querySelector('.cta-text button');
  ctaHeaderbutton.textContent = siteContent["cta"]["button"];

  // CTA Image
  const ctaHeaderIMG = document.getElementById('cta-img');
  ctaHeaderIMG.src = siteContent["cta"]["img-src"];

// Main Content
  // Content headers
  const contentHeaders = document.querySelectorAll('.main-content h4');

  const contentHeadersText = Object.keys(siteContent["main-content"]).filter(text => text.includes("h4"));
  
  i = 0;
  contentHeaders.forEach( header => {
    header.textContent = siteContent["main-content"][contentHeadersText[i++]];
  });
  
  // Text Content
  const contentp = document.querySelectorAll('.main-content p');

  const contentpText = Object.keys(siteContent["main-content"]).filter(text => text.includes("content"));
  
  i = 0;
  contentp.forEach( text => {
    text.textContent = siteContent["main-content"][contentpText[i++]];
  });

  // Middle Image
  const contentIMG = document.getElementById('middle-img');
  contentIMG.src = siteContent["main-content"]["middle-img-src"];

// Contact Section 
  // Contact Header
  const contactHeader = document.querySelector('.contact h4');
  contactHeader.textContent = siteContent["contact"]["contact-h4"];

  // Contact Text
  const contactText = Array.from(document.querySelectorAll('.contact p'));
  contactText[0].textContent = siteContent["contact"]["address"];
  contactText[1].textContent = siteContent["contact"]["phone"];
  contactText[2].textContent = siteContent["contact"]["email"];


  // JSON Content below
  // "footer": {
  //   "copyright" : "Copyright Great Idea! 2018"