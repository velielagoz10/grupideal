// ..................... bekletme kodu........................
// // JavaScript kodunuzu burada ekleyin
// document.addEventListener("DOMContentLoaded", function () {
//   // Tüm linkleri seçin
//   var links = document.querySelectorAll("a");

//   // Her bir link için işlem yapın
//   links.forEach(function (link) {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       setTimeout(function () {
//         window.location.href = link.href;
//       }, 1000);
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Belirli class ismine sahip linkleri seçin
  var links = document.querySelectorAll("a.bekle");

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

/*......................  Bayiler  .................. */

$(document).ready(function () {
  $("#filterInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("table tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
/*......................  yan icon .................. */
window.addEventListener("scroll", function () {
  // İkonun görünür hale getirilmesi gereken kaydırma mesafesi (örneğin, 200 piksel aşağıya inince).
  var scrollThreshold = 60;
  var icon = document.getElementById("iletisim-icon");

  if (window.scrollY > scrollThreshold) {
    // İletişim ikonunu görünür yapın.
    icon.style.display = "block";
  } else {
    // İletişim ikonunu gizleyin.
    icon.style.display = "none";
  }
});

var pdfUrl = "../img/fatura-bilgileri.pdf";

document
  .getElementById("pdfDownloadButton")
  .addEventListener("click", function () {
    var a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "Grup İdeal Madencilik Fatura Bilgileri.pdf"; // İndirilen dosyanın adı
    a.target = "_blank";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
