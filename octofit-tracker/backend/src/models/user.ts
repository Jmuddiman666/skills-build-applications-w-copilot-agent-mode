import { Schema, model, models, type Model, type Types } from 'mongoose';

export interface User {
  username: string;
  email: string;
  displayName: string;
  team: Types.ObjectId;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
}

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    fitnessLevel: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
    goals: [{ type: String, required: true }],
  },
  { timestamps: true },
);

export const UserModel = (models.User as Model<User>) || model<User>('User', userSchema);