// When the page fully loads, this sets up the background and layout of the webpage.
// I placed this code here (for the background image and picture frame container) because I encountered a technical issue. It wasn't displaying properly in CSS immediately after linking the different pages.
window.onload = function() {
    var body = document.body;
    body.style.height = "100vh";
    body.style.margin = "0";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.backgroundImage = 'url("images/background-picture.png")';
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.overflow = "hidden";

    var pictureFrameContainer = document.querySelector('.picture-frame-container');
    pictureFrameContainer.style.width = '564px';
    pictureFrameContainer.style.height = '740px';
    pictureFrameContainer.style.backgroundImage = "url('images/pictureframe.jpg')";
    pictureFrameContainer.style.backgroundSize = 'cover';
    pictureFrameContainer.style.backgroundPosition = 'center';
    pictureFrameContainer.style.position = 'relative';
    
// This is to get the canvas element.
    var canvas = document.getElementById('monalisa');
    var ctx = canvas.getContext('2d');

// These are the different variables that represent the initial state of the canvas painting.
    var isPainting = false;
    var imgData = null;
    var brushSize = 40;
    var pixelsFilled = 0;
    var totalPixels = canvas.width * canvas.height;

// This is to create a new image object of Mona Lisa on the canvas.
    var img = new Image();
    img.src = 'images/monalisa-picture.jpg';

// Here, I want to fill the initial canvas first with white. Then, as the user presses the mouse in different areas, the portion of Mona Lisa's image will be revealed.
    img.onload = function() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

// The purpose of saving the image data is to capture the initial state of the canvas before any painting occurs.
        imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    };

// This is an event listener for mouse down.
    canvas.addEventListener('mousedown', function(event) {
        isPainting = true;
        draw(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
    });

// This is an event listener for mouse move.
    canvas.addEventListener('mousemove', function(event) {
        if (isPainting) {
            draw(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
        }
    });

// This is an event listener for mouse up.
    canvas.addEventListener('mouseup', function() {
        isPainting = false;
        checkCompletion();
    });

// This function is to draw strokes on the canvas.
    function draw(x, y) {
        if (!isPainting) return;

// This is to calculate the brush stroke boundaries to ensure that the brush stroke covers the appropriate area on the canvas.
        var startX = x - brushSize / 2;
        var startY = y - brushSize / 2;
        var endX = x + brushSize / 2;
        var endY = y + brushSize / 2;

// This iterates over the pixels within the brush stroke boundaries and checks if each pixel is within the canvas area.
// It also draws the corresponding portion of the image into the canvas and updates the count of filled pixels.
// This process allows painting on the canvas while accurately revealing portions of Mona Lisa's image.
        for (var i = startX; i < endX; i++) {
            for (var j = startY; j < endY; j++) {
                if (i >= 0 && i < canvas.width && j >= 0 && j < canvas.height) {
                    ctx.drawImage(img, i / canvas.width * img.width, j / canvas.height * img.height, 1, 1, i, j, 1, 1);
                    pixelsFilled++;
                }
            }
        }
    }

// This is to hide the arrow button initially while the user is painting the canvas.
    document.querySelector('.arrow-button').style.display = 'none';

// This function checks if painting on the canvas is complete.
    function checkCompletion() {

// This is to check if all pixels have been filled.
        if (pixelsFilled >= totalPixels) {

// An alert message will be displayed when all the pixels have been filled or revealed. 
            alert("Congratulations, my friend! You've completed the task!");

// The arrow button will be shown after the alert message is closed.
            document.querySelector('.arrow-button').style.display = 'block';

// When the arrow button is clicked, the user will be redirected to the last page.
            document.querySelector('.arrow-button').addEventListener('click', function() {

// This is the link to final page.
                window.location.href = "third.html";
            });
        } else {

// This alert message will be displayed when not all pixels have been filled or painted. The user will be informed to continue working on the task.
            alert("Keep brushing the canvas, my friend.");
        }
    }

};