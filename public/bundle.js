(function () {
	'use strict';

	var collection = document.querySelectorAll(".quotes-collection .quote-child");
	var gallery = document.querySelectorAll(".gallery-collection .img-background");

	var carousel = {
		state: {
			delay: 0,
			targets: [],
			current: 0
		},
		start: function start(collection, delay) {
			if ( delay === void 0 ) delay = 6500;

			this.state.delay = delay;
			this.state.targets = Object.values(collection);
			return Object.create(this)
		},
		show: function show() {
			var this$1 = this;

			var x = this.state.current;
			var t = this.state.targets;		
			var el = t[x];
			var l = t.length;
			var next = x + 1 < l ? x + 1 : 0;
			var prev = x - 1 < 0 ? l - 1 : x - 1;

			if(t[prev].classList.contains("is-active")) { t[prev].classList.toggle("is-active"); }
			setTimeout(function () { return el.classList.toggle("is-active"); }, 300);
			this.state.current = next;
			setTimeout(function () { return this$1.show(); }, this.state.delay);
		}
	};

	var quotes = collection.length > 0 ? carousel.start(collection) : false;
	if(quotes) { quotes.show(); }

	if(gallery.length > 0) {
		var figures = Object.values(gallery);
		figures.forEach(lazyload);
	}

	var about = document.querySelector('.has-circle');
	if(about !== null) {
		var target = document.querySelector('.circle');
		var dimension = about.getBoundingClientRect();
		var diameter = Math.sqrt((dimension.width * dimension.width) + (dimension.height * dimension.height));
		target.style.width = diameter + "px";
		target.style.height = diameter + "px";
	}

	function lazyload(el) {
		var src = el.dataset.src;
		var img = document.createElement('img');
		img.src = src;
		img.onload = function (e) {		
			setTimeout(function () {
				el.style.backgroundImage = "url(" + src + ")";
				el.classList.add("has-loaded");
			},200);
		};

	}

}());
//# sourceMappingURL=bundle.js.map
