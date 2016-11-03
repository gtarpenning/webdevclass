$(document).ready(function (){
  var colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green',
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red'];
  $("#clickmebutton3").on('click', function () {
    $ ('.blogtext').each(function(index) {
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      $(this).css('color', random_color);
    });
  });
  $ ('td[perch="button"]').each(function(i) {
    $ ('#'+i).on('click', function () {
      var wow = parseInt($("#views"+i).text());
      var request = $.ajax({
        method: 'POST',
        url: '/like',
        data: {
          name: $('#name'+i).text(),
          views: wow+=1,
        },
        dataType: 'JSON',
      });
      request.done(function(response) {
        console.log(response);
        $('[data-id='+(response.name)+']').text(response.views);
      });
    });
  });
  //$ ('td[perch="button"]').each(function(i) {
   // $ ('#'+i).on('click', function () {
   //   $('td[data-id=' + this.author.name + ']').text('');

   // });
  //});
});
