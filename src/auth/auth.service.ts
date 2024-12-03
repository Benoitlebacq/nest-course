import { compare } from "bcrypt";
import { UsersService } from "src/users/users.service";

import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { AuthBodyDto } from "./authBodyDto";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) { }

    async login(authBody: AuthBodyDto) {
        const { userName, userPassword } = authBody

        const existingUser = await this.userService.getUser(userName)

        if (!existingUser) throw new NotFoundException({ error: "Mot de passe ou nom d'utilisateur incorrect" })

        const isPasswordValid = await this.isPasswordValid(userPassword, existingUser.userPassword)
        if (!isPasswordValid) throw new NotFoundException({ error: "Mot de passe ou nom d'utilisateur incorrect" })

        return this.authentificateUser({ userId: existingUser.userId })
    }

    async getProfile(userName: string) {
        // Récupérez l'utilisateur sans le mot de passe
        const user = await this.userService.getUser(userName);

        if (!user) {
            throw new NotFoundException('Utilisateur non trouvé');
        }

        // Supprimez le mot de passe avant de renvoyer les informations
        const { userPassword, ...userWithoutPassword } = user;

        return userWithoutPassword;
    }

    // Fonction pour vérifier uin mot de passe hashé
    private async isPasswordValid(password: string, hashedPassword: string): Promise<boolean> {
        return await compare(password, hashedPassword)
    }

    private async authentificateUser({ userId }: { userId: string }) {
        const payload = { userId }
        return { access_token: await this.jwtService.sign(payload) }
    }
}
