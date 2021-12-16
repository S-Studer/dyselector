

//---Loki text effect---//

const fonts = [
    "acuta",
    "gopher",
    "antique-olive",
    "matrix-ii",
    "matrix-ii",
];

var letters = document.querySelectorAll(".letter");
var count = 0;
var rollIntro = () => {
    letters.forEach(letter => {
        let randomFontIndex = Math.floor(Math.random() * fonts.length);
        let randomFont = fonts[randomFontIndex];
        letter.style.fontFamily = randomFont;
    });
};
var introAnimation = setInterval(function() {
    rollIntro();
    if (count > 10000)
    clearInterval(introAnimation);
    count++;
}, 500);




//---add text to textfield---//

var btn = document.getElementById("textinputbutton");
function goTo() {
    document.getElementById("step1").scrollIntoView({
        behavior: "smooth"
    });
};

btn.addEventListener('click', function () {
    let text = document.getElementById("textinput").value;
    document.getElementById("output").innerHTML = text;
    document.getElementById("step2").scrollIntoView({behavior: 'smooth'});
});




//----toolbar functions----//

//Change color text
var colorText = "";
function changeTextColor() {
    let colorText = document.getElementById("colorInputColor").value;
    document.getElementById("output").style.color = colorText;
    localStorage.setItem("colorFont", colorText);
};
//Change text field color background 
var colorBackground = '';
function changeColorBackground() {
    let colorBackground = document.getElementById("inputBackgroundColor").value;
    document.getElementById("outputField").style.backgroundColor = colorBackground;
    localStorage.setItem("colorBackground", colorBackground);
};
//Change font style
function changeFontFamily() {
    let fontFamilyStyle = document.getElementById("font-family").value;
    document.getElementById("output").style.fontFamily = fontFamilyStyle;
    localStorage.setItem("fontFamily", fontFamilyStyle);
};
//Change font size text
function changeFontSize() {
    let selectSize = document.getElementById("font-size").value;
    document.getElementById("output").style.fontSize = selectSize;
    localStorage.setItem("fontSize", selectSize);
};
//Change word spacing
function changeWordSpacing() {
    let selectSpacing = document.getElementById("word-spacing").value;
    document.getElementById("output").style.wordSpacing = selectSpacing + "px" ;
    localStorage.setItem("wordSpacing", selectSpacing);
};
//Change line-height
function changeLineHeight() {
    let lineHeight = document.getElementById("line-height").value;
    document.getElementById("output").style.lineHeight = lineHeight;
    localStorage.setItem("lineHeight", lineHeight);
};
//Change canvas width
function changeCanvasWidth() {
    let canvasWidth = document.getElementById("canvas-width").value;
    document.getElementById("outputContainer").style.width = canvasWidth + "px" ;
    localStorage.setItem("canvasWidth", canvasWidth);
};




//----Cursor----//

function setline (e) {
    let cursorHL = document.querySelector('.hl');
    cursorHL.setAttribute('style', `top: ${e.clientY}px;`);
};


function addLineCursor() {
    let checkBox = document.getElementById('myCheck');
    let textArea = document.getElementById("outputField")
    if (checkBox.checked) {
        document.querySelector('.cursor').style.display = "initial";
        textArea.addEventListener("mousemove", setline);
    } else {
        document.querySelector('.cursor').style.display = "none";
        window.removeEventListener("mousemove", setline);
  }
};


//----APPLY LOCAL STORAGE STYLE DIRECT----//

//color background
var colorBackground = localStorage.getItem("colorBackground");
document.getElementById("outputField").style.backgroundColor = colorBackground;
//font color
var  colorText = localStorage.getItem("colorFont");
document.getElementById("output").style.color = colorText;
//lineheight
var lineHeight = localStorage.getItem("lineHeight");
document.getElementById("output").style.lineHeight = lineHeight;
//font style
var fontFamily = localStorage.getItem("fontFamily");
document.getElementById("output").style.fontFamily = fontFamily;
//font style
var fontSize = localStorage.getItem("fontSize");
document.getElementById("output").style.fontSize = fontSize;
//word spacing
var wordSpacing = localStorage.getItem("wordSpacing");
document.getElementById("output").style.wordSpacing = wordSpacing;
//canvas width
var canvasWidth = localStorage.getItem("canvas-width");
document.getElementById("outputContainer").style.width = canvasWidth + "px";

