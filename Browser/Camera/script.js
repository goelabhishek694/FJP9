var uid = new ShortUniqueId();
const recordBtn = document.querySelector(".record-btn");
const recordBtnCont=document.querySelector(".record-btn-cont")
const captureBtn=document.querySelector(".capture-btn")
const captureBtnCont=document.querySelector(".capture-btn-cont")
const timerCont = document.querySelector(".timer-cont");
const timer = document.querySelector(".timer");
const video = document.querySelector("video");
let filterColor = "transparent";
const gallery = document.querySelector(".gallery");
const constraints = {
    video: true,
    audio: true
}
let mediaRecorder;
//this will store the video mediastream 
let chunks = [];
navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream;

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.addEventListener("start", () => {
        chunks = [];
    });
    mediaRecorder.addEventListener("dataavailable", (e) => {
        chunks.push(e.data); 
        //single blob of video created
        
    })

     mediaRecorder.addEventListener("stop", () => {
         let blob = new Blob(chunks, { type: "video/mp4" });
         let videoURL = URL.createObjectURL(blob);
       
         if (db) {
             let videoID = uid();
             let dbTransaction=db.transaction("video", "readwrite");
             let videoStore = dbTransaction.objectStore("video");
             let videoEntry = {
               id: videoID,
               blobData: blob,
             };
             let addRequest = videoStore.add(videoEntry); 
             addRequest.onsuccess = function () {
               
             };

         }
     });
})

let isRecording = false;
recordBtnCont.addEventListener("click", function () {
    if (!isRecording) {
        //we have to record 
        mediaRecorder.start();
        startTimer();
        recordBtn.classList.add("scale-record");
        timer.style.display = "block";
    } else {
        //stop the recording 
        mediaRecorder.stop();
        stopTimer();
        recordBtn.classList.remove("scale-record");
        timer.style.display = "none";
    }
    
    isRecording = !isRecording;
  
});

let counter = 0;
let timerID;
function startTimer() {
    timer.style.display = "block";
    function displayTimer() {
        let totalSeconds = counter;

        let hours = Number.parseInt(totalSeconds / 3600);
        totalSeconds = totalSeconds % 3600;

        let minutes = Number.parseInt(totalSeconds / 60);
        totalSeconds = totalSeconds % 60;

        let seconds = totalSeconds;

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        timer.innerText = `${hours}:${minutes}:${seconds}`;

        counter++;
    }
    timerID=setInterval(displayTimer, 1000);

}

function stopTimer() {
    clearInterval(timerID);
    timer.innerText = "00:00:00";
    timer.style.display = "none";
}

captureBtnCont.addEventListener("click", function(){
    captureBtn.classList.add("scale-capture");
    //canvas 
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = filterColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);




    let imageURL = canvas.toDataURL("image/jpeg");
    if (db) {
      let imageID = uid();
      let dbTransaction=db.transaction("image", "readwrite");
      let imageStore = dbTransaction.objectStore("image");
      let imageEntry = {
        id: `img-${imageID}`,
        url: imageURL,
      };
      let addRequest = imageStore.add(imageEntry);
      addRequest.onsuccess = function () {
      };
    }

    setTimeout(() => {
        captureBtn.classList.remove("scale-capture")
    },1000)
})

let allFilters = document.querySelectorAll(".filter");
let filterLayer = document.querySelector(".filter-layer");

allFilters.forEach((filterEle) => {
    filterEle.addEventListener("click", () => {
        filterColor = window.getComputedStyle(filterEle).getPropertyValue('background-color');
        filterLayer.style.backgroundColor = filterColor;
    });
});

gallery.addEventListener("click", () => {
  location.assign("./gallery.html");
});