import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListVinylsComponent } from './features/vinyls/components/list-vinyls/list-vinyls.component';
import { LearningWhatAboutRxjsComponent } from './learning-what-about-rxjs/learning-what-about-rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListVinylsComponent, LearningWhatAboutRxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal<string>('vinylcollection');
}
