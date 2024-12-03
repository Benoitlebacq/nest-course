import { map, Observable } from "rxjs";

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";

@Injectable()
export class UsersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('JE SUIS DANS L INTERCEPTOR')
    return next.handle().pipe(map((data) => data.map(({ userPassword, ...user }) => user)));
  }
}
