const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-menu"); 

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
   accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active"); 
        navMenu.classList.remove("active");
    }))
