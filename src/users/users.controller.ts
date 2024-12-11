import { v4 as uuidv4 } from "uuid";

import { Body, Controller, Get, Param, Post, UseInterceptors } from "@nestjs/common";

import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { UsersPasswordInterceptor } from "./usersPassword.interceptor";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @UseInterceptors(UsersPasswordInterceptor)
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
        user.userId = uuidv4();
        return await this.usersService.createUser(user)
    }

}


