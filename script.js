// Set tanggal pembukaan (format: tahun, bulan (0-11), tanggal, jam, menit)
const openingDate = new Date(2025, 5, 1, 10, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = openingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = String(days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.countdown').innerHTML = '<h2>Cafe Sudah Dibuka!</h2>';
    }
}

const countdown = setInterval(updateCountdown, 1000);
updateCountdown(); 