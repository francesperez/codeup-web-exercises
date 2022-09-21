$(function(){
      $("#clickMe").on('click', function (){
         alert('yo!')
      });

      $('#create-an-element').on('click', function(){
//.after is going to insert content after that element in the html
         $(this).after("<button class ='will-this-work'>I'm after the last button</button>")
      });

//This won't work
//The reason this won't work is because it is loading with the page. Once the page is done loading, it still hasn't existed yet until the button is clicked.
      $(".will-this-work").on('click', function (){
         alert(":( This won't work!")
      });

//This will work
//It is called a delegated event
      $("#dynamic-content").on('click', '.will-this-work', function (){
         alert('ooooo yeeeeeeeeah');
      });

//We can add a class made in the css file to the document
//       $('.box').hover(function(){
//          $(this).addClass("pink");
//       },
//           function(){
//             $(this).removeClass('pink');
//       });

//OLD CODE
// $('.box').hover(function(){
//         $(this).css('background-color', 'pink');
//     },
//     function(){
//         $(this).css('background-color', 'unset')
//     });

    $(document).keydown(function(e){
      alert('you just pressed a keydown!');
        console.log(e.originalEvent.key);
    });


//We can add a toggle class instead of writing an add and remove class!
    $('.box').hover(function(){
            $(this).toggleClass("pink");
        });

    console.log($('div').text());
    console.log($('div').html());
    $('div p').text("I can set it to say this!");
    $('p').after("<ul><li>haha</li><li>lmao</li></ul><br>")




});


