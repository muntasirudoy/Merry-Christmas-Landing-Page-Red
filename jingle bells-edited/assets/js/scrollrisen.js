!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.scrollrisen=t():e.scrollrisen=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){var r=window.innerHeight,n=window.scrollY;e.forEach((function(e,o){var i=e.offsetTop;r-r*t.trigger+n>=i?e.classList.add(t.activeClass):function(e,t){return"true"==e.getAttribute("data-reverse")||"false"!=e.getAttribute("data-reverse")&&t.reverse}(e,t)&&r+n<i&&e.classList.remove(t.activeClass)}))}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){var t=o(o({},{easing:"ease",duration:2e3,trigger:.2,reverse:!0,debounce:16,activeClass:"_sr-active"}),e),n=document.querySelectorAll("[data-sr]");n.forEach((function(e){e.style.transitionTimingFunction=e.getAttribute("data-easing")||t.easing,e.style.transitionDuration=e.getAttribute("data-duration")||t.duration+"ms"})),r(n,t),["scroll","resize"].forEach((function(e){var o,i,a,c;window.addEventListener(e,(o=function(){r(n,t)},i=t.debounce,a=!0,function(){var e=this,t=arguments,r=function(){c=null,a||o.apply(e,t)},n=a&&!c;clearTimeout(c),c=setTimeout(r,i),n&&o.apply(e,t)}))}))}return e.r(t),e.d(t,{init:()=>a}),t})()}));