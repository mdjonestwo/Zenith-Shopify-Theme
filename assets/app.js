let homeController = new ScrollMagic.Controller();


let navTL =  gsap.timeline();
navTL.fromTo(
    "nav",
    {
        opacity: 0 
    },
    {
        opacity: 1,
        duration: .3
    }    
)
let navScene = new ScrollMagic.Scene({ 
    triggerElement: "nav",
    triggerHook: 1,
    reverse: false, 
    offset: 500,
    duration: 400,
})
.setTween(navTL)
// .addIndicators()
.addTo(homeController)



// Jumbo ANIMATION
let jumboTL =  gsap.timeline();

jumboTL.fromTo(
    ".jumbo h1",
    {
        x: 300,
        opacity: 0 
    },
    {
        x:0,
        opacity: 1,
        duration: 2
    },    
).fromTo(
    ".jumbo h4",
    {
        x: 300,
        opacity: 0 
    },
    {
        x:0,
        opacity: 1,
        duration: 2
    },
    ">-1.3"
)


let imagesTL =  gsap.timeline();
imagesTL.fromTo(
    ".two-collections .l-img",
    {
    
        opacity: 0 
    },
    {
    
        opacity: 1,
        duration: .3
    }    
).fromTo(
    ".two-collections .r-img",
    {
        opacity: 0 
    },
    {
        opacity: 1,
        duration: .3
    }
)

let twoCollectionsScene = new ScrollMagic.Scene({ 
    triggerElement: ".two-collections",
    triggerHook: 1,
    reverse: false, 
    offset: 300,
    duration: 700,
})
.setTween(imagesTL)
// .addIndicators()
.addTo(homeController)


let lgImgTL =  gsap.timeline();
lgImgTL.fromTo(
    ".large-photo",
    {
        opacity: 0 
    },
    {
        opacity: 1,
        duration: .3
    }    
)
let lgImgScene = new ScrollMagic.Scene({ 
    triggerElement: ".large-photo",
    triggerHook: 1,
    reverse: false, 
    offset: 500,
    duration: 400,
})
.setTween(lgImgTL)
// .addIndicators()
.addTo(homeController)


let collectionsTL =  gsap.timeline();
collectionsTL.fromTo(
    ".featured-collections h2",
    {
        x: 400,
        opacity: 0 
    },
    {
        x:0,
        opacity: 1,
        duration: 10
    }    
).fromTo(
    ".featured-collections p",
    {
        x: 400,
        opacity: 0 
    },
    {
        x:0,
        opacity: 1,
        duration: 10
    }, 
    ">-1.3"   
).fromTo(
    ".featured-collections .product-list",
    {
        x: 400,
        opacity: 0 
    },
    {
        x:0,
        opacity: 1,
        duration: 10
    },
    ">-1.3"   
)
let collectionsScene = new ScrollMagic.Scene({ 
    triggerElement: ".featured-collections",
    triggerHook: 1,
    reverse: false, 
    offset: 300,
    duration: 700,
})
.setTween(collectionsTL)
// .addIndicators()
.addTo(homeController)



let twoImgTL =  gsap.timeline();
twoImgTL.fromTo(
    ".two-md-imgs",
    {
        opacity: 0 
    },
    {
        opacity: 1,
        duration: 15
    }    
)
let twoImgScene = new ScrollMagic.Scene({ 
    triggerElement: ".two-md-imgs",
    triggerHook: 1,
    reverse: false, 
    offset: 300,
    duration: 800,
})
.setTween(twoImgTL)
// .addIndicators()
.addTo(homeController)



const menuIcon = document.querySelector(".menu");
const closeMenuIcon = document.querySelector(".close");
const grayOut = document.querySelector(".gray-out");
const navMenu = document.querySelector(".mobile-menu");



menuIcon.addEventListener("click", () => {
    grayOut.style.display = "block"
    navMenu.style.display = "block"
    // document.body.style.overflowY = "hidden"
    // document.html.style.overflowY = "hidden"
    // document.getElementsByTagName("HTML")[0].style.overflowY = "hidden"

});


closeMenuIcon.addEventListener("click", () => {
    grayOut.style.display = "none"
    navMenu.style.display = "none"
});