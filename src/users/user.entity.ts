import { IsEmail, IsOptional, IsString } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryColumn()
    @IsOptional()
    @IsString()
    userId: string

    @Column({ unique: true })
    @IsString()
    userName: string

    @Column({ nullable: false })
    userPassword: string

    @Column({ unique: true, nullable: false })
    @IsEmail()
    email: string

    @Column({ nullable: false })
    @IsString()
    role: string
}