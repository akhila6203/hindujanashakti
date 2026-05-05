const ttdGrid = document.getElementById("ttdGrid");

if (ttdGrid) {
  const totalImages = 70;

  for (let i = 1; i <= totalImages; i++) {
    const link = document.createElement("a");
    link.href = `../images/ttd${i}.jpg`;

    // 🔥 IMPORTANT (image size)
    link.setAttribute("data-pswp-width", "1200");
    link.setAttribute("data-pswp-height", "1600");

    const img = document.createElement("img");
    img.src = `../images/ttd${i}.jpg`;
    img.alt = `TTD Image ${i}`;
    img.loading = "lazy";

    link.appendChild(img);

    const card = document.createElement("article");
    card.className = "ttd-card";
    card.appendChild(link);

    ttdGrid.appendChild(card);
  }
}




const pressGrid = document.getElementById("pressGrid");

if (pressGrid) {
  const totalImages = 18;

  for (let i = 1; i <= totalImages; i++) {

    const card = document.createElement("article");
    card.className = "press-card";

    const link = document.createElement("a");

    // ✅ CORRECT PATH
    link.href = `../images/PressRelease/pr${i}.jpg`;

    link.setAttribute("data-pswp-width", "1200");
    link.setAttribute("data-pswp-height", "1600");

    const img = document.createElement("img");

    // ✅ SAME PATH HERE ALSO
    img.src = `../images/PressRelease/pr${i}.jpg`;

    img.alt = `Press ${i}`;
    img.loading = "lazy"; // optional

    link.appendChild(img);
    card.appendChild(link);

    pressGrid.appendChild(card);
  }
}