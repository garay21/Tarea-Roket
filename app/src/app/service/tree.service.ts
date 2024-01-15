import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// clase para consumir servicios de la api para los arboles 
export class TreeService {
  //url de la api
  private apiUrl = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {}

  // funcion para obtener los arboles su id y nombre
  getAllTrees(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/arboles');
  }
  // funcion para obtener los arboles su id y nombre
  getTree(id : number): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + '/arboles/'+ id);
  }
}
