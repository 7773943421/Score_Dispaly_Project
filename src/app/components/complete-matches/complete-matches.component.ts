import { AfterViewInit, Component } from '@angular/core';
import { CompleteMatchesService } from 'src/app/services/complete-matches.service';
declare var $: any;
@Component({
    selector: 'app-complete-matches',
    templateUrl: './complete-matches.component.html',
    styleUrls: ['./complete-matches.component.css']
})
export class CompleteMatchesComponent implements AfterViewInit {
    MatchesList: any;
    constructor(private CompleteMatches: CompleteMatchesService) { }

    ngOnInit() {

        this.CompleteMatches.getMatchesList().subscribe((data: any) => {
            this.MatchesList = data.cl;
        }) 
    }
    ngAfterViewInit(): void {
        this.inItcarousel();
    }
 
    getFullScore(eid:any){
        this.CompleteMatches.getFullScorecard(eid).subscribe(data => {
            // console.log("Data From Unique Id",data);            
        })
    }



    inItcarousel() {
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
