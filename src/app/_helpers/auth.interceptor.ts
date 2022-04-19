import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../_services/token.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) { }
  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    let request = httpRequest;
    const token = this.tokenService.getToken();
    if (token != null) {
      request = httpRequest.clone({ headers: httpRequest.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return httpHandler.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true 
  }
];
