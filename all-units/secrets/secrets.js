
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


function encode(){
   var mess = $('#message').val();
   var vec = asciiToNums(mess);
   var mat = [[-3, -3, -4], [0, 1, 1], [4, 3, 4]];
   console.log(vec);
   var threes = convertVecToDimVectors(vec, 3);
   console.log(threes);
   var res = [];
   for (var i = 0; i < threes.length; i++) {
      res.push(math.multiply(mat, threes[i]));
   }
   console.log(res);
   var ansVec = convertDimVectorsToVec(res);
   console.log(ansVec);
   var cip = numsToAscii(ansVec);
   $('#result').html('<p>'+cip+'</p><p>Pretty Cryptic, huh?</p>');
   // var mat = [[1, 0, 1], [4, 4, 3], [-4, -3, -3]];
   // console.log(cip.length);
   // var vec = asciiToNums(cip);
   // console.log(vec);
   // var threes = convertVecToDimVectors(vec, 3);
   // console.log(threes);
   // var res = [];
   // for (var i = 0; i < threes.length; i++) {
   //    res.push(math.multiply(mat, threes[i]));
   // }
   // console.log(res);
   // var ansVec = convertDimVectorsToVec(res);
   // console.log(ansVec);
   // var cip = numsToAscii(ansVec);

   // console.log(cip);

}   


