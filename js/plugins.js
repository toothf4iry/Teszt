// ez a kod megviccelt :)
// ilyet meg nem lattam, es nem is igazan ertem a celjat
// egyebkent eletveszelyes kod:
// - felulir bongeszo funkciot
// - nehezen kibogozhato tipus konverzio


// miert is kell? (nekunk meg sosem kellett hasonlo szerencsere, mert nem hanyjuk az exception-okat. persze extrem esetben el tudom kepzelni a szuksegesseget)
// en kihagynam ezt a fajlt

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exceptione', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;

    // ez viszont szep es gyakori megoldas "talan" mar letezo ojjektum letrehozasra
    var console = (window.console = window.console || {});

    // ez uj, beletelt kis idobe megfejteni. kerulendo
    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
// azaz felulirjuk a window/ban levo konzol objektum megfelelo metodusait
        if (!console[method]) {
            console[method] = noop;
        }
    }

}());

// Place any jQuery/helper plugins in here.
