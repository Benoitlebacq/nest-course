
import { MessagesDto } from "src/models/Messages.models";

import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { MessagesService } from "./messages.service";

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    @Get()
    async getMessages() {
        const data = await this.messagesService.getMessages()
        return data
    }

    @Get(":id")
    async getMessage(@Param('id') id: any) {
        const data = await this.messagesService.getMessage(id);
        return data
    }

    @Post()
    async postMessage(@Body('body') body: MessagesDto) {
        const data = await this.messagesService.postMessage(body)
        return data
    }
}