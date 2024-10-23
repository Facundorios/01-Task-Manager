import {Table, Column, Model, DataType, PrimaryKey, Default, HasMany} from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'
import { Task } from './Task.models';

@Table({
    timestamps: true,
    tableName: 'users',
})
export class User extends Model {
    @Default(uuidv4)
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @HasMany(() => Task)
    tasks!: Task[];
}
