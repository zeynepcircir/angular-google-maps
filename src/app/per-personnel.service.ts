import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HvlResponse } from '@hvlng/framework-bff/core';
import { JsonConvert } from 'json2typescript';
import { map, Observable } from 'rxjs';
import { PerPersonnelMilitaryModel } from 'sahilnet-projects-common-shared';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PerPersonnelService {
  private readonly endpoint = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) {}

  getById(id: number): Observable<PerPersonnelMilitaryModel> {
    const pattern = `/personnelService/personnel/${id}`;
    const serviceUrl = `${this.endpoint}${pattern}`;
    return this.httpClient
      .get<HvlResponse<PerPersonnelMilitaryModel>>(serviceUrl)
      .pipe(
        map((data) => {
          const converter = new JsonConvert();
          return converter.deserializeObject(
            data.body,
            PerPersonnelMilitaryModel
          );
        })
      );
  }
}
