(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1:function(t,e,n){"use strict";n.r(e),n.d(e,"isRTL",function(){return i}),n.d(e,"isMobile",function(){return o}),n.d(e,"formatDate",function(){return s});var i=function(){var t=document.querySelector("html");return"ar"===t.getAttribute("lang")||"he"===t.getAttribute("lang")},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(t,")")).matches},s=function(t){return t?new Date(t).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""}},20:function(t,e,n){t.exports=n(21)},21:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),s=(n(5),n(13)),a=n(2),r=n(3),c=n.n(r),l=n(1),u=null,d=null,f=window.pageYOffset,m=0,h=0,p=0,w=!1;function b(){f=window.pageYOffset,y()}function g(t){Object(l.isMobile)("1023px")?(o()("body").addClass("share-menu-displayed"),setTimeout(function(){u.removeAttr("data-aos")},t)):(Object(s.a)(".js-sticky",{stickyBitStickyOffset:100}),o()("body").removeClass("share-menu-displayed"))}function v(){j(),g(100),setTimeout(function(){x(),y()},200)}function y(){w||requestAnimationFrame(k),w=!0}function k(){var t=h-m,e=Math.ceil(f/t*100);e<=100&&function(t){if(t<=100){var e=p-t/100*p;d[0].style.strokeDashoffset=e}}(e),w=!1}function j(){m=window.innerHeight,h=o()(document).height()}function x(){var t=d.parent().width()/2,e=Object(l.isMobile)()?2:3;d.attr("stroke-width",e),d.attr("r",t-(e-1)),d.attr("cx",t),d.attr("cy",t),p=2*t*Math.PI,d[0].style.strokeDasharray="".concat(p," ").concat(p),d[0].style.strokeDashoffset=p}function O(){d=o()(".js-progress"),j(),x(),k(),setTimeout(function(){d.parent().css("opacity",1)},300)}o()(document).ready(function(){u=o()(".js-aos-wrapper");var t=o()(".js-scrolltop"),e=o()(".js-load-comments"),n=o()(".js-comments-iframe"),i=o()(".js-recommended-articles");c()(".js-post-content"),function(){for(var t=document.querySelectorAll(".kg-gallery-image img"),e=0,n=t.length;e<n;e++){var i=t[e].closest(".kg-gallery-image"),o=t[e].attributes.width.value/t[e].attributes.height.value;i.style.flex="".concat(o," 1 0%")}}(),g(1e3),i.length>0&&(i.on("init",function(){O()}),i.slick({arrows:!0,infinite:!0,prevArrow:'<button class="m-icon-button filled in-recommended-articles slick-prev" aria-label="Previous"><span class="icon-arrow-left"></span></button>',nextArrow:'<button class="m-icon-button filled in-recommended-articles slick-next" aria-label="Next"><span class="icon-arrow-right"></span></button>',mobileFirst:!0,responsive:[{breakpoint:720,settings:{slidesToShow:2}},{breakpoint:1023,settings:{arrows:!1,slidesToShow:3}}],rtl:Object(l.isRTL)()})),t.click(function(){o()("html, body").animate({scrollTop:0},500)}),e.click(function(){e.parent().hide(),n.fadeIn("slow")}),o()(".js-post-content").find("img").each(function(){o()(this).closest("figure").hasClass("kg-bookmark-card")||o()(this).addClass("js-zoomable");var t=o()(this).parent().find("figcaption");t?o()(this).attr("alt",t.text()):o()(this).attr("alt","")}),Object(a.a)(".js-zoomable"),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",v,{passive:!0})}),o()(window).on("load",function(){O()})}},[[20,0,1]]]);