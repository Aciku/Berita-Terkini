document.addEventListener('DOMContentLoaded', function() {
    var latestPosts = [
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" },
        { title: "gambar btth", url: "p/1.html" },
        { title: "Post Title 2", url: "p/post-title-2.html" },
        { title: "Post Title 3", url: "p/post-title-3.html" }
        // Tambahkan postingan lebih lanjut jika diperlukan
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

