
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap, pluck, map } from 'rxjs/operators';
import { Tour } from '../interfaces/tour.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTours(): Observable<any> {
    let params = new HttpParams();
    params = params.append('departCity', '10');
    params = params.append('country', '552');
    params = params.append('date', '2020-05-29');
    params = params.append('nights', '8');
    params = params.append('nightsTo', '10');
    return this.http.get<Tour[]>(this.url, { params }).pipe(
      tap(result => {
        result.direction = 'Москва-Париж';
        result.tours.sort(((x, y) => x.price > y.price ? 1 : -1));
      })
    );
  }


}
// .sort(((x, y) => x.price < y.price ? 1 : -1))
// departCity - id города вылета (список выше)
// country - id страны (список выше)
// date - дата вылета в формате YYYY-MM-DD
// nights - кол-во ночей от
// nightsTo - кол-во ночей до
