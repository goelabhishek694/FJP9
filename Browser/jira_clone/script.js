var uid = new ShortUniqueId();
// Returns the first element that matches selectors.
const addBtn = document.querySelector(".add-btn");
console.log(addBtn);
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".textarea-cont");
// console.log(modalCont);
const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1]; //black
const mainCont = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
console.log(allPriorityColors);
const toolBoxColors = document.querySelectorAll(".toolbox-color-cont>*");
let ticketsArr = [];
const removeBtn = document.querySelector(".fa-xmark");
console.log(removeBtn);
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
  // console.log(e);
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

function createTicket(ticketColor, data, ticketId) {
  //generate uid
  let id = ticketId || uid();

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

  //if ticket is being generated for the first time save it in local Storage
  if (!ticketId) {
    ticketsArr.push({
      ticketId: id,
      ticketColor,
      ticketTask: data,
    });
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
  }

  handleRemoval(ticketCont,id);
}

//getting data from localStorage, for re rendering of tickets
if (localStorage.getItem("tickets")) {
  ticketsArr = JSON.parse(localStorage.getItem("tickets"));
  ticketsArr.forEach(ticketObj => createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketId))
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


//geting tickets on the basis of ticketColor
for (let i = 0; i < toolBoxColors.length; i++) {
  toolBoxColors[i].addEventListener("click", function () {
    let currColor = toolBoxColors[i].classList[0];
    let filteredTickets = ticketsArr.filter(ticketObj => ticketObj.ticketColor == currColor);
    console.log(filteredTickets);

    //remove all tickets
    let allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach(ticket => ticket.remove());

    //display filtered tickets 
    filteredTickets.forEach(ticket => createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId));
  })

  //display all the tickets of all priorities on double clicking any priorityColor
  toolBoxColors[i].addEventListener("dblclick", function () {
    
    //remove tickets of specific color from UI
    let allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach((ticket) => ticket.remove());

    //display all tickets
    ticketsArr.forEach(ticket => createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId));
  })
}

var isRemoveBtnActive = false;
removeBtn.addEventListener("click", function () {
  console.log("in btn");
  //    case 1 -> if removeBtn is not active
  //              then make it active i.e. red color
  if (!isRemoveBtnActive) {
    // display modal
    console.log("inside not active");
    removeBtn.style.color = "red";
  }

  // case 2 -> if removeBtn is active
  //           then make it inactive i.e. white color
  else if (isRemoveBtnActive) {
    // display none
    console.log("inside active");
    removeBtn.style.color = "white";
  }

  isRemoveBtnActive = !isRemoveBtnActive;
});

function handleRemoval(ticketCont,id){
  ticketCont.addEventListener("click", function () {
    if (!isRemoveBtnActive) return;

    //remove from ticketsArr
    let idx = getTicketIdx(id);
    console.log(idx);
    ticketsArr.splice(idx, 1);
    console.log(ticketsArr);
    //set in local storage
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    //remove from frontend
    ticketCont.remove();
  });
}

// function getTicketIdx(id) {
  
//   return ticketsArr.forEach(ticketObj => {
    
//     if (ticketObj.ticketId == id) {
      
//       let idx = ticketsArr.indexOf(ticketObj);
//       return idx;
//     }
    
//   })
  
// }

function getTicketIdx(id) { 
  let idx = ticketsArr.findIndex(ticketObj => {
    return ticketObj.ticketId==id
  })
  return idx;
}