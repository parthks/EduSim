$(document).ready(function() {
    console.log('ASCII ART');
    

$('#asciify').click(function(e){
    var img = document.getElementById("source");
    var w = img.width || img.naturalWidth;
    var h = img.height || img.naturalHeight;

    var rw = w;
    var rh = h;

    var canvas = document.createElement('canvas');
    canvas.id = "myCanvas";
    canvas.width = rw;
    canvas.height = rh;
    $("#images").append(canvas);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    console.log(rw);
    ctx.drawImage(img,0,0,rw,rh);
    var imgData = ctx.getImageData(0,0,rw,rh);
    console.log(imgData);
    var count = 0
    var imgArray = '';
    for (var i=0;i<imgData.data.length;i+=4){
        count += 1
        var avg1 = (imgData.data[i]+imgData.data[i+1]+imgData.data[i+2])/3;
        var avg2 = (imgData.data[i+(rw*4)]+imgData.data[i+1+(rw*4)]+imgData.data[i+2+(rw*4)])/3;
        var avg = (avg1 + avg2) / 2
        if (avg < 63.75){
            imgArray += '1';
        } else if (avg < 63.75*2) {
            imgArray += '3';
        } else if (avg < 63.75*3) {
            imgArray += '5';
        } else {
            imgArray += '8';
        }
        if (count == rw){
            count = 0;
            imgArray += '\n';
            i += (rw*4);
        }   
        imgData.data[i + 3] = 255;   
    }
    //console.log(imgArray);
    $('#myCanvas').remove();
    //ctx.putImageData(imgData,0,0);
    var wnd = window.open("about:blank", "", "_blank");
    wnd.document.write(imgArray);
    wnd.parent.document.body.style.zoom = 0.1;

});



});