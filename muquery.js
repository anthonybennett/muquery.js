/*! muquery.js by Anthony Bennett; released under the LGPL on 2014/02/14 */
(function(win, doc, Aprototype, Elprototype) {
	"use strict";

	// private functions
	var slice = Aprototype.slice,
		matches = (Elprototype.matches ||
					Elprototype.webkitMatchesSelector ||
					Elprototype.mozMatchesSelector ||
					Elprototype.oMatchesSelector ||
					Elprototype.msMatchesSelector);

	// save some typing on addEventListener
	win.on = win.addEventListener;
	doc.on = doc.addEventListener;
	Elprototype.on = Elprototype.addEventListener;

	// define muquery
	var mu = win.mu = {
		// DOM search/navigation
		find: function(el, selector) {
			if (!selector) { selector = el; el = doc; }
			return el.querySelector(selector);
		},
		findAll: function(el, selector) {
			if (!selector) { selector = el; el = doc; }
			return slice.call(el.querySelectorAll(selector));
		},
		up: function(el, selector) {
			var ancestor = el;
			while (ancestor != document) {
				ancestor = ancestor.parentNode;
				if (!selector || mu.is(ancestor, selector)) {
					return ancestor;
				}
			}
		},
		down: function(el, selector) {
			return (selector ?
					el.querySelector(selector) :
					el.firstElementChild);
		},
		next: function(el) {
			return el.nextElementSibling;
		},
		prev: function(el) {
			return el.previousElementSibling;
		},
		is: function(el, selector) {
			return matches.call(el, selector);
		},
		filter: function(els, selector) {
			if (els instanceof NodeList) {
				els = slice.call(els);
			}
			return els.filter(function(el) {
				return mu.is(el, selector);
			});
		},
		text: function(el, text) {
			if (!text) { return el.textContent; }
			el.textContent = text;
			return el;
		},
		html: function(el, html) {
			if (!html) { return el.innerHTML; }
			el.innerHTML = html;
			return el;
		},
		// class/style manipulation
		addClass: function(el, className) {
			el.classList.add(className);
			return el;
		},
		removeClass: function(el, className) {
			el.classList.remove(className);
			return el;
		},
		toggleClass: function(el, className) {
			el.classList.toggle(className);
			return el;
		},
		hasClass: function(el, className) {
			return el.classList.contains(className);
		},
		css: function(el, styles) {
			Object.keys(styles).forEach(function(key) {
				el.style[key] = styles[key];
			});
			return el;
		},
		// equivalent of $(fn);
		ready: function(fn) {
			doc.on("DOMContentLoaded", fn, false);
		},
		// equivalent of $el.on(eventName, selector, handler);
		on: function(el, eventName, selector, handler) {
			el.on(eventName, function(event) {
				if (mu.is(event.target, selector)) {
					handler.call(event.target, event);
				}
			});
		}
	};
}(window, document, Array.prototype, Element.prototype));