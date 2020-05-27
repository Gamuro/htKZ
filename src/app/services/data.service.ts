
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as m from 'moment';
import { arrive } from '../shared/arrive';
import { depart } from '../shared/depart';
import { tap } from 'rxjs/operators';
import { Tour } from '../interfaces/tour.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTours({ departCity, country, date, nights, nightsTo }): Observable<any> {
    let params = new HttpParams();
    const formatedDate = m(date).clone().format('YYYY-MM-DD');
    const resultName =
      `Результаты запроса (${depart[departCity].name} - ${arrive[country].name}, ${m(date).clone().format('DD mmm YYYY')}, ${nights}-${nightsTo}н.)`;
    console.log('d', departCity, country, date, nights, nightsTo);
    params = params.append('departCity', departCity);
    params = params.append('country', country);
    params = params.append('date', formatedDate);
    params = params.append('nights', '8');
    params = params.append('nightsTo', '10');
    return this.http.get<Tour[]>(this.url, { params }).pipe(
      tap(result => {
        result.direction = resultName;
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
