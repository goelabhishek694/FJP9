var uid = new ShortUniqueId();
// Returns the first element that matches selectors.
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".textarea-cont");
// console.log(modalCont);
const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1]; //black
const mainCont = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
console.log(allPriorityColors);





var isModalPresent = false;
addBtn.addEventListener("click", function (e) {
  console.log(e);
  //    case 1 -> if modal is not present
  //              then display modal
  if (!isModalPresent) {
    // display modal
    modalCont.style.display = "flex";
  }

  // case 2 -> if modal is Present
  //           then hide modal
  else if (isModalPresent) {
    // display none
    modalCont.style.display = "none";
  }

  isModalPresent = !isModalPresent;
});

modalCont.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key == "Shift") {
    //1 call createTicket()
    console.log(textArea.value);
    createTicket(modalPriorityColor, textArea.value);
    //2 alter display and update isModalPresent
    modalCont.style.display = "none";
    isModalPresent = false;
    textArea.value = "";
  }
});

function createTicket(ticketColor, data) {
  //generate uid
  let id = uid();

  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="task-area">${data}</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `;
  mainCont.appendChild(ticketCont);
}

allPriorityColors.forEach(colorElement => {
    colorElement.addEventListener("click", function () {
        allPriorityColors.forEach(el => {
            el.classList.remove("active");
        })
        colorElement.classList.add("active");
        modalPriorityColor = colorElement.classList[0];
    })
});

// let div = document.createElement("div");
// let p = document.createElement("p");
// let a = document.createElement("a");
// let img = document.createElement("img");
// div.append("hello");
// {/* <div>hello</div>; */}
// div.append(p,a,img);


// <div>
//     <p></p>
//     <a></a>
//     <img></img>
// </div>

// div.append("hello"); //wont work, error 
// div.appendChild(p, a, img); // only paragraph tag will pe appended rest will be ignored 

