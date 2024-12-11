import { v4 as uuidv4 } from "uuid";

import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class AddUserIdPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('SUIS DANS LE PIRE')
        value.userId = uuidv4();
        return value;
    }
}
