import { Component, OnInit } from '@angular/core';
import { ScheduleMatchesListService } from 'src/app/services/schedule-matches-list.service';

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {
  ScheduleMatchesList: any;

  constructor(private ScheduleMatches: ScheduleMatchesListService) { }

  ngOnInit(): void {
    this.ScheduleMatches.getScheduleMatchesList().subscribe((data: any) => {

      this.ScheduleMatchesList = data.cl;
    })
  }

}

