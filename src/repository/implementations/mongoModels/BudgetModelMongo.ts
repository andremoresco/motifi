import { Schema, model, Document } from 'mongoose'
import { BudgetInstallmentStatus } from '../../../utils/BudgetInstallmentStatus'

export interface BudgetInterfaceMongo extends Document {
    userIdentityId: string;
    value: number;
    description: string;
    finalDate: Date;
    installments: BudgetInstallmentInterfaceMongo[];
};

export interface BudgetInstallmentInterfaceMongo {
    index: number;
    month: number;
    value: number;
    status: BudgetInstallmentStatus;
};

const InstallmentSchema = new Schema(
    {
        index: {
            type: Number,
            required: true
        },
        month: {
            type: Number,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: BudgetInstallmentStatus.PENDING
        }
    }
);

const schema = new Schema(
    {
        userIdentityId: {
            type: String, required: true
        },
        value: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        finalDate: {
            type: Date,
            required: true
        },
        installments: {
            type: [InstallmentSchema],
            default: []

        }

    },
    {
        timestamps: { createdAt: 'created_at' }
    }
);

export default model<BudgetInterfaceMongo>('Budget', schema);