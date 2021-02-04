

$(function () {
  $('[data-toggle="popover"]').popover()
})


$(document).ready(function(){

  $('#customRadio2').on('click', function(){
    var c = document.getElementById('customRadio2').checked;
    if (c) {

     $("#inputOcultos").hide();

    }

  });


  $('#customRadio1').on('click', function(){
    var c = document.getElementById('customRadio1').checked;
    if (c) {

     $("#inputOcultos").show();

    }

  

  });


  });


  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtnTop").style.display = "block";
  } else {
    document.getElementById("myBtnTop").style.display = "none";
  }
}

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


  