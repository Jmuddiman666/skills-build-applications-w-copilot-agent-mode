import mongoose from 'mongoose';
import {
  ActivityModel,
  LeaderboardEntryModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      ActivityModel.deleteMany({}),
      LeaderboardEntryModel.deleteMany({}),
      UserModel.deleteMany({}),
      TeamModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    const teams = await TeamModel.insertMany([
      {
        name: 'Core Crushers',
        mascot: 'Atlas',
        description: 'A strength-focused team that logs steady lifting and mobility work.',
        memberCount: 3,
      },
      {
        name: 'Cardio Climbers',
        mascot: 'Summit',
        description: 'Endurance athletes chasing longer runs, rides, and weekly streaks.',
        memberCount: 2,
      },
      {
        name: 'Flex Force',
        mascot: 'Orbit',
        description: 'A balanced group focused on flexibility, recovery, and consistency.',
        memberCount: 2,
      },
    ]);

    const users = await UserModel.insertMany([
      {
        username: 'alex-rivera',
        email: 'alex.rivera@example.com',
        displayName: 'Alex Rivera',
        team: teams[0]._id,
        fitnessLevel: 'advanced',
        goals: ['Increase squat strength', 'Improve shoulder mobility'],
      },
      {
        username: 'maya-patel',
        email: 'maya.patel@example.com',
        displayName: 'Maya Patel',
        team: teams[1]._id,
        fitnessLevel: 'intermediate',
        goals: ['Run a 10K', 'Build aerobic base'],
      },
      {
        username: 'jordan-kim',
        email: 'jordan.kim@example.com',
        displayName: 'Jordan Kim',
        team: teams[2]._id,
        fitnessLevel: 'beginner',
        goals: ['Create a workout habit', 'Improve flexibility'],
      },
      {
        username: 'taylor-nguyen',
        email: 'taylor.nguyen@example.com',
        displayName: 'Taylor Nguyen',
        team: teams[0]._id,
        fitnessLevel: 'intermediate',
        goals: ['Train four days per week', 'Improve core strength'],
      },
      {
        username: 'sam-morgan',
        email: 'sam.morgan@example.com',
        displayName: 'Sam Morgan',
        team: teams[1]._id,
        fitnessLevel: 'advanced',
        goals: ['Cycle 100 miles weekly', 'Improve recovery'],
      },
    ]);

    await ActivityModel.insertMany([
      {
        user: users[0]._id,
        team: teams[0]._id,
        type: 'Strength training',
        durationMinutes: 55,
        caloriesBurned: 420,
        activityDate: new Date('2026-08-10T13:30:00Z'),
      },
      {
        user: users[1]._id,
        team: teams[1]._id,
        type: 'Outdoor run',
        durationMinutes: 42,
        caloriesBurned: 380,
        activityDate: new Date('2026-08-11T11:00:00Z'),
      },
      {
        user: users[2]._id,
        team: teams[2]._id,
        type: 'Yoga flow',
        durationMinutes: 35,
        caloriesBurned: 160,
        activityDate: new Date('2026-08-12T22:15:00Z'),
      },
      {
        user: users[3]._id,
        team: teams[0]._id,
        type: 'Core circuit',
        durationMinutes: 30,
        caloriesBurned: 250,
        activityDate: new Date('2026-08-13T12:45:00Z'),
      },
      {
        user: users[4]._id,
        team: teams[1]._id,
        type: 'Cycling intervals',
        durationMinutes: 70,
        caloriesBurned: 680,
        activityDate: new Date('2026-08-14T10:30:00Z'),
      },
    ]);

    await LeaderboardEntryModel.insertMany([
      {
        user: users[4]._id,
        team: teams[1]._id,
        rank: 1,
        points: 1480,
        workoutsCompleted: 18,
        activityMinutes: 640,
      },
      {
        user: users[0]._id,
        team: teams[0]._id,
        rank: 2,
        points: 1325,
        workoutsCompleted: 16,
        activityMinutes: 590,
      },
      {
        user: users[3]._id,
        team: teams[0]._id,
        rank: 3,
        points: 1190,
        workoutsCompleted: 14,
        activityMinutes: 510,
      },
      {
        user: users[1]._id,
        team: teams[1]._id,
        rank: 4,
        points: 1040,
        workoutsCompleted: 12,
        activityMinutes: 455,
      },
      {
        user: users[2]._id,
        team: teams[2]._id,
        rank: 5,
        points: 760,
        workoutsCompleted: 9,
        activityMinutes: 320,
      },
    ]);

    await WorkoutModel.insertMany([
      {
        title: 'Full Body Strength Builder',
        category: 'Strength',
        durationMinutes: 45,
        intensity: 'high',
        targetMuscles: ['legs', 'back', 'chest', 'core'],
        instructions: 'Complete compound lifts in supersets with two minutes of rest between rounds.',
      },
      {
        title: 'Beginner Mobility Reset',
        category: 'Mobility',
        durationMinutes: 25,
        intensity: 'low',
        targetMuscles: ['hips', 'hamstrings', 'shoulders'],
        instructions: 'Move through each stretch slowly and hold comfortable end ranges for 30 seconds.',
      },
      {
        title: 'Tempo Run Builder',
        category: 'Cardio',
        durationMinutes: 40,
        intensity: 'moderate',
        targetMuscles: ['legs', 'core'],
        instructions: 'Warm up for 10 minutes, run 20 minutes at tempo pace, then cool down easily.',
      },
      {
        title: 'Core Stability Circuit',
        category: 'Core',
        durationMinutes: 30,
        intensity: 'moderate',
        targetMuscles: ['abs', 'obliques', 'lower back'],
        instructions: 'Cycle through planks, dead bugs, side planks, and carries for four steady rounds.',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
