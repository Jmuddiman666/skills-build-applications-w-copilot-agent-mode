import { Schema, model, models, type Model, type Types } from 'mongoose';

export interface Activity {
  user: Types.ObjectId;
  team: Types.ObjectId;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  activityDate: Date;
}

const activitySchema = new Schema<Activity>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    activityDate: { type: Date, required: true },
  },
  { timestamps: true },
);

export const ActivityModel =
  (models.Activity as Model<Activity>) || model<Activity>('Activity', activitySchema);