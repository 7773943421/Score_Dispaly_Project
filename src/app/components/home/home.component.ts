import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CompleteMatchesService } from 'src/app/services/complete-matches.service';
import { LetestNewsService } from 'src/app/services/letest-news.service';
import { LiveMatchesService } from 'src/app/services/live-matches.service';
import { ScheduleMatchesListService } from 'src/app/services/schedule-matches-list.service';

declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

    ScheduleMatchesList: any;
    MatchesList: any;
    liveMatchesList: any;
    newsList: any;
    seriesList: any;

    constructor(private ScheduleMatches: ScheduleMatchesListService,
        private CompleteMatches: CompleteMatchesService,
        private liveService: LiveMatchesService,
        private letestNews: LetestNewsService,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.ScheduleMatches.getScheduleMatchesList().subscribe((data: any) => {
            this.ScheduleMatchesList = data.cl;
        })
        this.CompleteMatches.getMatchesList().subscribe((data: any) => {
            this.MatchesList = data.cl;
        })

        this.liveService.getLiveMatches().subscribe((data: any) => {

            this.liveMatchesList = data.cl;

        })

        this.letestNews.getMatcheNews().subscribe((data: any) => {
            this.newsList = data.nl;
            this.sanitizeData();
        })

        this.letestNews.getSeriesList().subscribe((res: any) => {
            this.seriesList = res.clst;
        })
    }

    sanitizeData(): void {
        this.newsList.forEach((item: any) => {
            item.til = this.sanitizer.bypassSecurityTrustHtml(item.til);
        });
    }
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.inItCarousal();
        }, 1000);
    }

    inItCarousal() {
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

                    var $owl = $(this).owlCarousel({
                        loop: $loop,
                        rewind: true,
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
                    // $owl.trigger('refresh.owl.carousel');
                });
            }
        }
    }


}
