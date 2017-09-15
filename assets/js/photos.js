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

//Instagram

// Init
$(document).ready(function() {
var feed = new Instafeed({
	target: 'instafeed',
    get: 'user',
    userId: 476346188,
    accessToken: '476346188.1677ed0.5e02bdd9f46647938e909282cd4c7ddd',
    template: '<div class="small-6 medium-4 large-3 columns"><a href="{{image}}" data-lity><img src="{{image}}" /><div class="insta_caption">{{caption}}</div></a></div>',
    limit: 24,
    resolution: 'standard_resolution'
});
feed.run();
});