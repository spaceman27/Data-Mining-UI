import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HomeService } from './home.service';
import { ByCountryModel, ByHashTagModel } from './home.model';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {
      
  }
byCountry: ByCountryModel[];
byHashtag: ByHashTagModel[];
isLoadingCountry: boolean;
isLoadingHashTag: boolean;
// How many second to run the timer to refresh rest api
intervalToRefreshData = 30; // default 30 seconds

  getByCountry(){
    this.isLoadingCountry = true;
    this.homeService.getByCountry()
      .subscribe((lst: any[]) => {
          this.byCountry = lst.map(r =>JSON.parse(r))
          console.log(this.byCountry);
          this.isLoadingCountry = false;
      });
  }
  getByHashTag(){
    this.isLoadingHashTag = true;      
    this.homeService.getByHashTag()
        .subscribe((lst: any[]) => {
            this.byHashtag = lst.map(r =>JSON.parse(r));
            console.log(this.byHashtag);
            this.isLoadingHashTag = false;
        }); 
  }
  ngOnInit() {
    this.getByCountry();
    this.getByHashTag();
    // Timer to refresh data
    Observable.interval(this.intervalToRefreshData * 1000).subscribe(() => {
      console.log('refresh rest api data');
      this.getByCountry();
      this.getByHashTag();
    });
  }
}
