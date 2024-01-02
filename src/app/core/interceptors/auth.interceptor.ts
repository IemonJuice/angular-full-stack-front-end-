import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token:string = inject(CookieService).get('token');
  if (token) {
    req = req.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      }
    )
  }
  return next(req);
};
