import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-project';
  loadedOption: string = 'recipe';

  onNavigate(option: string) {
    this.loadedOption = option;
  }
}
