    // Tangkap elemen tabs

    var tabsContainer = document.querySelector('.tabs tbody');

    // Array yang berisi link untuk setiap episode

    var episodeLinks = [

        
        

        ' https://playerprem.blogspot.com/2024/03/blog-post.html?m=1',

        'https://playerprem.blogspot.com/2024/03/blog-pos.html?m=1 ',

        ' https://playerprem.blogspot.com/2024/03/blog-po.html?m=1'
       
        

    ];

    // Mendapatkan URL halaman saat ini

    var currentPageUrl = window.location.href.toLowerCase(); // Ubah ke huruf kecil

    // Indeks episode terbaru

    var latestEpisodeIndex = 23; // Misalnya episode terbaru adalah index 23 dalam array

    // Buat tab-episode secara dinamis

    var row = document.createElement('tr');

    var counter = 0;

    episodeLinks.forEach(function(episodeUrl, index) {

        var tab = document.createElement('a');

        tab.setAttribute('href', episodeUrl);

        // Jika URL halaman saat ini terkandung dalam URL tab, atur tab sebagai aktif

        if (currentPageUrl.includes(episodeUrl.toLowerCase())) {

            tab.classList.add('active');

        }

        // Tambahkan teks nomor episode

        var episodeNumber = document.createElement('span');

        episodeNumber.textContent = (index + 1);

        tab.appendChild(episodeNumber);

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
