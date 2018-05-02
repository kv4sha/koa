import { Document, model, Schema } from 'mongoose';

interface IUser extends Document {
    name: string;
}

const UserSchema = new Schema({
    name: String
});

export const User = model<IUser>('User', UserSchema);
