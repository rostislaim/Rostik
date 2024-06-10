document.addEventListener('DOMContentLoaded', function() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoSrc = thumbnail.dataset.videoSrc;
            thumbnail.innerHTML = `<iframe width="599" height="315" src="${videoSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>`;
        });
    });
});