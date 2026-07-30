/* ========================================= */
/* REDDY BGMI ID STORE */
/* PREMIUM SCRIPT */
/* PART 1 */
/* ========================================= */

/* Loader */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2500);

});


/* Progress Bar */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progressBar").style.width = progress + "%";

});


/* Custom Cursor */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


/* Counter Animation */

const counters = document.querySelectorAll(".count");

const speed = 80;

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = target;

        }

    };

    update();

});


/* ========================================= */
/* PART 2 */
/* SCROLL REVEAL */
/* ========================================= */

const revealElements = document.querySelectorAll(
".product-card,.review-card,.counter-box,.trust-card,.contact,.hero"
);

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("fade");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/* ========================================= */
/* MUSIC BUTTON */
/* ========================================= */

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

if(musicBtn && bgMusic){

    musicBtn.addEventListener("click",()=>{

        if(bgMusic.paused){

            bgMusic.play();

            musicBtn.innerHTML="🔊";

        }else{

            bgMusic.pause();

            musicBtn.innerHTML="🎵";

        }

    });

}



/* ========================================= */
/* PURCHASE POPUP */
/* ========================================= */

const popup = document.getElementById("purchasePopup");

const popupMessages=[

"🔥 Rahul purchased a Glacier ID",

"🔥 Aman purchased a Mythic ID",

"🔥 Vivek purchased an X-Suit ID",

"🔥 Aryan purchased a Conqueror ID",

"🔥 Aditya purchased a Premium BGMI ID",

"🔥 Saurabh purchased a Rare Account"

];

let popupIndex=0;

function changePopup(){

    if(!popup) return;

    popup.innerHTML=popupMessages[popupIndex];

    popupIndex++;

    if(popupIndex>=popupMessages.length){

        popupIndex=0;

    }

}

changePopup();

setInterval(changePopup,6000);



/* ========================================= */
/* SMOOTH SCROLL */
/* ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ========================================= */
/* PART 3 */
/* HERO FLOAT ANIMATION */
/* ========================================= */

const heroLogo = document.querySelector(".hero-image img");

if(heroLogo){

    let angle = 0;

    function floatHero(){

        angle += 0.02;

        heroLogo.style.transform =
        `translateY(${Math.sin(angle)*12}px)
         rotate(${Math.sin(angle)*2}deg)`;

        requestAnimationFrame(floatHero);

    }

    floatHero();

}


/* ========================================= */
/* PRODUCT CARD GLOW */
/* ========================================= */

const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        // soft cool-white glow that follows the cursor (Apple-glass feel)
        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.10),
        rgba(255,255,255,.05) 55%)`;

        // subtle 3D tilt toward the cursor
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform =
        `translateY(-10px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.05)";
        card.style.transform="translateY(0px) perspective(800px) rotateX(0deg) rotateY(0deg)";

    });

});


/* ========================================= */
/* BUTTON RIPPLE EFFECT */
/* ========================================= */

document.querySelectorAll(".buy-btn,.contact-btn").forEach(button=>{

    button.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        ripple.classList.add("ripple");

        const rect=button.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});


/* ========================================= */
/* NAVBAR SHADOW */
/* ========================================= */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(8,8,10,.75)";

        navbar.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

    }else{

        navbar.style.background="rgba(10,10,12,.55)";

        navbar.style.boxShadow="none";

    }

});


/* ========================================= */
/* PARALLAX EFFECT */
/* ========================================= */

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.pageX)/40;

    const y=(window.innerHeight/2-e.pageY)/40;

    document.querySelectorAll(".light1,.light2").forEach(light=>{

        light.style.transform=`translate(${x}px,${y}px)`;

    });

});


/* ========================================= */
/* AUTO YEAR */
/* ========================================= */

const year=document.getElementById("year");

if(year){

    year.innerHTML=new Date().getFullYear();

}

/* ========================================= */
/* PART 4 */
/* FINAL PREMIUM EFFECTS */
/* ========================================= */


/* ========================= */
/* SCROLL TO TOP BUTTON */
/* ========================= */

const topBtn = document.createElement("div");

topBtn.innerHTML = "⬆";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
right:25px;
bottom:190px;
width:52px;
height:52px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
cursor:pointer;
font-size:20px;
font-weight:bold;
opacity:0;
transition:.4s;
z-index:999;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.opacity="1";

    }else{

        topBtn.style.opacity="0";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ========================= */
/* BUTTON HOVER GLOW */
/* ========================= */

document.querySelectorAll(".buy-btn,.join-btn,.telegram-btn,.whatsapp-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 8px 35px rgba(255,255,255,.22)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="none";

    });

    // liquid/magnetic hover: button subtly follows the cursor
    btn.addEventListener("mousemove",(e)=>{

        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.25;

        btn.style.transform = `translate(${x}px, ${y}px)`;

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform = "translate(0px, 0px)";

    });

});


/* ========================= */
/* RANDOM FLOATING ANIMATION */
/* ========================= */

document.querySelectorAll(".product-card,.review-card").forEach((card,index)=>{

    card.animate(

        [

            {transform:"translateY(0px)"},

            {transform:"translateY(-8px)"},

            {transform:"translateY(0px)"}

        ],

        {

            duration:3000+index*500,

            iterations:Infinity

        }

    );

});


/* ========================= */
/* LOGO ROTATE EFFECT */
/* ========================= */

const footerLogo=document.querySelector("footer img");

if(footerLogo){

    footerLogo.addEventListener("mouseenter",()=>{

        footerLogo.style.transition=".6s";

        footerLogo.style.transform="rotate(360deg) scale(1.15)";

    });

    footerLogo.addEventListener("mouseleave",()=>{

        footerLogo.style.transform="rotate(0deg) scale(1)";

    });

}


/* ========================= */
/* PAGE VISIBILITY */
/* ========================= */

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        document.title="👑 Come Back to REDDY BGMI STORE";

    }else{

        document.title="REDDY BGMI ID STORE";

    }

});


/* ========================= */
/* PERFORMANCE */
/* ========================= */

window.addEventListener("load",()=>{

    console.log("%cREDDY BGMI STORE Loaded Successfully",

    "color:gold;font-size:18px;font-weight:bold;");

});


/* ========================= */
/* END */
/* ========================= */
