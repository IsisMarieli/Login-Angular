import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkButtonComponent } from './components/link-button/link-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login';
}
