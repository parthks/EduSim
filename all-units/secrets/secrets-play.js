// jQuery(document).on('keydown', 'input.form-control', function(ev) {
//     if(ev.which === 13) {
//         // Will change backgroundColor to blue as example
//         this.style.backgroundColor = '#EFF';

//         // Avoid form submit
//         return false;
//     }
// });​


$(".enterMat").change(function() {
    //console.log("GOT!! CHANGE!");
    var row = $("#inRow").val();
    var col = $("#inCol").val();
    //console.log(row +" " +col);
    $("#matrix").empty();
    
    drawTable(row, col);
    
});

function drawTable(row, col) {
    for(var r=0; r < row; r++) {
        $("#matrix").append("<tr id='"+r+"Row''></tr>")
        for(var c=0; c < col; c++){
            $("#"+r+"Row").append("<td><input type='number'></td>");
        }
    }
    
    //$("#2Row").append("<td><input type='number'></td>");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var count = 0
function addRandomMatrix(){
    while(true) {
        var inputs = $("input").toArray();
        inputs.shift(); //remove the message input!
        inputs.shift();
        inputs.shift();
        //console.log(inputs);
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = getRandomInt(-5,6);
        }

        if (!(math.det(getMatrix()) == 1 || math.det(getMatrix()) == -1)) {
            count += 1;
        } else {
            console.log("tried: "+count);
            count = 0
            break;
        }
    }
    
    
}

function inverse(){
    checkMatrix();
    var mat = getMatrix();
    console.log(mat);
    var inverse = math.inv(mat);

    var inputs = $("input").toArray();
    inputs.shift(); //remove the message input!
    inputs.shift();
    inputs.shift();
    // console.log(math.inv([[-3,-3,4],[],[]]))
    // console.log(inverse);
    inverse = convertDimVectorsToVec(inverse);
    //console.log(inverse);
    for (var i = 0; i < inverse.length; i++) {
        inputs[i].value = parseInt(inverse[i]);
    }

}

function checkMatrix(){
    var row = $("#inRow").val();
    var col = $("#inCol").val();
    if (row != col) {alert('Only square (the matrix rows == columns) matrices can have an inverse!'); return false}

    if (math.det(getMatrix()) == 0) {alert('Please enter a different matrix! This one does not have an inverse'); return false;}
    
    return true;
}



function getMatrix(){
    var inputs = $("input").toArray();
    inputs.shift(); //remove the message input!
    //console.log(inputs);
    var results = [];
    var rows = parseInt(inputs[0].value);
    var cols = parseInt(inputs[1].value);
    inputs.shift();
    inputs.shift();
    var index = 0;
    for(var row=0; row < rows; row++){
        var temp = [];
        for(var col=0; col < cols; col++){
            temp.push(+(inputs[index].value))
            if(temp[col] == "") {
                temp[col] = 0;
            }
            index++;
        }
        results.push(temp);
    }

    //console.log(results);
    return results;
}







function asciiToNums(word){
    var result = [];
    for (var i = 0; i < word.length; i++) {
        result.push(word.charCodeAt(i) - 32);
    }

    return result;
}

function numsToAscii(vector){
    var ans = '';
    var spaceIndexes = [];
    //console.log('here here');
    for (var i = 0; i < vector.length; i++) {
        var num = vector[i];
       
        num = ((num % 94) +94 ) % 94;
        num += 32;
        //console.log(num);
        
        ans += String.fromCharCode(num);
    }

    return ans;
}

function convertVecToDimVectors(vector, dim){
    var ans = [];
    var count = 0
    var tempArr = []

    for (var i = 0; i < vector.length; i++) {
        tempArr.push(vector[i]);
        count += 1;

        if (count % dim == 0) {
            ans.push(tempArr);
            tempArr = []
            count = 0;
        }
        
    }

    if (tempArr.length != 0) {
        while(tempArr.length < dim){
            tempArr.push(0);
        }
        ans.push(tempArr);
    }


    return ans;
}


function convertDimVectorsToVec(vector){
    var res = [];
    for (var i = 0; i < vector.length; i++) {
        var temp = vector[i]
        for (var j = 0; j < temp.length; j++) {
           res.push(temp[j])
        }
    }
    return res;
}


function goForCrypto(){

    if ($('#message').val() == undefined) {alert('Please enter a message or encrypted text'); return}

    if (checkMatrix()) {
        console.log('GO');
        var mat = getMatrix();
        var dim = $("#inRow").val();
        var mess = $('#message').val();
        var vec = asciiToNums(mess);
        console.log(vec);
        var threes = convertVecToDimVectors(vec, dim);
        console.log(threes);
        var res = [];
        for (var i = 0; i < threes.length; i++) {
            res.push(math.multiply(mat, threes[i]));
        }
        console.log(res);
        var ansVec = convertDimVectorsToVec(res);
        console.log(ansVec);
        var cip = numsToAscii(ansVec);
        $('#result').html('<p>Your result: '+cip+'</p>');
    }
}








