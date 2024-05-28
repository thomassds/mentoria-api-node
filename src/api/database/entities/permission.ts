import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("permissions")
export class Permission {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        name: "description",
        nullable: false,
        type: "varchar",
    })
    description: string;

    @Column({
        name: "key",
        nullable: false,
        type: "varchar",
    })
    key: string;

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
