document.addEventListener('DOMContentLoaded', () => {
  // ======= CARD INTERACTION =======
  const openBtn = document.querySelector('.openBtn');
  const leftFront = document.querySelector('.leftFront');
  const leftBack = document.querySelector('.leftBack');
  const letterContent = document.querySelector('.letterContent');
  const audio = new Audio('./audio/love_song.mp3'); // Thêm file nhạc vào folder

  let isOpen = false;
  let isTyping = false;

  const message = `Cảm ơn em thời gian qua đã dành thời gian cho anhh và anh có những điều muốn gởi gắm đến tình iu của anhh nhân ngày 1-6❤️. Cảm ơn em đã đến bên anhh những lúc anh cô đơn buồn tủi nhất. Em là ánh sáng, là động lực để anh cố gắng hơn mỗi ngày. Bên em anh cảm thấy vui và hạnh phúc lắm. Mong chúng ta sẽ có quãng thời gian hạnh phúc bên nhau thật lâu thật lâu nhiều hơn nữa em nhé. Anh chẳng biết nói gì ngoài lời cảm ơn em, anh yêu em💕`;

  // Gõ chữ hiệu ứng từng ký tự
  async function typeWriter(text, element, delay = 40) {
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

  // Mưa tim rơi
  function createHeartRain() {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = '-2vh';
    heart.style.fontSize = `${Math.random() * 20 + 20}px`;
    heart.style.opacity = Math.random();
    heart.style.animation = 'fall 3s linear';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }

  setInterval(createHeartRain, 500); // Bắt đầu mưa tim nhẹ

  // Mở/gập thiệp khi nhấn nút
  openBtn.addEventListener('click', async () => {
    if (isTyping) return;

    if (!isOpen) {
      isTyping = true;
      leftFront.style.transform = 'rotateY(180deg)';
      leftBack.style.transform = 'rotateY(0deg)';
      await typeWriter(message, letterContent);
      openBtn.textContent = 'Gập thiệp lại';
      audio.play(); // Bắt đầu nhạc
      isTyping = false;
    } else {
      leftFront.style.transform = 'rotateY(0deg)';
      leftBack.style.transform = 'rotateY(180deg)';
      letterContent.textContent = '';
      openBtn.textContent = 'Chạm vào đây đii em bé Dứaaa';
      audio.pause(); // Dừng nhạc
      audio.currentTime = 0;
    }

    isOpen = !isOpen;
  });

  // ======= LIGHTBOX GALLERY + SLIDESHOW =======
  const galleryImages = Array.from(document.querySelectorAll('.photoItem img'));
  let currentIndex = 0;

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
  });

  function showImage(index) {
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');

    const fullImg = document.createElement('img');
    fullImg.classList.add('full-image');
    fullImg.src = galleryImages[index].src;

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '➡️';
    nextBtn.className = 'nextBtn';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '⬅️';
    prevBtn.className = 'prevBtn';

    overlay.appendChild(fullImg);
    overlay.appendChild(prevBtn);
    overlay.appendChild(nextBtn);
    document.body.appendChild(overlay);

    // Đóng overlay khi click ngoài ảnh
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (index + 1) % galleryImages.length;
      fullImg.src = galleryImages[currentIndex].src;
      index = currentIndex;
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (index - 1 + galleryImages.length) % galleryImages.length;
      fullImg.src = galleryImages[currentIndex].src;
      index = currentIndex;
    });
  }
});
