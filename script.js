let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let download_button = document.getElementById("download_button");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    download_button.style.display = "block";
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

qrText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    generateQR();
  }
});

document.getElementById("facebook").addEventListener("click", function () {
  window.open("https://www.facebook.com/sharer/sharer.php?u=#", "_blank");
});

document.getElementById("instagram").addEventListener("click", function () {
  window.open(
    "https://instagram.com/intent/tweet?url=#&text=Check out this QR code!",
    "_blank"
  );
});

document.getElementById("whatsapp").addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/shareArticle?url=#&title=QR Code&summary=Check out this QR code!",
    "_blank"
  );
});

function downloadImage() {
  var img = document.getElementById("qrImage");

  // Check if the image source is not empty and it's fully loaded
  if (img.src && img.complete) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    var dataUrl = canvas.toDataURL("image/jpeg");

    var a = document.createElement("a");
    a.href = dataUrl;
    a.download = "qr_code_image.jpg";

    a.click();
  } else {
    // If the image is not yet fully loaded, wait for it to load and then download
    img.onload = function () {
      downloadImage(); // Call the download function again once the image is fully loaded
    };
  }
}
