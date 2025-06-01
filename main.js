document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.openBtn');
  const leftFront = document.querySelector('.leftFront');
  const leftBack = document.querySelector('.leftBack');
  const letterContent = document.querySelector('.letterContent');

  let isOpen = false;
  let isTyping = false;

  const message = `Cảm ơn em thời gian qua đã dành thời gian cho anhh và anh có những điều muốn gởi gắm đến tình iu của anhh nhân ngày 1-6❤️. Cảm ơn em đã đến bên anhh những lúc anh cô đơn buồn tủi nhất. Em là ánh sáng, là động lực để anh cố gắng hơn mỗi ngày. Bên em anh cảm thấy vui và hạnh phúc lắm. Mong chúng ta sẽ có quãng thời gian hạnh phúc bên nhau thật lâu thật lâu nhiều hơn nữa em nhé. Anh chẳng biết nói gì ngoài lời cảm ơn em, anh yêu em💕`;

  function typeWriter(text, element, delay = 50) {
    element.textContent = '';
    let i = 0;
    return new Promise((resolve) => {
      const timer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
          clearInterval(timer);
          resolve();
        }
      }, delay);
    });
  }

  openBtn.addEventListener('click', async () => {
    if (isTyping) return; // Không làm gì nếu đang gõ

    if (!isOpen) {
      isTyping = true;
      leftFront.style.transform = 'rotateY(180deg)';
      leftBack.style.transform = 'rotateY(0deg)';
      await typeWriter(message, letterContent, 40);
      openBtn.textContent = 'Gập thiệp lại';
      isTyping = false;
    } else {
      leftFront.style.transform = 'rotateY(0deg)';
      leftBack.style.transform = 'rotateY(180deg)';
      letterContent.textContent = '';
      openBtn.textContent = 'Chạm vào đây đii em bé Dứaaa';
    }
    isOpen = !isOpen;
  });
});

// Lightbox đơn giản khi click ảnh
document.querySelectorAll(".photoItem img").forEach((img) => {
  img.addEventListener("click", () => {
    // Tạo overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = 9999;

    // Tạo ảnh lớn
    const largeImg = document.createElement("img");
    largeImg.src = img.src;
    largeImg.style.maxWidth = "90%";
    largeImg.style.maxHeight = "90%";
    largeImg.style.borderRadius = "20px";
    largeImg.style.boxShadow = "0 0 20px rgba(255,255,255,0.7)";
    largeImg.style.animation = "fadeIn 0.5s ease";

    // Thêm ảnh vào overlay
    overlay.appendChild(largeImg);
    document.body.appendChild(overlay);

    // Đóng overlay khi click
    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});

