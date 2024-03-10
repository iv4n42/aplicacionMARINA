import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lamina1Component } from './lamina1/lamina1.component';
import { Lamina2Component } from './lamina2/lamina2.component';
import { Lamina3Component } from './lamina3/lamina3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
           Lamina1Component,
           Lamina2Component,
          Lamina3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marina';
}
