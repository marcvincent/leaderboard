



if (Meteor.isClient) {
  Meteor.startup(function () {
     $( "#mapCanvas" ).width('100%').height(350).gmap3();


     $( '#mapCanvas' ).show().gmap3().css('border-color', 'grey');

     function calcMapWidth() {
	     var width = $(window).width()-$( '#leftBar' ).width();
          if (width > 500)
               width = 500;

	     return width;
     }
  });
}
