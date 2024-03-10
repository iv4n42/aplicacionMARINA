import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-lamina3',
  standalone: true,
  imports: [MatButtonModule,
            MatCardModule,
            MatIconModule],
  templateUrl: './lamina3.component.html',
  styleUrl: './lamina3.component.scss'
})
export class Lamina3Component {

}
