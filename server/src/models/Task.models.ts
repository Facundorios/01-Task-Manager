import { Table, Model, Column, DataType, PrimaryKey, Default, ForeignKey, BelongsTo } from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { User } from "./User.model";

@Table({
    timestamps: true,
    tableName: 'tasks',
})
export class Task extends Model {
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
    title!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string;
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date!: Date;
    
    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    userId!: string;

    @BelongsTo(() => User)
    user!: User;
}
