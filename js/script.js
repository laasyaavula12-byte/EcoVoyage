/* ===========================
   EcoVoyage JavaScript
=========================== */

// ===========================
// Sticky Navbar
// ===========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        if (window.scrollY > 50) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    }

});

// ===========================
// Back To Top Button
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.display = "none";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===========================
// Destination Search
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const cards = document.querySelectorAll(".destination-card");

    const grid = document.querySelector(".destination-grid");

    // No Results Message
    const noResult = document.createElement("h2");

    noResult.innerHTML = "😔 No destination found";

    noResult.style.textAlign = "center";

    noResult.style.margin = "40px";

    noResult.style.display = "none";

    if (grid) {

        grid.after(noResult);

    }

    searchInput.addEventListener("input", function () {

        const value = searchInput.value.trim().toLowerCase();

        let found = false;

        cards.forEach(function(card){

            const keywords = (card.dataset.search || "").toLowerCase();

            if (keywords.includes(value)) {

                card.style.display = "block";

                found = true;

            } else {

                card.style.display = "none";

            }

        });

        if (value === "") {

            cards.forEach(function(card){

                card.style.display = "block";

            });

            noResult.style.display = "none";

            return;

        }

        noResult.style.display = found ? "none" : "block";

    });

});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".fade-up").forEach((element) => {

    observer.observe(element);

});
// ================= DARK MODE =================

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";

    }

});
const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = Number(counter.dataset.target);

                let count = 0;

                const update = () => {

                    const increment = Math.ceil(target / 50);

                    count += increment;

                    if (count < target) {

                        counter.textContent = count;
                        requestAnimationFrame(update);

                    } else {

                        counter.textContent = target + "+";

                    }

                };

                update();

                observer.unobserve(counter);

            }

        });

    }, { threshold: 0.4 });

    counters.forEach(counter => observer.observe(counter));

}
/* ==========================
DID YOU KNOW
========================== */

const facts = [

"🌸 Japan has more than 600 varieties of cherry blossom trees.",

"🎨 Holi, India's Festival of Colors, celebrates the arrival of spring.",

"🎵 South Korea's K-pop industry has fans in almost every country.",

"🏔 The Swiss Alps cover nearly 60% of Switzerland.",

"🏮 China's Lantern Festival marks the end of Lunar New Year celebrations.",

"🌴 Bali is known as the 'Island of the Gods' because of its rich spiritual heritage."

];

const factElement = document.getElementById("travelFact");

if (factElement) {

const randomFact = facts[Math.floor(Math.random() * facts.length)];

factElement.textContent = randomFact;

}
/*=========================
GALLERY LIGHTBOX
=========================*/

const images = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox = document.getElementById("closeLightbox");

if(images.length){

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=image.src;

});

});

}

if(closeLightbox){

closeLightbox.onclick=()=>{

lightbox.style.display="none";

};

}

if(lightbox){

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};
}
/* ==========================
LOADING SCREEN
========================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.classList.add("loader-hidden");

},1200);

}

});
/*=========================
TRAVEL FACTS
=========================*/

const travelFacts = [

"🇯🇵 Japan has over 6,800 islands.",

"🇮🇳 India celebrates more than 30 major festivals every year.",

"🇨🇭 Switzerland has over 1,500 beautiful lakes.",

"🇰🇷 South Korea is famous for its Cherry Blossom season.",

"🇨🇳 The Great Wall of China stretches over 21,000 km.",

"🇮🇩 Bali is known as the Island of the Gods."

];

const fact = document.getElementById("travelFact");

let currentFact = 0;

if(fact){

setInterval(()=>{

currentFact++;

if(currentFact>=travelFacts.length){

currentFact=0;

}

fact.textContent=travelFacts[currentFact];

},4000);

}
console.log("JavaScript is working!");

