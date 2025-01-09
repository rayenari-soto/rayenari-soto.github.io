//This is a comment. I'll get used to use them.
/*This is alsa a comment.
The only difference is that it contains line breaks.*/
const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/japan1.jpg") {
        myImage.setAttribute("src", "images/japan3.jpg");
    } else {
        myImage.setAttribute("src", "images/japan1.jpg");
    }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Japan is cool, ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Japan is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
    setUserName();
});
