import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("customers")
export class Customer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        name: "name",
        nullable: false,
        type: "varchar",
    })
    name: string;

    @Column({
        name: "taxIdentifier",
        nullable: false,
        type: "varchar",
    })
    taxIdentifier: string;

    @Column({
        name: "phone",
        nullable: false,
        type: "varchar",
    })
    phone: string;

    @Column({
        name: "email",
        nullable: false,
        type: "varchar",
    })
    email: string;
    
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