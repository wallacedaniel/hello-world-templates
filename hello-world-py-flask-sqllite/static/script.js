
// document.addEventListener("DOMContentLoaded", function () {
//     const helloButton = document.getElementById("helloButton");
//     const output = document.getElementById("output");
//     const getTimestampsButton = document.getElementById("getTimestamps");
//     const timestampList = document.getElementById("timestampList");

//     helloButton.addEventListener("click", function () {
//         output.textContent = "Hello, World!";
//     });

//     getTimestampsButton.addEventListener("click", function () {
//         fetch('/').then(response => response.json()).then(data => {
//             timestampList.innerHTML = '';
//             data.timestamps.forEach(timestamp => {
//                 const li = document.createElement('li');
//                 li.textContent = timestamp[0];
//                 timestampList.appendChild(li);
//             });
//         }).catch(error => {
//             console.error(error);
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const helloButton = document.getElementById("helloButton");
    const output = document.getElementById("output");
    const getTimestampsButton = document.getElementById("getTimestamps");
    const timestampList = document.getElementById("timestampList");

    helloButton.addEventListener("click", function () {
        output.textContent = "Hello, World!";
    });

    getTimestampsButton.addEventListener("click", function () {
        fetch('/', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest' // Set the header for AJAX request
            }
        }).then(response => response.json()).then(data => {
            console.log(data);
            timestampList.innerHTML = '';
            data.timestamps.forEach(timestamp => {
                const li = document.createElement('li');
                li.textContent = timestamp[0];
                timestampList.appendChild(li);
            });
        }).catch(error => {
            console.error(error);
        });
    });
});
