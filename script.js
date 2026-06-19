// =====================================
// BEAN & BREW CAFE - PART 3 SCRIPT
// =====================================

// Mobile Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}

// =====================================
// ENQUIRY FORM VALIDATION
// =====================================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name.length < 2) {
            alert("Please enter a valid name.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            return;
        }

        alert("Thank you! Your enquiry has been submitted successfully.");
        enquiryForm.reset();
    });
}

// =====================================
// CONTACT FORM VALIDATION
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (name.length < 2) {
            alert("Please enter a valid name.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 10) {
            alert("Message must contain at least 10 characters.");
            return;
        }

        alert("Message sent successfully!");
        contactForm.reset();
    });
}

// =====================================
// MENU SEARCH
// =====================================

const searchInput = document.getElementById("menuSearch");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// =====================================
// FAQ ACCORDION
// =====================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// =====================================
// IMAGE LIGHTBOX
// =====================================

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (galleryImages.length > 0 && lightbox && lightboxImg) {
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
        });
    });
}

if (lightbox) {
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}