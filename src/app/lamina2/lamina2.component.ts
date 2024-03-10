import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-lamina2',
  standalone: true,
  imports: [MatCardModule,
           MatButtonModule,
           MatIconModule],
  templateUrl: './lamina2.component.html',
  styleUrl: './lamina2.component.scss'
})
export class Lamina2Component {

}
