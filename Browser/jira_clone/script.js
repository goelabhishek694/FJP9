// Returns the first element that matches selectors.
let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
// console.log(modalCont);


var isModalPresent = false;
addBtn.addEventListener("click", function () {
   
//    case 1 -> if modal is not present
//              then display modal
    if (!isModalPresent) { 
        // display modal
        modalCont.style.display = "flex";
    }
    
    
    // case 2 -> if modal is Present
    //           then hide modal

    else if(isModalPresent) {
        // display none
        modalCont.style.display = "none";
    }

    isModalPresent = !isModalPresent;
})