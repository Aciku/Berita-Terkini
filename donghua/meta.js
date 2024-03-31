// Tangkap elemen tabs
var tabsContainer = document.querySelector('.tabs tbody');

// Array yang berisi link untuk setiap episode
var episodeLinks = [
    'https://playerprem.blogspot.com/2024/03/the-metaverse-episode-01-subtitle.html', 
    'https://playerprem.blogspot.com/2024/03/the-metaverse-episode-02-subtitle.html', 
    'https://playerprem.blogspot.com/2024/03/the-metaverse-episode-03-subtitle.html', 
    'https://playerprem.blogspot.com/2024/03/the-metaverse-episode-04-subtitle.html', 
    'https://playerprem.blogspot.com/2024/03/the-metaverse-episode-05-subtitle.html', 
    'https://playerprem.blogspot.com/2024/03/the-metaverse-episode-06-subtitle.html', 
    'https://playerprem.blogspot.com/2024/03/the-metaverse-episode-07-subtitle.html'
    
// Tambahkan link episode berikutnya di sini
];

// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href.toLowerCase(); // Ubah ke huruf kecil

// Indeks episode terbaru
var latestEpisodeIndex = 0; // Episode terbaru dimulai dari nomor 85

// Buat tab-episode secara dinamis
var row = document.createElement('tr');
var counter = 0;
var episodeNumber = 1; // Nomor episode dimulai dari 85

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
        newLabel.textContent = '';
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

// Function untuk mengubah sumber video
function changeVideoSource() {
    // Get the selected value from the dropdown
    var selectedSource = document.getElementById("serverDropdown").value;

    // Change the iframe source
    document.getElementById("videoPlayer").src = selectedSource;
  } 
