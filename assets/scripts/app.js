//scroll tracker api
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

/*this is to highlight the link you are currently on*/
$('body').scrollspy({target: ".navbar"});

$(window).scroll(function() {
  parallax();
})

function parallax() {
  var wScroll = $(window).scrollTop();

  $('.IntroText').css('margin-bottom', -(wScroll*0.35)+'px');

}

const stars = document.querySelector(".stars2");

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOfsets: [CSS.percent(0), CSS.percent(100)],
});

stars2.animate(
  {
    transform: ["translateY(-1300px)", "translateY(-2400px)"],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
)

document.querySelector('#about_me').textContent = 'ggez';
document.querySelector('#about_me').style.color = 'blue';