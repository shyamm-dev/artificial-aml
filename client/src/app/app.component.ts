import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { env } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  serverMessage: string = '';
  http = inject(HttpClient);

  ngOnInit() {
    this.http.get(env.serverRootUrl, { responseType: 'text' }).subscribe({
      next: (response) => this.serverMessage = response,
      error: (err) => this.serverMessage = 'Error: ' + err.message
    });
  }
}
