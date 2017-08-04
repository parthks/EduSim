noteFireTitle = "tutorial";
prevUnit = "tutorial";
nextUnit = "tutorial";
unitTitle = "Getting Started";


summaryText = function () {
    var html = '<p>These boxes will contain a brief summary of the unit</p>'
    
    return html;
}

reviewText = function () {
    var html = '<p>These boxes will contain a brief review of all the units till now</p>';
    return html;
}

addVideoDetails = function(){
  var html = "<p>These boxes will contain a short animated video of the unit</p>";

  return html;
}

extraInfo = function() {
    var html = '<p>These boxes will provide some extra information about the unit</p>';
    
    return html;
}

connections = function() {
    var html = '<p>These boxes will provide some information on how this unit connects to other units</p>';
    
    return html;
}

addAppDetails = function(){
  var html = '<p>These boxes will contain a Real World scenario where this unit is used.</p>';
  html += '<p>It will explain how the material in the unit is used in the scenario.</p>';
  html += '<p>You will also get a chance to play around and experiment with different variables affecting that scenario!</p>';

  return html;
}

addCalculatorInApplication = false;

Hello_World_Details = function(){return true}

