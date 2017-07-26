$(document).ready(function() {
    console.log('ASCII ART');
    var img = document.getElementById("source");
    var w = img.width || image.naturalWidth;
    var h = img.height || image.naturalHeight;

    var canvas = document.createElement('canvas');
    canvas.id = "myCanvas";
    canvas.width = w;
    canvas.height = h;
    $("#images").append(canvas);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    ctx.drawImage(img,0,0);
    var imgData = ctx.getImageData(0,0,w,h);
    console.log(imgData);
    var count = 0
    var imgArray = '';
    for (var i=0;i<imgData.data.length;i+=4){
        count += 1
        var avg1 = (imgData.data[i]+imgData.data[i+1]+imgData.data[i+2])/3;
        var avg2 = (imgData.data[i+(362*4)]+imgData.data[i+1+(362*4)]+imgData.data[i+2+(362*4)])/3;
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
        if (count == 362){
            count = 0;
            imgArray += '\n';
            i += (362*4);
        }   
        imgData.data[i + 3] = 255;   
    }
//console.log(imgArray);
$('#myCanvas').remove();
//ctx.putImageData(imgData,0,0);

$('#asciify').click(function(e){
    var wnd = window.open("about:blank", "", "_blank");
    wnd.document.write(imgArray);
    wnd.parent.document.body.style.zoom = 0.1;

});



});