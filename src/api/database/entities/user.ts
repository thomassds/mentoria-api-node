import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
    @PrimaryColumn()
    id: string;

    @Column({
        name: "name",
        nullable: false,
        type: "varchar",
    })
    name: string;

    @Column({
        name: "email",
        nullable: false,
        type: "varchar",
    })
    email: string;

    @Column({
        name: "phone",
        nullable: false,
        type: "varchar",
    })
    phone: string;

    @Column({
        name: "birthdate",
        nullable: false,
        type: "date",
    })
    birthdate: string;

    @Column({
        name: "password",
        nullable: false,
        type: "varchar",
        select: false,
    })
    password: string;

    @CreateDateColumn({
        name: "created_at",
        nullable: false,
        type: "timestamptz",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
        nullable: false,
        type: "timestamptz",
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: "deleted_at",
        nullable: false,
        type: "timestamptz",
    })
    deletedAt: Date;
}
