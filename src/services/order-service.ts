import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class OrderService {
  private catUrl = "https://www.partysuperstores.co.uk/api/getinvoice/";  
  constructor(private http: Http) {}

  getOrder(orderid) : Observable<ORDER> {
    let headers = new Headers();
    headers.append('Authorization', "Bearer "+ localStorage.getItem("token"));
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http.get(this.catUrl + orderid, opts)
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

  getAll(){

  } 
}

export class ORDER {
  constructor(
    public orderid : string,
    public name : string,
    public deladd : string,
    public custadd : string,
    public code : string,
    public custemail : string,
    public custphone : string,
    public siteid : number,
    public discountcode : string,
    public discount : number,
    public donation : number,
    public totamt : number,
    public amount : number,
    public postage : number,
    public postageid : number,
    public ptype : string,
    public istele : number,
    public ismob : number,
    public sitename : string,
    public postname : string,
    public sitecode : string,
    public website : string,
    public phone : string,
    public email : string,
    public infoid : number,    
    public items: Array<ITEM>   
  ) { }
}

export class ITEM {
  constructor(
     public prodid : number,
     public img : string,
     public prodname : string,
     public prodsize : string,
     public qty : number,
     public price : number,
     public totqty : number,
     public totamt : number,
     public url : string,
     public descr : string,
     public zerovat : number
  ) { }
}
