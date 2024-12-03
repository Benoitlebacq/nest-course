import { Controller, ForbiddenException, Get } from "@nestjs/common";

@Controller('jeanmichel')
export class JeanmichelController {

    @Get()
    async getJeanmichel() {
        throw new ForbiddenException('interdit pas le droit pour toi')
    }
}