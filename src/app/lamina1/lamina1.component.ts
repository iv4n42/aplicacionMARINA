import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TabComponent } from '../tab/tab.component';



@Component({
  selector: 'app-lamina1',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,TabComponent],
  templateUrl: './lamina1.component.html',
  styleUrl: './lamina1.component.scss'
})
export class Lamina1Component {

}
