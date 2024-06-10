document.addEventListener("DOMContentLoaded", function () {
    var videoLinks = document.querySelectorAll('.video-link');

    videoLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var videoURL = this.getAttribute('href');
            var iframe = document.createElement('iframe');
            iframe.setAttribute('width', '599');
            iframe.setAttribute('height', '315');
            iframe.setAttribute('src', videoURL + '?autoplay=1');
            iframe.setAttribute('title', 'YouTube video player');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

            // Замінюємо посилання на відео власноруч створеним iframe
            this.parentNode.replaceChild(iframe, this);
        });
    });
});
