import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {
    async getMessages(): Promise<string> {
        // logique métier qui va recuperer tous les messages en BDD
        return `tous les messages`
    }

    async getMessage(id: string): Promise<string> {
        // logique métier qui va recuperer le message avec l'id 'id' en BDD
        return `message avec l'id: ${id}`
    }
}
