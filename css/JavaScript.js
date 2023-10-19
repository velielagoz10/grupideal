// ..................... bekletme kodu........................
// JavaScript kodunuzu burada ekleyin
document.addEventListener("DOMContentLoaded", function () {
  // Tüm linkleri seçin
  var links = document.querySelectorAll("a");

  // Her bir link için işlem yapın
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      setTimeout(function () {
        window.location.href = link.href;
      }, 1000);
    });
  });
});
/*......................  Yukarı ok tuşu Kodu  .................. */
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
window.onscroll = function () {
  var scrollButton = document.getElementById("goTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};
