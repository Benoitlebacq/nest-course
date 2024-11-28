import { hash } from "bcrypt";
import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from "./user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find() // récupère tous les utilisateurs
    }

    async getUser(userName: string): Promise<User> {
        return await this.userRepository.findOneBy({ ['userName']: userName }) // récupère un utilisateur
    }

    async createUser(user: User): Promise<string> {
        const userHashedPassword = await this.hashPassword(user.userPassword)
        try {
            await this.userRepository.save({ ...user, userPassword: userHashedPassword }) // Insère un utilisateur avec un mot de passe crypté
            return `l'utilisateur ${user.userName} a été créé`
        } catch (error) {
            throw new Error("Impossible de créer l'utlisateur")
        }
    }

    private async hashPassword(password: string) {
        const hashedPassword = await hash(password, 9)
        return hashedPassword
    }
}
