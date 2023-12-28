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
  // Get the image element
  var img = document.getElementById("qrImage");

  // Get the image source URL
  var imageUrl = img.src;

  // console.log(imageUrl);

  // Fetch the image
  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      // Convert the blob to a data URL
      var reader = new FileReader();
      reader.onloadend = function () {
        // Create a temporary anchor element
        var a = document.createElement("a");
        a.href = reader.result;

        // Set the download attribute with a desired file name
        a.download = "downloaded_image.jpg";

        // Trigger a click on the anchor element to start the download
        a.click();
      };
      reader.readAsDataURL(blob);
    })
    .catch((error) => console.error("Error fetching image:", error));
}
