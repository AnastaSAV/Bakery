import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
Swiper.use([Navigation, Pagination]);

let sliders = document.querySelectorAll ('.swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index ++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-build')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index ++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-build');
		}
		if (slider.classList.contains('.gallery')) {
			// slider.data('lightGallery').destroy(true);
		}
	}
	sliders_build_callback();
}
function sliders_build_callback(params) { }

if (document.querySelector('.slider')) {
	let slider = new Swiper('.slider', {
		// effect: 'fade',
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		// touchRatio: 0,
		// simulateTouch: false,
		// loop: true,
		centeredSlides: true,
		// preloadImages: false,
		// lazy: true,
		//Dots
		pagination: {
			el: '.slider__dotts',
			clickable: true,
		},
		//Arrows
		navigation: {
			nextEl: '.swiper-button-prev',
			prevEl: '.swiper-button-next',
		},
		//Breackpoints
		// breakpoints: {
		// 	// when window width is >= 320px
		// 	320: {
		// 	  slidesPerView: 1,
		// 	  spaceBetween: 0,
		// 	  autoHeight: true,
		// 	},
		// 	// when window width is >= 768px
		// 	768: {
		// 	  slidesPerView: 2,
		// 	  spaceBetween: 20
		// 	},
		// 	// when window width is >= 992px
		// 	992: {
		// 	  slidesPerView: 3,
		// 	  spaceBetween: 20
		// 	},
		// 	1199: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 30
		// 	},
		//  }
	});
	let sliderImages = document.querySelectorAll('.slider__image');

	let sliderDotts = document.querySelectorAll('.slider__dotts .swiper-pagination-bullet')

	for (let index = 0; index < sliderImages.length; index++) {
		const sliderImage = sliderImages[index].querySelector('img').getAttribute('src');
		sliderDotts[index].style.backgroundImage = "url('" + sliderImage + "')";
	}
};