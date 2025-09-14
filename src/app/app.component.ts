import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { InputComponent } from "./components/input/input.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkButtonComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login';
}
