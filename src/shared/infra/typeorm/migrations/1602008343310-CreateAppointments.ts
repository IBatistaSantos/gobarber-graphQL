import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAppointments1602008343310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'appointments',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                    name: 'provider_id',
                    type: 'uuid',
                    isNullable: true,
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                    isNullable: true,
                },
                {
                  name: 'date',
                  type: 'timestamp with time zone',
                  isNullable: false,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                    name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
          );

          await queryRunner.createForeignKey(
            'appointments',
            new TableForeignKey({
              name: 'AppointmentsProvider',
              columnNames: ['provider_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
        
          await queryRunner.createForeignKey(
            'appointments',
            new TableForeignKey({
              name: 'AppointmentsUser',
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }
}
