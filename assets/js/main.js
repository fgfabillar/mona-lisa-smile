// When the page fully loads, this sets up the background style of the webpage.
// I placed this code here (for the background image and picture frame container) because I encountered a technical issue. It wasn't displaying properly in CSS immediately after linking the different pages.
window.onload = function() {
    var body = document.body;
    body.style.height = "100vh";
    body.style.backgroundImage = 'url("images/background-picture.png")';
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
}

// Once the webpage has fully loaded, it starts making the text appear as if it is being typed out and makes the buttons functional.
document.addEventListener("DOMContentLoaded", function() {

// This is to get the element with the class "text" where Leonardo's dialogue will be displayed.
    const div = document.querySelector(".text");

// This is for the interaction buttons.
    const readyButton = document.querySelector(".ready-button");
    const yesButton = document.querySelector(".yes-button");
    const arrowButton = document.querySelector(".arrow-button");

// This is an array containing Leonardo's dialogue texts.
    const texts = [
        "Ciao, my friend! I’m Leonardo, but you may call me Leo.",
        "Ah, you've come to help craft a magnificent masterpiece!",
        "Behold, the canvas awaits your artistic touch!",
        "Together, let's uncover the secrets of Mona Lisa's smile!",
        "Are you ready to start this artistic quest with me?",
        "To grasp Mona Lisa's beauty, let me share the artistry of painting.",
        "Let's start with your mouse as brush and canvas as domain. 🎨🖌️",
        "Hold the mouse button, unleash your creativity on the canvas.",
        "Feel the rhythm, keep painting until the canvas is full.",
        "Remember, apprentice, seek the subject's soul in every stroke.",
        "With patience and precision, let's create a timeless masterpiece."
    ];

// This variable keeps track of the text currently being displayed.
    let currentIndex = 0;

// This function creates a typing effect for the text.
    function textTypingEffect(element, text, i = 0) {

// This clears the text content if it is the start of a new text.
        if (i === 0) {
            element.textContent = "";
        }

// Each character will have a slight delay for the typing effect.
        if (i < text.length) {
            element.textContent += text[i];
            setTimeout(() => textTypingEffect(element, text, i + 1), 50);
        }
    }

// This function controls the display of buttons based on the current text being displayed.
// The "yes" button will be displayed when the text "Are you ready to start this artistic quest with me?" appears.
// The "ready" button will be displayed when the text "With patience and precision, let's create a timeless masterpiece" appears.
    function showButtons(yes, arrow, ready) {
        yesButton.style.display = yes ? "block" : "none";
        arrowButton.style.display = arrow ? "block" : "none";
        readyButton.style.display = ready ? "block" : "none";
    }

// This initializes the first text display.
    textTypingEffect(div, texts[currentIndex]);

// An event listener for the arrow button to navigate through texts.
    arrowButton.addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= texts.length) {
            currentIndex = 0;
        }

// Appropriate button will be displayed on the webpage depending on which part of the text is currently being shown.
        if (currentIndex === 4) {
            showButtons(true, false, false);
        } else if (currentIndex === 10) {
            showButtons(false, false, true);
        } else {
            showButtons(false, true, false);
        }
// This displays the next text.
        textTypingEffect(div, texts[currentIndex]);
    });

// An event listener for the "yes" button.
    yesButton.addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= texts.length) {
            currentIndex = 0;
        }

// Appropriate button will be displayed on the webpage depending on which part of the text is currently being shown.
        if (currentIndex === 10) {
            showButtons(false, false, true);
        } else {
            showButtons(false, true, false);
        }

// This displays the next text.
        textTypingEffect(div, texts[currentIndex]);
    });

// An event listener for the "ready" button.
    readyButton.addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= texts.length) {
            currentIndex = 0;
        }

// This is to hide all buttons after clicking "I am Ready" button.
// This displays the next text.
        showButtons(false, false, false);
        textTypingEffect(div, texts[currentIndex]);

// After clicking "I am Ready" button, the user will be redirected to the next page.
        window.location.href = "second.html";
    });

// Initially, only the arrow button is visible.
// The function is called with parameters (false, true, false) which hides the "Yes" and "I am Ready" buttons (false) while showing the arrow button (true).
    showButtons(false, true, false);
});
