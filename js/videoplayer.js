$(() => {
    let modal_video = `<div class="modal-video">
                    <video id="vid_video" width="100%" height="100%" controls preload="metadata" controlslist="nodownload"  webkit-playsinline playsinline x5-video-player-type="h5" x5-video-player-fullscreen="true" oncontextmenu="return false;" style="object-fit:fill">
                        <source type="video/mp4" src="">
                        Your browser doesn\'t support HTML5 video tag.
                    </video>
                    <button type="button" class="closeit"></button>
                    </div>`;
    const the_body = document.querySelector('body');
    the_body.innerHTML += modal_video;

    document.getElementsByTagName("head")[0].innerHTML += ``;

    const $modal_video = $('.modal-video'),
        $video = $modal_video.find('video'),
        $closeit = $('.closeit');

    $(document).on('click', '.vid_play', function () {
        let video_url = $(this).attr('data-url'),
            img_src = $(this).attr('data-src');
        $video.attr('src', video_url);
        $video.attr('poster', img_src);
        $modal_video.fadeIn().find('video').trigger('play');
        return false;
    });

    $closeit.on('click', function () {
        $(this).closest($modal_video).fadeOut().find('video').attr('src', '').trigger('pause');
        return false;
    });
    $video.on('ended', function () {
        $(this).closest($modal_video).fadeOut();
    });

});
