document.addEventListener("DOMContentLoaded", function () {
  console.log("Website UMKM REYHAN berhasil dibuka.");

  const tombol = document.querySelectorAll(".tombol");

  tombol.forEach(function (item) {
    item.addEventListener("click", function () {
      console.log("Tombol dipilih.");
    });
  });
});