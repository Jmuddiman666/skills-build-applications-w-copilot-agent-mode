import { Schema, model, models, type Model } from 'mongoose';

export interface Team {
  name: string;
  mascot: string;
  description: string;
  memberCount: number;
}

const teamSchema = new Schema<Team>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    mascot: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    memberCount: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export const TeamModel = (models.Team as Model<Team>) || model<Team>('Team', teamSchema);