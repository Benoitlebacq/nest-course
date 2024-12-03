import { MessagesDto } from "src/models/Messages.models";

import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {
    async getMessages(): Promise<string> {
        // logique métier qui va recuperer tous les messages en BDD
        return `tous les messages`
    }

    async getMessage(id: number): Promise<string> {
        // logique métier qui va recuperer le message avec l'id 'id' en BDD
        return `message avec l'id: ${id}`
    }

    async postMessage(body: MessagesDto): Promise<string> {
        const { userId, userName, title, content } = body
        // logique pour post le message en BDD
        return `ce message a été posté : ${content}`
    }
}
