
$(document).ready(function (){
  //var random_color = colors[Math.floor(Math.random() * colors.length)];
  $("#clickmebutton2").on('click', function () {
    var request = $.ajax({
			method: 'POST',
			url: '/adduser',
			data: {
				name: $("#name").val(),
        city: $("#city").val(),
        blogpost: $("#blogpost").val(),
        //views: parseInt(0),
			},
			dataType: 'html', // this is the type of the response we'll return from the /adduser route
		});
    var useradded = [];
    $("form input").each(function(){
      useradded.push($(this).val())
      $("#center3").text('Added User: ' + useradded);
      //use join for adding things in the array
    });
  });
});
