import { Body, Controller, Get, Param, Post, UseInterceptors } from "@nestjs/common";

import { User } from "./user.entity";
import { UsersInterceptor } from "./users.interceptor";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @UseInterceptors(UsersInterceptor)
    async getUsers() {
        console.log('JE SUIS DANS LE CONTROLLEUR')
        const data = await this.usersService.getUsers();
        return data
    }
    @Get(':user')
    async getUser(@Param('user') user: string) {
        const data = await this.usersService.getUser(user);
        return data
    }

    @Post()
    async createUser(@Body() user: User) {
        return await this.usersService.createUser(user)
    }

}