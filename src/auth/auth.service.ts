import { compare } from "bcrypt";
import { UsersService } from "src/users/users.service";

import { Injectable, NotFoundException } from "@nestjs/common";

import { AuthBodyDto } from "./authBodyDto";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }

    async login(authBody: AuthBodyDto) {
        const { userName, userPassword } = authBody

        const existingUser = await this.userService.getUser(userName)

        if (!existingUser) throw new NotFoundException({ error: "Mot de passe ou nom d'utilisateur incorrect" })

        const isPasswordValid = await this.isPasswordValid(userPassword, existingUser.userPassword)
        if (!isPasswordValid) throw new NotFoundException({ error: "Mot de passe ou nom d'utilisateur incorrect" })

        return { userId: existingUser.userId, userName: existingUser.userName }
    }

    // Fonction pour vérifier uin mot de passe hashé
    private async isPasswordValid(password: string, hashedPassword: string): Promise<boolean> {
        return await compare(password, hashedPassword)
    }
}
