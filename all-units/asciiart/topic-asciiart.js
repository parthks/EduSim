noteFireTitle = "asciiart";
prevUnit = "secrets";
nextUnit = false;
unitTitle = "ASCII Art";


summaryText = function () {
    var html = '<p>Using the power of submatrices, we can swap manipulate parts of a large Matrix to form a new Matrix!</p>';
    html += '<p>Since images are simply Matrices, we can convert the image pixel data into ASCII values - text, numbers, symbols etc</p>';
    html += '<p>The conversion happens by swapping out various submatrices to form new values.</p>'
    
    return html;
}

reviewText = function () {
    var html = '<p>Images are nothing but Matrices! </p>';
    html += '<p>The pixels are stored as red, green, blue and alpha numeric values that can easily be manipulated.';
    return html;
}

addVideoDetails = function(){
  var html = "<p>No Video for this section. ¯\\_(ツ)_/¯</p>";

  return html;
}

extraInfo = function() {
    var html = '<p>While making ASCII Art, some images can be represented beautifully, while others not so much!</p>';
    html += '<p>Why is this? Can you figure out a way around that?</p>';
    html += '<br><p>Some images require a bit of "tweaking" to get them to look right! Try experimenting and see the difference it makes!</p>';
    html += "Don't give up! Enthusiasts have recreated the entire 'Star Wars: A New Hope' movie using ascii values! LOOK IT UP!";
    
    return html;
}

connections = function() {
    var html = '<p>ASCII Art relies on the fundamental concept of Linear Algebra, that is, Matrices!</p>'
    html += '<p>Images are only one form of data that are represented using Matrices</p>'
    html += '<p>As you will soon discover, the power of Matrices lies its ability to manipulate vast amounts of data quickly and *cough* easily</p>'

    return html;
}

addAppDetails = function(){
  var html = '<iframe width=100% height=100% src="/all-units/asciiart/asciiart.html"></iframe>';

  return html;
}

addCalculatorInApplication = false;

Hello_World_Details = function(){return true}

