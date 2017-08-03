noteFireTitle = "magic";

summaryText = function () {
    var html = '<p>Linear Algebra is simply algebra with "linear" terms! It is that simple :P</p>';
    html += '<p>When thinking of linear terms, think line. Constant terms and single variables to the first power</p>';
    html += '<p>Bascially, no funny business! Just simple terms and with simple operations!</p>'
    return html;
}

reviewText = function () {
    var html = '<p> Nothing to review for now! </p>';
    html += '<p>Congratulations on starting your Linear Algebra Journey!!';
    return html;
}

addVideoDetails = function(){
  var html = "<p>No Video for this section. ¯\\_(ツ)_/¯</p>";
  return html;
}

extraInfo = function() {
    var html = '<p>In linear algebra, the variables in the linear equations are often matrices and other powerful structures!</p>';
    html += '<br><p>Try to make your own linear equation and convert it to magic!</p>'

    return html;
}

connections = function() {
    var html = '<p>Linear equations is the start to linear systems!</p>'
    html += '<p>The process of solving mutiple linear equations is what linear algebra is all about!</p>'
    html += '<p>We use Matrices to solve these linear equations and that is why they are so important and are used everywhere!</p>'

    return html;
}

addAppDetails = function(){
    var html = '';
    if (localStorage.getItem("appName") == 'Matrix_Magic') {
        html += '<iframe width=100% height=100% src="/all-units/magic/magic3.html"></iframe>';
    } else if (localStorage.getItem("appName") == 'Digits_Magic') {
        html += '<iframe width=100% height=100% src="/all-units/magic/magic2.html"></iframe>';
    } else if (localStorage.getItem("appName") == 'Linear_Magic') {
        html += '<iframe width=100% height=100% src="/all-units/magic/magic1.html"></iframe>';
    } else {
        html += '<iframe width=100% height=100% src="/all-units/magic/magic.html"></iframe>';
    }
    localStorage.setItem("appName", '0');

    return html;
}

addCalculatorInApplication = true;

Hello_World_Details = function(){
  if (localStorage.getItem("appName") == 'Linear_Magic' ||
        localStorage.getItem("appName") == 'Digits_Magic' ||
        localStorage.getItem("appName") == 'Matrix_Magic') {
        $('#AppButton').click();
        return false;
    }

    return true;
}

