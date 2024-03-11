import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LetestNewsService } from 'src/app/services/letest-news.service';

@Component({
  selector: 'app-letest-news',
  templateUrl: './letest-news.component.html',
  styleUrls: ['./letest-news.component.css']
})
export class LetestNewsComponent implements OnInit {

  newsList: any;
  seriesList: any;
  constructor(private letestNews: LetestNewsService, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
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
}
