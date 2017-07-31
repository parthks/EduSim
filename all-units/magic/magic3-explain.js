var magic_num = 50;
var size = 5
var nums = [1, 2, 3, 4, 5, 6];
var key_row = [];
var key_col = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function make_keys() {
    key_col = [];
    key_row = [];
    var num1 = 0;
    var num2 = 0;
    var sum = 0;
    num1 = nums[getRandomInt(0, nums.length)];
    num2 = nums[getRandomInt(0, nums.length)];
    key_row.push(num1);
    sum += num1;
    key_col.push(num2);
    sum += num2;
    for (var i = 0; i < size - 1; i++) {
        num1 = nums[getRandomInt(0, nums.length)];
        num2 = nums[getRandomInt(0, nums.length)];
        if (key_row.indexOf(num1) != -1 || key_col.indexOf(num2) != -1) {
            i -= 1;
            continue;
        }
        key_row.push(num1);
        sum += num1;
        key_col.push(num2);
        sum += num2;
    }
    magic_num = sum;
    console.log(key_row);
    console.log(key_col);
}

function make_magic_table() {
    make_keys();
    var num = 0;
    var html = '';
    html += '<tr>';
    html += '<td></td>';
    html += '<td></td>';
    for (var i = 0; i < size; i++) {
        html += '<th>' + key_col[i] + '</th>';
    }
    html += '</tr>';
    html += '<td></td>';
    html += '<td></td>';
    for (var i = 0; i < size; i++) {
        html += '<td><button class="r' + i + '">remove col</button></td>';
    }
    html += '</tr>';
    for (var r = 0; r < size; r++) {
        html += '<tr>';
        for (var c = 0; c < size; c++) {
            if (c == 0) {
                html += '<th>' + key_row[r] + '</th>';
            }
            if (c == 0) {
                html += '<td><button class="c' + r + '">remove row</button></td>';
            }
            num = key_row[r] + key_col[c];
            html += '<td class="row' + r + ' col' + c + '"> ' + num + '</td>';

            //num += 1;

        }
        html += '</tr>'
    }
    $("#magic-table-key").append(html);
    console.log("made table");

    for (var k = 0; k < size; k++) {
        event(k);

    }
    //console.log(count);
}
//console.log(html);

function event(num) {
    $('.r' + num).click(function(e) {
        console.log("hi");
        console.log($('.col' + num));
        $('.col' + num).empty();
    });
    $('.c' + num).click(function(e) {
        console.log("hii");
        console.log($('.row' + num));
        $('.row' + num).empty();
    });
}


function guess_click() {
    $('#guess').click(function(e) {
        $('#ans').empty();
        var html = '';
        html += key_col[0];
        for (var i = 1; i < size; i++) {
            html += ' + ' + key_col[i];
        }
        html += ' + ' + key_row[0];
        for (var i = 1; i < size; i++) {
            html += ' + ' + key_row[i];
        }
        html += ' = ' + magic_num;
        $('#ans').append(html);
    });
}

$(document).ready(function() {
    console.log("ready!");
    make_magic_table()

    $('#go-again').click(function(e) {
        $('#ans').empty();
        $('#ans').append('<button id="guess">Guess my final sum</button>');
        guess_click();
        $("#magic-table-key").empty();
        make_magic_table();
    });

    guess_click();

});
