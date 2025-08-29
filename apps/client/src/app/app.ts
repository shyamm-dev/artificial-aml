import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected http = inject(HttpClient);

  backendLive$ = toSignal(this.http.get<{ ok: boolean }>("http://localhost:3000")
    .pipe(
      tap(res => console.log(res)),
      map(res => res.ok))
  );
}
