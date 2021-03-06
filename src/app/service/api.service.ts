import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pincode} from '../model/pincode.model';
import {Observable} from 'rxjs';
import {ApiResponse} from '../model/api.response';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: any = 'http://localhost:8080/pincodes/';

  login(loginPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getPincodes(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getPincodeById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createPincode(pincode: Pincode): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, pincode);
  }

  updatePincode(pincode: Pincode): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + pincode.id, pincode);
  }

  deletePincode(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
