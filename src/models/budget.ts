import { Schema, model, Document } from 'mongoose'

export interface BudgetInterface extends Document {
    value: Number;
    name: string;
};

const BudgetSchema = new Schema(
    {
        value: {type: Number, required: true },
        name: { type: String, required: true }
    },
    {
        timestamps: {createdAt: 'created_at' }
    }
);

export default model<BudgetInterface>('Budget', BudgetSchema);