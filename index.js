


// next img
let now = new Date();
let currenthour = now.getHours();
alert(now.getHours());

const base = 'https://github.com/rolling-scopes-school/stage1-tasks/tree/assets/images/';

const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];


function dateTime() {
    let timeday = "";
    if (currenthour > 0 && currenthour < 6) {
        timeday = "night";
    }
    else if (currenthour > 5 && currenthour < 12) {
        timeday = "morning";
    }
    else if (currenthour > 11 && currenthour < 18) {
        timeday = "day";
    }
    else if (currenthour > 17 && currenthour < 24) {
        timeday = "evening";
    }
    return timeday;
}


let i = 0;
const img = document.querySelector('img');
const btn = document.querySelector('.btn-next');
console.log(btn);

function viewBgImage(src) {
    img.onload = () => {
        img.src = `url(${src})`;
    };
}

function getImage() {
    const index = i % images.length;
    let dataDays = dateTime();
    const imageSrc = base + dataDays + images[index];
    viewBgImage(imageSrc);
    i++;
    btn.disabled = true;
    setTimeout(function () { btn.disabled = false }, 1000);
}
btn.addEventListener('click', getImage);
