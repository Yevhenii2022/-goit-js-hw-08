!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,g=Math.max,p=Math.min,v=function(){return s.Date.now()};function m(e,t,n){var r,i,a,f,u,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function O(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function S(e){return l=e,u=setTimeout(h,t),s?O(e):f}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=v();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return d?p(n,a-(e-l)):n}(e))}function w(e){return u=void 0,m&&r?O(e):(r=i=void 0,f)}function T(){var e=v(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return S(c);if(d)return u=setTimeout(h,t),O(c)}return void 0===u&&(u=setTimeout(h,t)),f}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(y(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},T.flush=function(){return void 0===u?f:w(v())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};const O="feedback-form-state",S=document.querySelector(".feedback-form");!function(){let e=JSON.parse(localStorage.getItem(O));e&&Object.entries(e).forEach((([e,t])=>{S.elements[e].value=t}))}(),S.addEventListener("input",e(t)((function(e){let t=localStorage.getItem(O);t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(t))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),S.reset();let t=localStorage.getItem(O);t=t?JSON.parse(t):{},console.log(t),localStorage.removeItem(O)}))}();
//# sourceMappingURL=03-feedback.f4502eba.js.map