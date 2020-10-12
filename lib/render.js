function AppendLyricsDiv() {
    var lyrics_div = document.createElement('div');
    lyrics_div.id = 'lyrics_div';
    lyrics_div.className = 'lyrika_div';
    lyrics_div.innerHTML =
        '<div id="lyrics_open" class="lyrics_open lyrics_div">' +
        '<p id="close_lyrics" class="lyrics-header">Hide Lyrics - </p>' +
        '<div class="lyrics_content">' +
        '<h2 id="lyrics_ext_title" style="text-transform: capitalize;"></h2>' +
        '<h3 id="lyrics_ext_artist" style="text-transform: capitalize;"></h3><br>' +
        '<div id="lyrics_ext_lyrics"></div>' +
        '<hr style="color:gray;background-color:gray;height:1px;margin-top:16px;margin-bottom:8px;">' +
        '<p style="padding:8px; text-align:center;widht:100%;"><i style="font-size: 12px;">All lyrics from  <a style="text-decoration:underline; color: white !important;" href="https://www.musixmatch.com/" target="_blank">Musixmatch</a></i></p>' +
        '</div>' +
        '</div>' +
        '<div id="lyrics_closed" class="lyrics_closed lyrics_div">' +
        '<p id="show_lyrics" class="lyrics-header">Show Lyrics +</p>' +
        '</div>';
    document.body.appendChild(lyrics_div);
}

function HideLyricsBlock() {
    document.getElementById('lyrics_open').style.display = 'none';
    document.getElementById('lyrics_closed').style.display = 'none';
}

function SetLyricsBlock(song, lyrics) {
    document.getElementById('lyrics_ext_lyrics').innerText = lyrics;
    document.getElementById('lyrics_ext_title').innerText = song.title;
    document.getElementById('lyrics_ext_artist').innerText = song.artist;
    document.getElementById('lyrics_open').style.display = 'block';
    document.getElementById('lyrics_closed').style.display = 'none';
}

function SetEventListeners() {
    document
        .getElementById('close_lyrics')
        .addEventListener('click', function () {
            document.getElementById('lyrics_open').style.display = 'none';
            document.getElementById('lyrics_closed').style.display = 'block';
        });
    document
        .getElementById('show_lyrics')
        .addEventListener('click', function () {
            document.getElementById('lyrics_open').style.display = 'block';
            document.getElementById('lyrics_closed').style.display = 'none';
        });
}
