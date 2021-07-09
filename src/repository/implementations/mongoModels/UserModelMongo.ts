import { Schema, model, Document } from 'mongoose';

export interface MongoUserInterface extends Document {
  identityId: string,
  name: string;
  email: string;
  password: string;
}

const schema = new Schema(
  {    
    identityId: {
      type: String,
      required: true
    },
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true,
      unique: true,
      lowercase: true      
    },
    password: { 
      type: String,
      required: true,
      select: false
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

export default model<MongoUserInterface>('User', schema);
