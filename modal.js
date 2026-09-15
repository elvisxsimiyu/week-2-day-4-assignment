//picking elements
const modalOverlay = document.querySelectorAll(".modal");
const modalContent = document.querySelectorAll(".modal-content");
const learnMoreBtn = document.querySelectorAll(".learn");
const closeBtn = document.querySelectorAll(".close");



learnMoreBtn.forEach(function(btn , i){

    btn.addEventListener("click" , function(){
        modalOverlay[i].style.display="flex";
        modalOverlay[i].classList.add("show");
        document.body.style.overflow = "hidden";
     })

})



closeBtn.forEach(function(btn,i){

    btn.addEventListener("click" ,function(){
        modalOverlay[i].style.display="none";
        modalOverlay[i].classList.remove("show");
        document.body.style.overflow="auto";

    })

})



modalOverlay.forEach(function(modal,i){

    modal.addEventListener("click" , function(event){
        if(event.target === modal ){
            modalOverlay[i].style.display="none";
            modalOverlay[i].classList.remove("show");
            document.body.style.overflow="auto";
        }
    })

   

})

document.addEventListener("keydown" , function(event){
    if(event.key === "Escape"){
        modalOverlay.forEach(function(modal){
            if(modal.classList.contains("show")){
                modal.style.display ="none";
                modal.classList.remove = "show";
                document.body.style.overflow="auto";
            }
        })
    }
})


