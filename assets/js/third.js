// When the page fully loads, this sets up the background style of the webpage.
// I placed this code here (for the background image and picture frame container) because I encountered a technical issue. It wasn't displaying properly in CSS immediately after linking the different pages.
window.onload = function(){
    var body = document.body;
    body.style.height = "100vh";
    body.style.backgroundImage = 'url("images/background-picture.png")';
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
}

// This code waits for the HTML content to fully load before initiating the typing effect.
document.addEventListener("DOMContentLoaded", function(){

// Get the element with the class "text".
    const div = document.querySelector(".text");

// This is the text that will be displayed after the page has loaded. The "texts" is an array containing a single string value.
    const texts = [
        "Congratulations, my dear friend! Your masterpiece of Mona Lisa is a triumph of artistry and skill. Well done!"
    ];

// This variable keeps track of the text currently being displayed.
    let currentIndex = 0;

// This function creates a typing effect for the text.
    function textTypingEffect(text, i = 0) {

// This is to check if there are more characters left to display. The "i" here represents the current index position within the text string being typed out.
// The "i" is incremented each time a character is added to the displayed text, until all characters have been displayed.
        if (i < text.length) {
            div.textContent += text[i];
// The next character of the words will appear after a short delay.
            setTimeout(() => textTypingEffect(text, i + 1), 50);
        }
    }
// This starts the typing effect with the first text in the "texts" array.
    textTypingEffect(texts[currentIndex]);
});
