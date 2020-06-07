import { CommunityService } from './components/community/community.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-responsive-images';
  communitie$ = this.communityService.communities;

  constructor(private communityService: CommunityService) {}
}
