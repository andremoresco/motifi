import { Schema, model, Document } from 'mongoose'

export interface BudgetInterfaceMongo extends Document {
    userIdentityId: string;
    value: number;
    description: string;
};

const schema = new Schema(
    {
        userIdentityId: {
            type: String, required: true
        },
        value: { 
            type: Number,
            required: true 
        },
        name: { 
            type: String,
            required: true 
        }
    },
    {
        timestamps: { createdAt: 'created_at' }
    }
);

export default model<BudgetInterfaceMongo>('BudgetModelMongo', schema);