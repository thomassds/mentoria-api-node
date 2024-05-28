import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPermissions1716924377675 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "permissions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isNullable: false,
                        isPrimary: true,
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "key",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                    },
                    {
                        name: "deleted_at",
                        type: "timestamptz",
                        isNullable: true,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("permissions");
    }
}
