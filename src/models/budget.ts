import { Schema, model, Document } from 'mongoose'

export interface Budget {
    value: Number;
    name: string;
}

const schema = new Schema<Budget> (
    {
        value: {type: Number, required: true },
        name: { type: String, required: true }
    },
    {
        timestamps: {createdAt: 'created_at' }
    }
);

export default model<Budget>('Budget', schema);