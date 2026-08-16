import { Schema, model, models, type Model } from 'mongoose';

export interface Workout {
  title: string;
  category: string;
  durationMinutes: number;
  intensity: 'low' | 'moderate' | 'high';
  targetMuscles: string[];
  instructions: string;
}

const workoutSchema = new Schema<Workout>(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    intensity: { type: String, enum: ['low', 'moderate', 'high'], required: true },
    targetMuscles: [{ type: String, required: true }],
    instructions: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const WorkoutModel =
  (models.Workout as Model<Workout>) || model<Workout>('Workout', workoutSchema);