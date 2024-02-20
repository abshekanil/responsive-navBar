let navBtn = document.querySelector('.navBtn');
let responsive = document.querySelector('.responsive-class');
let showClass = document.querySelector('.showclass');

navBtn.addEventListener("click", function() {
    if (window.matchMedia("(max-width: 850px)").matches) {
        // Adjust as per your layout
        showClass.style.display = "block"; 
        showClass.classList.toggle('showclass');

    }
});

window.addEventListener("resize", function(){
    if(!window.matchMedia("(max-width: 850px)").matches)
    {
        showClass.classList.remove('showclass');
        showClass.style.display = "none";
    }
})
