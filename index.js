import { connectDB } from "./db.js";
import { User } from "./user.model.js";

const run = async () => {
  await connectDB();

  // Create a user
  const newUser = await User.create({
    name: "Alice",
    email: "alice@example.com"
  });
  console.log("🧍 Created User:", newUser);

  // Fetch users
  const users = await User.find();
  console.log("📋 All Users:", users);

  process.exit(); // end process
};

run();
