webpackJsonp([2],{"/jQZ":function(e,o,a){(function(e){function o(){!e("body").hasClass("mini-navbar")||e("body").hasClass("body-small")?(e("#side-menu").hide(),setTimeout(function(){e("#side-menu").fadeIn(400)},200)):e("body").hasClass("fixed-sidebar")?(e("#side-menu").hide(),setTimeout(function(){e("#side-menu").fadeIn(400)},100)):e("#side-menu").removeAttr("style")}e(document).ready(function(){function a(){var o=e("body > #wrapper").height()-61;e(".sidebar-panel").css("min-height",o+"px");var a=e("nav.navbar-default").height(),s=e("#page-wrapper").height();a>s&&e("#page-wrapper").css("min-height",a+"px"),a<s&&e("#page-wrapper").css("min-height",e(window).height()+"px"),e("body").hasClass("fixed-nav")&&(a>s?e("#page-wrapper").css("min-height",a+"px"):e("#page-wrapper").css("min-height",e(window).height()-60+"px"))}e(this).width()<769?e("body").addClass("body-small"):e("body").removeClass("body-small"),e("#side-menu").metisMenu(),e(".collapse-link").on("click",function(){var o=e(this).closest("div.ibox"),a=e(this).find("i");o.children(".ibox-content").slideToggle(200),a.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),o.toggleClass("").toggleClass("border-bottom"),setTimeout(function(){o.resize(),o.find("[id^=map-]").resize()},50)}),e(".close-link").on("click",function(){e(this).closest("div.ibox").remove()}),e(".fullscreen-link").on("click",function(){var o=e(this).closest("div.ibox"),a=e(this).find("i");e("body").toggleClass("fullscreen-ibox-mode"),a.toggleClass("fa-expand").toggleClass("fa-compress"),o.toggleClass("fullscreen"),setTimeout(function(){e(window).trigger("resize")},100)}),e(".close-canvas-menu").on("click",function(){e("body").toggleClass("mini-navbar"),o()}),e("body.canvas-menu .sidebar-collapse").slimScroll({height:"100%",railOpacity:.9}),e(".right-sidebar-toggle").on("click",function(){e("#right-sidebar").toggleClass("sidebar-open")}),e(".sidebar-container").slimScroll({height:"100%",railOpacity:.4,wheelStep:10}),e(".open-small-chat").on("click",function(){e(this).children().toggleClass("fa-comments").toggleClass("fa-remove"),e(".small-chat-box").toggleClass("active")}),e(".small-chat-box .content").slimScroll({height:"234px",railOpacity:.4}),e(".check-link").on("click",function(){var o=e(this).find("i"),a=e(this).next("span");return o.toggleClass("fa-check-square").toggleClass("fa-square-o"),a.toggleClass("todo-completed"),!1}),e(".navbar-minimalize").on("click",function(a){a.preventDefault(),e("body").toggleClass("mini-navbar"),o()}),e(".tooltip-demo").tooltip({selector:"[data-toggle=tooltip]",container:"body"}),a(),e(window).bind("load",function(){e("body").hasClass("fixed-sidebar")&&e(".sidebar-collapse").slimScroll({height:"100%",railOpacity:.9})}),e(window).scroll(function(){e(window).scrollTop()>0&&!e("body").hasClass("fixed-nav")?e("#right-sidebar").addClass("sidebar-top"):e("#right-sidebar").removeClass("sidebar-top")}),e(window).bind("load resize scroll",function(){e("body").hasClass("body-small")||a()}),e("[data-toggle=popover]").popover(),e(".full-height-scroll").slimscroll({height:"100%"})}),e(window).bind("resize",function(){e(this).width()<769?e("body").addClass("body-small"):e("body").removeClass("body-small")}),e(document).ready(function(){if("localStorage"in window&&null!==window.localStorage){var o=localStorage.getItem("collapse_menu"),a=localStorage.getItem("fixedsidebar"),s=localStorage.getItem("fixednavbar"),i=localStorage.getItem("boxedlayout"),l=localStorage.getItem("fixedfooter"),t=e("body");"on"==a&&(t.addClass("fixed-sidebar"),e(".sidebar-collapse").slimScroll({height:"100%",railOpacity:.9})),"on"==o&&(t.hasClass("fixed-sidebar"),t.hasClass("body-small")||t.addClass("mini-navbar")),"on"==s&&(e(".navbar-static-top").removeClass("navbar-static-top").addClass("navbar-fixed-top"),t.addClass("fixed-nav")),"on"==i&&t.addClass("boxed-layout"),"on"==l&&e(".footer").addClass("fixed")}})}).call(o,a("7t+N"))},0:function(e,o,a){a("iYed"),e.exports=a("XGYx")},XGYx:function(e,o){},iYed:function(e,o,a){window._=a("M4fF");try{window.$=window.jQuery=a("7t+N"),a("jf49"),a("jwal"),a("DBzq"),a("bntf"),a("/jQZ")}catch(e){}window.axios=a("mtWM"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var s=document.head.querySelector('meta[name="csrf-token"]');s?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=s.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token")}},[0]);