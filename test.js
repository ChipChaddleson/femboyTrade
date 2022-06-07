let i = 0;

setInterval(() => {
    console.log(i%20);
    let pike = document.getElementsByClassName("p" + (i%20))[0]
    pike.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    pike.style.top = (88 - Math.floor(Math.random()*3)) + "%";
    i++;
}, 40);

