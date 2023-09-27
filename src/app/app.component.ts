import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-env-example';
  version = import.meta.env.NG_APP_VERSION;
  exampleText = import.meta.env.NG_APP_EXAMPLE_TEXT;
}
