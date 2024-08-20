import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'tdu-learning-what-about-rxjs',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './learning-what-about-rxjs.component.html',
  styleUrl: './learning-what-about-rxjs.component.css',
})
export class LearningWhatAboutRxjsComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();
  elementAAfficher = signal('');

  ships$ = new Observable<string>((subscriber) => {
    console.info('OBSERVABLE !!!'); // SYNC
    subscriber.next('Tatooine'); // SYNC

    setTimeout(() => {
      subscriber.next('Coruscant'); // ASYNC
      subscriber.complete(); //SYNC
    }, 0);
  });

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngChanges
    //console.info('INIT');
    //const subscription = this.ships.subscribe({
    //  next: (content) => (this.elementAAfficher.set(content)),
    //  complete: () => console.info('FINI ...'),
    //});

    //this.subscription.add(subscription);
    //console.info('FIN INIT');
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed
    console.info('DESTROY');
    this.subscription.unsubscribe();
  }
}
