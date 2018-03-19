import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HomeService } from './home.service';
import { ByCountryModel, ByHashTagModel } from './home.model';

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
  ngOnInit() {
    this.isLoadingCountry = true;
    this.isLoadingHashTag = true;
    this.homeService.getGateByCountry()
          .subscribe((lst: any[]) => {
              this.byCountry = lst.map(r =>JSON.parse(r))
              console.log(this.byCountry);
              this.isLoadingCountry = false;
          });
    this.homeService.getGateByHashTag()
      .subscribe((lst: any[]) => {
          this.byHashtag = lst.map(r =>JSON.parse(r));
          console.log(this.byHashtag);
          this.isLoadingHashTag = false;
      }); 
  }
}
