import { Observable, tap } from "rxjs";

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now()
    console.log('Request received')

    return next.handle().pipe(tap(() => console.log(`Request processed in ${Date.now() - now}ms`)));
  }
}
