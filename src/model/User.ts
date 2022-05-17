import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Permission } from "./Permission";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        length: 50,
    })
    type: string

    @Column({
        length: 150,
    })
    email: string

    @Column({
        length: 100,
    })
    password: string

    @Column({
        length: 100,
    })
    nickname: string

    @Column()
    level: number

    @Column({
        name: "is_user_active",
        type: 'bool',
        width: 1,
    })
    isUserActive: boolean

    @Column()
    experience: number

    @Column({
        length: 200
    })
    icon: string

    @ManyToOne(() => Permission, (permission) => Permission)
    permission: Permission
}