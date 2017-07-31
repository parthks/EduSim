var magic_sym = '*';
var all_syms = ['*', '%', '^', '&', '!', '@', '#', '$', '$'];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function make_magic_table() {
    var row = 8;
    var col = 11;
    var count = 4;
    var html = '';
    for (var j = 0; j < row; j++) {
        html += '<tr>'
        for (var i = 0; i < col; i++) {
            if (count < 81 && count % 9 == 0) {
                html += '<th>' + count + "|" + magic_sym + '</th>';
            } else {
                html += '<th>' + count + "|" + all_syms[getRandomInt(0, all_syms.length)] + '</th>';
            }
            count += 1;
        }
        html += '</tr>'
            //console.log(count);
    }
    //console.log(html);
    $("#magic-table").append(html);
    console.log("made table");
}

function guess_click() {
    $('#guess').click(function(e) {
        $('#ans').empty();
        $('#ans').append('<p>Well ' + magic_sym + ' of course!</p>');
    });
}

$(document).ready(function() {
    console.log("ready!");
    magic_sym = all_syms[getRandomInt(0, all_syms.length)];
    make_magic_table()

    $('#go-again').click(function(e) {
        magic_sym = all_syms[getRandomInt(0, all_syms.length)];
        $('#ans').empty();
        $('#ans').append('<button id="guess">Guess my symbol</button>');
        guess_click();
        $("#magic-table").empty();
        make_magic_table();
    });

    guess_click();

});
