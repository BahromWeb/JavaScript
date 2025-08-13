
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    console.log("Right click detected on:", event.target);
});

