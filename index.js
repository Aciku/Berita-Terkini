document.addEventListener('DOMContentLoaded', function() {
    var latestPosts = [
     // Tambahkan postingan lebih lanjut jika diperlukan ke atas 

        { title: "Kisah Kontroversi: Pejabat Binance Kabur dari Penahanan Nigeria", url: "p/6.html" }, 
        { title: "Cara Melihat dan Mengelola Aktivitas Google dengan Mudah", url: "p/5.html" }, 
        { title: "Waspadai Bahaya VPN Gratis di Google Play: Potensi Pembajakan Android", url: "p/4.html" }, 
        { title: "Apakah WiFi Bisa Melihat Riwayat Pencarian Anda?", url: "p/3.html" }, 
        { title: "Studi Temukan Penggunaan ChatGPT pada Pelajar Berkaitan dengan Meningkatnya Kesepian ", url: "p/2.html" },
        { title: "Robert F. Kennedy Jr. Mengumumkan Nicole Shanahan Sebagai Calon Wakil Presiden ", url: "p/1.html" }
        
        
         
    ];

    function generateLatestPostsHTML() {
        var postsHTML = "";
        latestPosts.forEach(function(post) {
            postsHTML += "<li style='color: red; cursor: pointer;'>" + post.title + "</li>";
        });
        return postsHTML;
    }

    document.getElementById("latest-posts-list").innerHTML = generateLatestPostsHTML();

    // Tambahkan event listener untuk setiap elemen <li>
    var listItems = document.querySelectorAll("#latest-posts-list li");
    listItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            window.location.href = latestPosts[index].url;
        });
    });
});

