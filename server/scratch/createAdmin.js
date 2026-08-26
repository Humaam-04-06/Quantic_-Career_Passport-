import mongoose from 'mongoose';
import 'dotenv/config';
import User from '../models/User.js';

async function createAdmins() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB Atlas');

    const adminAccounts = [
      {
        name: 'Super Administrator',
        email: 'admin@pathseeker.ai',
        password: 'Admin@12345',
        role: 'admin',
        isVerified: true,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'System Administrator',
        email: 'admin@pathseeker.com',
        password: 'Admin@12345',
        role: 'admin',
        isVerified: true,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Root Admin',
        email: 'admin@gmail.com',
        password: 'Admin@12345',
        role: 'admin',
        isVerified: true,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      },
    ];

    for (const acc of adminAccounts) {
      await User.deleteOne({ email: acc.email });
      // User.create will trigger userSchema.pre('save') which hashes password once properly!
      const created = await User.create(acc);
      console.log(`✅ Activated Admin: ${created.email} (Password: Admin@12345, Role: ${created.role})`);
    }

    console.log('\n🎉 ALL ADMIN ACCOUNTS CREATED & PROPERLY HASHED IN MONGODB ATLAS!');
    process.exit(0);
  } catch (err) {
    console.error('Error creating admin accounts:', err);
    process.exit(1);
  }
}

createAdmins();
