document.addEventListener('DOMContentLoaded', function() {
    var latestPosts = [
        { title: "Kisah Kontroversi: Pejabat Binance Kabur dari Penahanan Nigeria", url: "6.html" }, 
        { title: "Cara Melihat dan Mengelola Aktivitas Google dengan Mudah", url: "5.html" }, 
        { title: "Waspadai Bahaya VPN Gratis di Google Play: Potensi Pembajakan Android", url: "4.html" }, 
        { title: "Apakah WiFi Bisa Melihat Riwayat Pencarian Anda?", url: "3.html" }, 
        { title: "Studi Temukan Penggunaan ChatGPT pada Pelajar Berkaitan dengan Meningkatnya Kesepian ", url: "2.html" },
        { title: "Robert F. Kennedy Jr. Mengumumkan Nicole Shanahan Sebagai Calon Wakil Presiden ", url: "1.html" }
    ];

    function generateLatestPostsHTML() {
        var postsHTML = "";
        latestPosts.forEach(function(post) {
            postsHTML += "<li style='color: red; cursor: pointer;'>" + post.title + "</li>";
        });
        return postsHTML;
    }

    document.getElementById("latest-posts-list").innerHTML = generateLatestPostsHTML();

    // Tentukan basePath berdasarkan lokasi
    var currentLocation = window.location.pathname;
    var basePath = currentLocation.startsWith("/p/") ? "../p" : " https://aciku.github.io/Berita-Terkini/p";

    // Tambahkan event listener untuk setiap elemen <li>
    var listItems = document.querySelectorAll("#latest-posts-list li");
    listItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            var url = basePath + "/" + latestPosts[index].url;
            window.location.href = url;
        });
    });
});
