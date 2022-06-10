// Returns the first element that matches selectors.
let addBtn = document.querySelector(".add-btn");
console.log(addBtn);

var isModalPresent = false;
addBtn.addEventListener("click", function () {
   
//    case 1 -> if modal is not present
//              then display modal
    if (!isModalPresent) { 
        // display modal
    }
    
    
    // case 2 -> if modal is Present
    //           then hide modal

    else if(isModalPresent) {
        // display none
    }

    isModalPresent = !isModalPresent;
    
    
})
