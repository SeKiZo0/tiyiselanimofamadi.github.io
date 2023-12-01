//scroll tracker api
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

$(window).scroll(function() {
  parallax();
})

function parallax() {
  var wScroll = $(window).scrollTop();

  $('.IntroText').css('margin-bottom', -(wScroll*0.1)+'px');

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

//horizontal scroll

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
/*

// Main navigation 
let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;
  //this is selecting all the anchors
document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
    //this targets all the listed ids
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1
		});
	});
});

// Panels 
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});*/