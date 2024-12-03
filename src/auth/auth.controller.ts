



import { Body, Controller, Get, Post, Request, UseGuards, UseInterceptors } from "@nestjs/common";

import { AuthGuard } from "./auth.guard";
import { AuthInterceptor } from "./auth.interceptor";
import { AuthService } from "./auth.service";
import { AuthBodyDto } from "./authBodyDto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @UseInterceptors(AuthInterceptor)
    async getAuth(@Body() authBody: AuthBodyDto) {
        const data = await this.authService.login(authBody);
        return data
    }

    // implementatiion du GUARD
    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        return this.authService.getProfile(req.user.userName);
    }
}