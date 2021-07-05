import { Schema, model, Document } from 'mongoose';

export interface UserInterface extends Document {
  name: String;
  email: String;
  password: string;
}

const schema = new Schema(
  {    
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

export default model<UserInterface>('User', schema);
