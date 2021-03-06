import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class DeliveryService { 
  private delUrl = 'https://www.partysuperstores.co.uk/api/Getpostages';  // URL to web API
  constructor(private http: Http) {}

  getAllDelivery() : Observable<Deliveries[]> {
    let headers = new Headers();
    headers.append('Authorization', "Bearer "+ localStorage.getItem("token"));
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http.get(this.delUrl, opts)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = JSON.parse(res['_body']);
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }  
}

export class Deliveries {
  constructor(
    public postageid: number,
    public mtype: string,
    public method: string,
    public amt: number,
    public mobile: string,
    public message : string,
    public isnd: number,
    public issr: number,
    public iseu: number,
    public isww: number
  ) { }
}

