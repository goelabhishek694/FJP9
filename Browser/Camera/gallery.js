const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  location.assign("./index.html");
});

setTimeout(() => {
  if (db) {
    let galleryCont = document.querySelector(".gallery-cont");
    let imageDBTransaction = db.transaction("image", "readonly");
    let imageStore = imageDBTransaction.objectStore("image");
    let imageRequest = imageStore.getAll();
    imageRequest.onsuccess = function () {
      if (imageRequest.result !== undefined) {
        // console.log("Images", imageRequest.result);
        let imageResult = imageRequest.result;
        imageResult.forEach((imageObj) => {
          //create a img container
          // console.log(imageObj);
          let url = imageObj.url;
          var imageEle = document.createElement("div");
          imageEle.setAttribute("class", "media-cont");
          imageEle.setAttribute("id", imageObj.id);
          // add image to that container
          imageEle.innerHTML = `
                <div class="media">
                <img src="${url}"/>
                </div>
                <div class="delete action-btn">DELETE</div>
                <div class="download action-btn">DOWNLOAD</div>
                `;
          //appendchild in gallery-cont
          galleryCont.appendChild(imageEle);
          let deleteBtn = imageEle.querySelector(".delete");
          deleteBtn.addEventListener("click", deleteListener);

          let downloadBtn = imageEle.querySelector(".download");
          downloadBtn.addEventListener("click", downloadListener);
        });
      } else {
        // console.log("No such images");
      }
    };

    let videoDBTransaction = db.transaction("video", "readonly");
    let videoStore = videoDBTransaction.objectStore("video");
    let videoRequest = videoStore.getAll();
    videoRequest.onsuccess = () => {
      let videoResult = videoRequest.result;
      videoResult.forEach((videoObj) => {
        let videoElem = document.createElement("div");
        videoElem.setAttribute("class", "media-cont");
        videoElem.setAttribute("id", videoObj.id);
        let url = URL.createObjectURL(videoObj.blobData);

        videoElem.innerHTML = `
                <div class="media">
                <video autoplay muted loop src="${url}"/>
                </div>
                <div class="delete action-btn">DELETE</div>
                <div class="download action-btn">DOWNLOAD</div>
              `;

        galleryCont.appendChild(videoElem);

        let deleteBtn = videoElem.querySelector(".delete");
        deleteBtn.addEventListener("click", deleteListener);

        let downloadBtn = videoElem.querySelector(".download");
        downloadBtn.addEventListener("click", downloadListener);
      });
    };
  }
}, 100);

function deleteListener(e) {
  //get id from e
  let id = e.target.parentElement.getAttribute("id");
  // console.log(id);
  //find id belongs to which store
  let mediaType = id.split("-")[0]; //img
  // console.log(mediaType);
  // go into the db of video/img
  //delete it
  if (mediaType == "img") {
    let imageDBTransaction = db.transaction("image", "readwrite");
    let imageStore = imageDBTransaction.objectStore("image");
    imageStore.delete(id);
  } else {
    //video
    let videoDBTransaction = db.transaction("video", "readwrite");
    let videoStore = videoDBTransaction.objectStore("video");
    videoStore.delete(id);
  }
  //delete from frontend
  e.target.parentElement.remove();
}

function downloadListener(e) {
  let id = e.target.parentElement.getAttribute("id");
  // console.log(id);
  //find id belongs to which store
  let mediaType = id.split("-")[0]; //img
  // console.log(mediaType);
  // go into the db of video/img
  //delete it
  if (mediaType == "img") {
    let imageDBTransaction = db.transaction("image", "readonly");
    let imageStore = imageDBTransaction.objectStore("image");
    let imageRequest = imageStore.get(id);
    imageRequest.onsuccess = () => {
      let imageResult = imageRequest.result;
      let url = imageResult.url;

      let a = document.createElement("a");
      a.href = url;
      a.download = `${id}.png`;
      a.click();
      a.remove();
    };
  } else {
    //video
    let videoDBTransaction = db.transaction("video", "readonly");
    let videoStore = videoDBTransaction.objectStore("video");
    let videoRequest = videoStore.get(id);
    videoRequest.onsuccess = () => {
      let videoResult = videoRequest.result;
      let url = URL.createObjectURL(videoResult.blobData);
      let a = document.createElement("a");
      a.href = url;
      a.download = `img-${id}.png`;
      a.click();
      a.remove();
    };
  }
}

