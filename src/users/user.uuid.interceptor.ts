import { Observable } from "rxjs";

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";

@Injectable()
export class UsersUuidInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('JE SUIS DANS L INTERCEPTOR DU POST')
        return next.handle()
    }
}