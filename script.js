// Gerekli HTML elementlerini seçme
const slapButton = document.getElementById('slap-button');
const slapCountSpan = document.getElementById('slap-count');
const slapEmoji = document.getElementById('slap-emoji');

let slapCount = 0; // Sayaç değişkeni

// Butona tıklama olayını dinleme
slapButton.addEventListener('click', function() {
    // 1. Sayacı artır ve güncelle
    slapCount++;
    slapCountSpan.textContent = slapCount;

    // 2. Tokat animasyonunu başlat
    slapEmoji.classList.add('slap-active');

    // 3. Kısa bir süre sonra animasyonu sıfırla (emoji yukarı çıksın)
    // Bu, emojinin görünüp hemen kaybolmasını sağlar
    setTimeout(() => {
        slapEmoji.classList.remove('slap-active');
    }, 150); // CSS'deki transition süresiyle (0.15s) uyumlu olmalı
    
    // Opsiyonel: Butona tıklayınca fotoğrafı hafifçe salla
    const photoArea = document.querySelector('.photo-area');
    photoArea.classList.add('shake');
    
    // Sallanma animasyonunu kısa süre sonra kaldır
    setTimeout(() => {
        photoArea.classList.remove('shake');
    }, 100);
});

// *Opsiyonel*: Sallanma animasyonu için CSS kodu (style.css'e ekleyin)
/*
@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    20% { transform: translate(-1px, 2px) rotate(-1deg); }
    40% { transform: translate(-3px, 1px) rotate(1deg); }
    60% { transform: translate(2px, -1px) rotate(0deg); }
    80% { transform: translate(-1px, -1px) rotate(-1deg); }
    100% { transform: translate(1px, 2px) rotate(1deg); }
}

.shake {
    animation: shake 0.1s;
}
*/