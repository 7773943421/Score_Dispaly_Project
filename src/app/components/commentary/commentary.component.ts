import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompleteMatchesService } from 'src/app/services/complete-matches.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css'],
})
export class CommentaryComponent implements OnInit, OnDestroy {
  interval: any;
  eid: any;
  sanitizedUrl!: SafeResourceUrl;
  selectedTeam: string = '';
  fullScore: any;
  fullSquads: any;

  constructor(
    private router: ActivatedRoute,
    private CompleteMatches: CompleteMatchesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // console.log("Data From Details", this.router.snapshot.params);
    this.eid = this.router.snapshot.params['eid'];
    this.getFullScore(this.eid);
    this.getFullSquads(this.eid);
    this.interval = setInterval(() => {
      this.getFullScore(this.eid);
      // console.log("interval");
    }, 120000);

    const url = `https://score.onlyscore.live/scorebord?id=${this.eid}&color=eeeeee&font=c5141f`;
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    window.addEventListener('message', (event) => {
      const element: HTMLIFrameElement = document.getElementById(
        'idIframe'
      ) as HTMLIFrameElement;
      if (element !== null && element !== undefined) {
        if (event && event.data && event.data.scoreWidgetHeight) {
          element.height = event.data.scoreWidgetHeight;
        }
      }
    });
  }

  onteamClick(team: any) {
    this.selectedTeam = team;
    // console.log(team);
  }

  getFullScore(eid: any) {
    this.CompleteMatches.getFullScorecard(eid).subscribe((data) => {
      // console.log("Data From Unique full score from details", data);
      this.fullScore = data;
      if (this.fullScore.bat1.length > 0) {
        this.selectedTeam = this.fullScore.es.tn1;
      } else if (this.fullScore.bat2.length > 0) {
        this.selectedTeam = this.fullScore.es.tn2;
      } else {
        this.selectedTeam = 'SQUAD';
      }
    });
  }

  getFullSquads(eid: any) {
    this.CompleteMatches.getFullSquads(eid).subscribe((data) => {
      // console.log("Data From Unique full squads from details", data);
      this.fullSquads = data;
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
