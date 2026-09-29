/* ---------------- TYPING EFFECT ---------------- */

const typingText =
    "A letter from the most stubborn person who loves you. ❤️";

const typingElement =
    document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < typingText.length) {

        typingElement.textContent +=
            typingText.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }
}

typeWriter();


/* ---------------- SCROLL ---------------- */

function scrollToLetter() {

    document.querySelector(".letter-container")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ---------------- FLOATING HEARTS ---------------- */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        ["❤️", "💗", "💕", "💖", "✨"]
        [Math.floor(Math.random() * 5)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 15 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 6 + 5) + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 12000);

}


setInterval(createHeart, 800);


/* ---------------- FORGIVENESS BUTTON ---------------- */

const forgiveButton =
    document.getElementById("forgiveBtn");

const response =
    document.getElementById("response");


forgiveButton.addEventListener(
    "click",
    function () {

        response.innerHTML =
            "I knew it... meri Bebe mujhe maaf kar degi. 🥹❤️";

        forgiveButton.innerHTML =
            "Thank You, Bebe ❤️";

        forgiveButton.style.transform =
            "scale(1.05)";

        createHeart();

        for (let i = 0; i < 15; i++) {

            setTimeout(() => {
                createHeart();
            }, i * 100);

        }

    }
);