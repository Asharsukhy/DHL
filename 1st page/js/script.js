// proloader part start 


window.addEventListener("load", function () {
    document.querySelector(".preloader-wrapper").classList.add("opacity-0");

    setTimeout(function(){
        document.querySelector(".preloader-wrapper").style.display = "none";
    }, 1000);
})

    // proloader part end 