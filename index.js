


const inputs = document.querySelectorAll('.filters input');


function handleUpdate(){
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`,this.value +suffix);
}


inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));

const reset = document.querySelector('.btn-reset');
let r = document.querySelector(':root');




reset.addEventListener('click', (event) =>{
       r.style.setProperty('--blur', '0px');
       r.style.setProperty('--spacing', '10px');
       r.style.setProperty('--sepia', '0%');
       r.style.setProperty('--saturate', '100%');
       r.style.setProperty('--huerotate', '0deg');
       r.style.setProperty('--base', 'ffc600');

       document.getElementsByName("blur")[0].value='0';
       document.getElementsByName("spacing")[0].value = "10";
       document.getElementsByName("sepia")[0].value = "0";
       document.getElementsByName("saturate")[0].value = "100";
       document.getElementsByName("huerotate")[0].value = "0";
       document.getElementsByName("base")[0].value = "#ffc600";

})




const full = document.querySelector('.fullscreen');
let element = document.getElementById("all");

full.addEventListener('click', (event) => {
    openFullscreen();
});

full.addEventListener('click', (event) => {
    closeFullscreen();
});

function openFullscreen() {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
}

function closeFullscreen() {
    document.exitFullscreen();
}



const img = document.querySelector('img');
const btn = document.querySelector('.btn-load--input');
const realFileBtn = document.getElementById("real-file");



btn.addEventListener('click',function(){
    realFileBtn.click();
});

realFileBtn.addEventListener("change",function(){
    if(realFileBtn.value){
        img.src = URL.createObjectURL(realFileBtn.files[0]);
    }
})

