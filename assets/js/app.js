$(document).foundation();

$('.music-carousel').owlCarousel({
loop:false,
margin:10,
dots: true,
nav:true,
navText: ['<i class="animated material-icons md-16">arrow_back</i>','<i class="animated material-icons md-16">arrow_forward</i>'],
responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:4
    }
}
});

$('.videos-carousel').owlCarousel({
loop:false,
margin:50,
dots: true,
nav:true,
navText: ['<i class="animated material-icons md-16">arrow_back</i>','<i class="animated material-icons md-16">arrow_forward</i>'],
responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:2
    }
}
});

// initialize the country drop-down
$('#country').countrySelect();

//Instagram

// Init

var feed = new Instafeed({
	target: 'instafeed',
    get: 'user',
    userId: 476346188,
    accessToken: '476346188.1677ed0.5e02bdd9f46647938e909282cd4c7ddd',
    template: '<div class="small-6 medium-4 large-3 columns"><a href="{{image}}" data-lity><img src="{{image}}" /><div class="insta_caption">{{caption}}</div></a></div>',
    limit: 8,
    resolution: 'standard_resolution'
});
feed.run();

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