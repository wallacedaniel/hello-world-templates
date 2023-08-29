document.addEventListener("DOMContentLoaded", function () {
    const helloButton = document.getElementById("helloButton");
    const output = document.getElementById("output");

    helloButton.addEventListener("click", function () {
        output.textContent = "Hello, World!";
    });
});
