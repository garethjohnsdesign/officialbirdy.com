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
$(document).ready(function() {
var feed = new Instafeed({
	target: 'instafeed',
    get: 'user',
    userId: 476346188,
    accessToken: '476346188.1677ed0.af0567d32036459fb38a1e0108b89eb2',
    template: '<div class="small-6 medium-4 large-3 columns"><a href="{{image}}" data-lity><img src="{{image}}" /><div class="insta_caption">{{caption}}</div></a></div>',
    limit: 8,
    resolution: 'standard_resolution'
});
feed.run();
});

// Menu

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});