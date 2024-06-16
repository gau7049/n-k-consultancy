function toggleText() {
    var moreText = document.getElementById("moreText");
    var readMoreBtn = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMoreBtn.innerHTML = "Read less";
    } else {
        moreText.style.display = "none";
        readMoreBtn.innerHTML = "Read more";
    }
}
