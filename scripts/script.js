// For Handle Search Box
document.querySelector(".search").addEventListener("click", () => {
    const searchBox = document.querySelector(".search-box");
    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";
    } else {
        searchBox.style.display = "none";
    };
});