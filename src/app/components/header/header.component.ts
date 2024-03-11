import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent implements OnInit {
  isDarkMode:boolean=false;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    const savedTheme = this.cookieService.get('theme');
    if (savedTheme === 'light') {
      this.isDarkMode=false;
      document.body.classList.add('light');
     
    }else{
      this.isDarkMode=true;
      document.body.classList.add('dark');
    }
  } 
   
  toggleTheme() {
    document.body.classList.toggle('dark');
    this.isDarkMode=!this.isDarkMode;
    const theme = document.body.classList.contains('dark')? 'dark' : 'light';
    this.cookieService.set('theme', theme);
  }

  onActive(){
    window.scroll(0, 0);
  }
}