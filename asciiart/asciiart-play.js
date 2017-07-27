var Width = 300;
var Height = 300;
var picSource;

$(document).ready(function() {
    console.log('ASCII ART');
    var pic = new Image();
    pic.src = 'randomimage.png';
    picSource = pic.src;
    make_canvas(pic.src);

    $('#img1').click(function(e){
        var pic = new Image();
        pic.src = 'randomimage.png';
        picSource = pic.src;
        make_canvas(pic.src);
    });

    $('#img2').click(function(e){
        var pic = new Image();
        pic.src = 'starrynight.jpg';
        picSource = pic.src;
        make_canvas(pic.src);
    }); 

    $('#img3').click(function(e){
        var pic = new Image();
        pic.src = 'monalisa.jpg';
        picSource = pic.src;
        make_canvas(pic.src);
    }); 

    $("input[name='min-height']").change(function(e){
        console.log("hiii");
        Height = parseInt($("input[name='min-height']").val());
        make_canvas(picSource);
    });

    $("input[name='min-width']").change(function(e){
        Width = parseInt($("input[name='min-width']").val());
        make_canvas(picSource);
    });   

$('#submit').click(function(e){
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var rw = c.width;
    var rh = c.height;

    var s4 = $("select[name=dark]").val();
    var s3 = $("select[name=medium]").val();
    var s2 = $("select[name=light]").val();
    var s1 = $("select[name=lightest]").val();
    
    var hcount =  parseInt($("input[name=height]").val());
    var wcount = parseInt($("input[name=width]").val());
    console.log(hcount);
    console.log('w',wcount);
    console.log('rw',rw,'rh',rh);
    var imgData = ctx.getImageData(0,0,rw,rh);
    //console.log(imgData);
    var count = 0;
    var imgArray = '';

    var row = rw/wcount;

    for (var i=0;i<imgData.data.length;i+=(4*wcount)){
        count += wcount;
        var sum = 0;
        //console.log('count: ',count);
        //console.log('i: ',i);
        for (var j = 0; j < hcount; j++) {
            for (var k = 0; k < wcount; k++) {
                var avg1 = (imgData.data[i+(j*rw*4)+(k*4)]+imgData.data[i+1+(j*rw*4)+(k*4)]+imgData.data[i+2+(j*rw*4)+(k*4)])/3;
                //console.log('index: ',i+(j*rw*4)+(k*4));
                sum += avg1;
            }
            
            
        }
        // var avg1 = (imgData.data[i]+imgData.data[i+1]+imgData.data[i+2])/3;
        // var avg2 = (imgData.data[i+(rw*4)]+imgData.data[i+1+(rw*4)]+imgData.data[i+2+(rw*4)])/3;
        var avg = sum / (hcount+wcount);
        if((hcount == 1) || (wcount == 1)){
            avg = sum / (hcount+wcount-1);
        }
        
        if (avg < 63.75){
            imgArray += s1;
        } else if (avg < 63.75*2) {
            imgArray += s2
        } else if (avg < 63.75*3) {
            imgArray += s3;
        } else {
            imgArray += s4;
        }
        //console.log(num);
        //console.log(imgArray);
        if (count >= rw){
            //console.log('count: ',count);
            count = 0;
            imgArray += '\n';
            i += ((hcount-1)*rw*4);
            //console.log('i: ',i);
        } 

        
        //imgData.data[i + 3] = 255;   
    }
    
    //console.log(imgArray);
    var wnd = window.open("about:blank", "", "_blank");

    wnd.document.write("<span id='hi'>"+imgArray+'</span>');
    var y = 2850.0 / row;
    console.log(y);
    wnd.document.getElementById("hi").style.fontSize = y;


    

});

});


function make_canvas(newImageSource){

    var img = new Image();
    img.onload = function() {
        var w = parseInt(img.width || img.naturalWidth);
        var h = parseInt(img.height || img.naturalHeight);

        var ratio = 1;
        console.log('w=',Width,'h=',Height);
        if (Width < Height){
            console.log('width=',Width,'h=',Height);
            ratio = Width / img.width;
        } else {
            console.log('w=',Width,'height=',Height);
            ratio = Height / img.height;
        }
            

        var canvas = document.createElement('canvas');
        canvas.id = "myCanvas";
        canvas.width = w * ratio;
        canvas.height = h * ratio;

        // $('#img-width').empty();
        // $('#img-width').empty();
        $('#img-width').html("Width = "+canvas.width);
        $('#img-height').html("Height = "+canvas.height);

        $("#images").empty();
        $("#images").append('<br>');
        $("#images").append(canvas);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        
    };
    img.src = newImageSource;

    
    //var img = document.getElementById("source");
    
}



function previewFile() {
    var file = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader = new FileReader();

    reader.onloadend = function() {
        console.log(reader.result);
        picSource = reader.result;
        make_canvas(reader.result);
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        alert("Error reading file :(");
    }
}
