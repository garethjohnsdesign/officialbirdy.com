$(document).foundation();

// Menu

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});


$(document).ready(function () {
 wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       200,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    );
    wow.init();
});