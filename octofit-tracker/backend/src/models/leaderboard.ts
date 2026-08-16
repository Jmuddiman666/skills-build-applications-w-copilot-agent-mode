import { Schema, model, models, type Model, type Types } from 'mongoose';

export interface LeaderboardEntry {
  user: Types.ObjectId;
  team: Types.ObjectId;
  rank: number;
  points: number;
  workoutsCompleted: number;
  activityMinutes: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntry>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    rank: { type: Number, required: true, min: 1 },
    points: { type: Number, required: true, min: 0 },
    workoutsCompleted: { type: Number, required: true, min: 0 },
    activityMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export const LeaderboardEntryModel =
  (models.LeaderboardEntry as Model<LeaderboardEntry>) ||
  model<LeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);