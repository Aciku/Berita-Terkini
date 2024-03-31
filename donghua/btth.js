// Tangkap elemen tabs
var tabsContainer = document.querySelector('.tabs tbody');

// Array yang berisi link untuk setiap episode
var episodeLinks = [
    'https://playerprem.blogspot.com/2024/03/btth-s-5-episode-85-sub-indonesia.html?m=1',
    'https://playerprem.blogspot.com/2024/03/btth-s5-episode-86-sub-indonesia.html?m=1',
    'https://playerprem.blogspot.com/2024/03/blog-po.html?m=1'
    // Tambahkan link episode berikutnya di sini
];

// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href.toLowerCase(); // Ubah ke huruf kecil

// Indeks episode terbaru
var latestEpisodeIndex = 84; // Episode terbaru dimulai dari nomor 85

// Buat tab-episode secara dinamis
var row = document.createElement('tr');
var counter = 0;
var episodeNumber = 85; // Nomor episode dimulai dari 85

episodeLinks.forEach(function(episodeUrl, index) {
    var tab = document.createElement('a');
    tab.setAttribute('href', episodeUrl);

    // Jika URL halaman saat ini terkandung dalam URL tab, atur tab sebagai aktif
    if (currentPageUrl.includes(episodeUrl.toLowerCase())) {
        tab.classList.add('active');
    }

    // Tambahkan teks nomor episode
    var episodeNumberSpan = document.createElement('span');
    episodeNumberSpan.textContent = episodeNumber++;
    tab.appendChild(episodeNumberSpan);

    // Jika ini adalah episode terbaru, tambahkan label "New" dengan gaya yang ditentukan
    if (index === latestEpisodeIndex) {
        var newLabel = document.createElement('span');
        newLabel.textContent = 'baru';
        newLabel.classList.add('new-label');
        tab.appendChild(newLabel);
    }

    var cell = document.createElement('td');
    cell.appendChild(tab);
    row.appendChild(cell);
    counter++;

    // Setelah setiap 7 tab, buat baris baru
    if (counter % 5 === 0 || index === episodeLinks.length - 1) {
        tabsContainer.appendChild(row);
        row = document.createElement('tr');
    }
});
