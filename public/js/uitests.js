
$(document).ready(function (){
  var colors = ['#ff0000', '#00ff00', '#0000ff'];
  //var random_color = colors[Math.floor(Math.random() * colors.length)];
  $("#paragraphOne").text('This is a UI test page');
  var i = 1;
  $("#clickmebutton").on('click', function () {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $('.largefont').css('color', random_color);
    i += 1;
    $("#clickmebutton").text('clicked: ' + i);
  })
});

//Make a new Jquery page
//$("form input").each(function(){
//  console.log($(this).val());
//});
