import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LiveMatchesService } from 'src/app/services/live-matches.service';
declare var $: any;
@Component({
    selector: 'app-live',
    templateUrl: './live.component.html',
    styleUrls: ['./live.component.css']
})
export class LiveComponent implements AfterViewInit, OnInit {
    liveMatchesList: any;
    constructor(private liveService: LiveMatchesService) { }
    ngOnInit(): void {
        this.liveService.getLiveMatches().subscribe((data: any) => {
            this.liveMatchesList = data.cl;

        }) 
    }

    ngAfterViewInit(): void {
        if ($('.carousel-slider').length) {
            var owlslider = $('.carousel-slider');
            if (owlslider.length > 0) {
                owlslider.each(function (this: any) {
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
    }
}
