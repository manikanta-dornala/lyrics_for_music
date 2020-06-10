AppendLyricsDiv();

_RETRY_COUNT = 0;
_IS_WAITING_ON_RESPONSE = false;
MAX_RETRY = 3;
FOUND = '';
LAST_SONG = '';

setTimeout(Run, 1000);

SetEventListeners();

setInterval(Run, 2000);
