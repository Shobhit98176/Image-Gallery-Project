let fullImageBox = document.getElementById("fullImageBox");
let fullImage = document.getElementById("fullImage");
let downloadBtn = document.getElementById("downloadBtn");

let imageList = Array.from(document.querySelectorAll('.image-gallery img'));
let currentImageIndex = 0;

// Show full image
function openFullImage(pic) {
    // Match even if src is slightly different
    currentImageIndex = imageList.findIndex(img => pic.includes(img.src) || img.src.includes(pic));
    fullImageBox.style.display = "flex";
    fullImage.src = pic;
    downloadBtn.href = pic;
}

// Close image
function closeFullImage() {
    fullImageBox.style.display = "none";
}

// Next image
function nextImage() {
    if (imageList.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % imageList.length;
    let nextSrc = imageList[currentImageIndex].src;
    fullImage.src = nextSrc;
    downloadBtn.href = nextSrc;
}

// Previous image
function prevImage() {
    if (imageList.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
    let prevSrc = imageList[currentImageIndex].src;
    fullImage.src = prevSrc;
    downloadBtn.href = prevSrc;
}
