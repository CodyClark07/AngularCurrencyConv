import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response'


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) { }

  getRates(base: string) {
    return this.http.get<ExchangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`)
  }
}
