PREV_YOUTUBE_LINK = '';
PREV_YOUTUBE_SONG = {};

function GetYoutube() {
    const show_more_selector = 'ytd-video-secondary-info-renderer #more';
    const show_more_el = document.querySelector(show_more_selector);

    if (!show_more_el) {
        return -1;
    }

    if (window.location.href != PREV_YOUTUBE_LINK) {
        show_more_el.click();
    } else {
        return PREV_YOUTUBE_SONG;
    }

    const info = {};
    const song_info_selector = 'ytd-video-secondary-info-renderer #collapsible';
    const els = document.querySelector(song_info_selector).children;
    for (var i = 0; i < els.length; i++) {
        if (els[i].children[0].innerText === 'Song') {
            info['title'] = CleanupNames(els[i].children[1].innerText);
        }
        if (els[i].children[0].innerText === 'Artist') {
            info['artist'] = CleanupNames(els[i].children[1].innerText);
        }
    }

    if (!info['artist'] || !info['title']) {
        document.getElementById('lyrics_open').style.display = 'none';
        return -1;
    }

    PREV_YOUTUBE_LINK = window.location.href;
    PREV_YOUTUBE_SONG = info;

    const show_less_selector = 'ytd-video-secondary-info-renderer #less';
    const show_less_el = document.querySelector(show_less_selector);
    show_less_el.click();

    return info;
}
