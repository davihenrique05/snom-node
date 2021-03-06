import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";

@Entity("permission")
export class Permission {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    description: string

    @OneToMany(type => User, user => user.permission)
    users : User[]
}