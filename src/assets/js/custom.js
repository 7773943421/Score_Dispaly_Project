/*
--------------------------------------------------------------------------------------------------------
* Template Name             : Hattrickk                                                                *
* Author                    : Hattrickk                                                                *
* Version                   : 1.0                                                                      *
* Design and Developed by   : Hattrickk                                                                * 
*-------------------------------------------------------------------------------------------------------
NOTE: This file contains all scripts for the actual Template.
*/
(function ($) {
    "use strict";
    var pus = {};

    // Mode function
    pus.mode = function () {
        const checkbox = document.getElementById("checkbox")
        checkbox.addEventListener("change", () => {
            document.body.classList.toggle("dark")
        })
    };

    // carousel-slider
    pus.slider = function () {
        if ($('.carousel-slider').length) {
            var owlslider = jQuery('.carousel-slider');
            if (owlslider.length > 0) {
                owlslider.each(function () {
                    var $this = $(this),
                        $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                        $items = ($this.data('items')) ? $this.data('items') : 1,
                        $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                        $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                        $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                        $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                        $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                        $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                        $space = ($this.attr('data-space')) ? $this.data('space') : 0,
                        $animateOut = ($this.attr('data-animateOut')) ? $this.data('animateOut') : false,
                        $center = ($this.data('center')) ? $this.data('center') : false

                    $(this).owlCarousel({
                        loop: $loop,
                        items: $items,
                        dots: $navdots,
                        autoplayTimeout: $autospeed,
                        smartSpeed: $smartspeed,
                        autoHeight: $autohgt,
                        margin: $space,
                        nav: $navarrow,
                        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
                        autoplay: $autoplay,
                        center: $center,
                        autoplayHoverPause: true,
                        responsive: {
                            0: {
                                items: $this.data('xs-items') ? $this.data('xs-items') : 1
                            },
                            567: {
                                items: $this.data('sm-items') ? $this.data('sm-items') : 1
                            },
                            767: {
                                items: $this.data('md-items') ? $this.data('md-items') : 2
                            },
                            991: {
                                items: $this.data('lg-items') ? $this.data('lg-items') : 3
                            },
                            1199: {
                                items: $this.data('xl-items') ? $this.data('xl-items') : 3
                            },
                            1599: {
                                items: $this.data('xxl-items') ? $this.data('xxl-items') : 4
                            },
                            1600: {
                                items: $items
                            }
                        }
                    });
                });
            }
        }
    };


    // mobile-nav-toggler
    pus.mobiletoggler = function () {
        $(".mobile-nav-toggler").on("click", function (e) {
            $(".quick-links").toggleClass("hide-on-med-and-down");
        });
    };

    // mobile-nav-toggler close
    pus.mobiletogglerclose = function () {
        $(".mobile-close a").on("click", function (e) {
            $(".quick-links").toggleClass("hide-on-med-and-down");
        });
    };


    $(".user-toggler").on("click", function (e) {
        $(".desktop-login").toggleClass("show-mobile");
    });






    // window load
    $(window).on('load', function () {

    });
    // window scroll
    $(window).scroll(function () {

    });
    // window resize
    $(window).resize(function () {

    });

    // window on ready
    $(window).ready(function () { });
    // Document Ready
    $(document).ready(function () {
        // pus.mode(),
            // pus.slider(),
            pus.mobiletoggler(),
            pus.mobiletogglerclose()
    });
})(jQuery);