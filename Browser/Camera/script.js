let recordBtn=document.querySelector(".record-btn")
let recordBtnCont=document.querySelector(".record-btn-cont")
let captureBtn=document.querySelector(".capture-btn")
let captureBtnCont=document.querySelector(".capture-btn-cont")
let timerCont = document.querySelector(".timer-cont");
let timer = document.querySelector(".timer");
let video = document.querySelector("video");

let constraints = {
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
        console.log("rec started");
    });

    mediaRecorder.addEventListener("dataavailable", (e) => {
        chunks.push(e.data);
        
    })

     mediaRecorder.addEventListener("stop", () => {
         console.log("rec stopped");
         let blob = new Blob(chunks, { type: "video/mp4" });
         let videoURL = URL.createObjectURL(blob);
         console.log(videoURL);

         let a = document.createElement("a");
         a.href = videoURL;
         a.download="myVideo.mp4"
         a.click();
     });
})

let isRecording = false;
recordBtnCont.addEventListener("click", function () {
    if (!isRecording) {
        //we have to record 
         mediaRecorder.start();
        recordBtn.classList.add("scale-record");
        timer.style.display = "block";
    } else {
        //stop the recording 
        mediaRecorder.stop();
        recordBtn.classList.remove("scale-record");
        timer.style.display = "none";
    }
    
    isRecording = !isRecording;
  
});



captureBtnCont.addEventListener("click", function(){
    captureBtn.classList.add("scale-capture");
    setTimeout(() => {
        captureBtn.classList.remove("scale-capture")
    },1000)
})