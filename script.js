let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
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
