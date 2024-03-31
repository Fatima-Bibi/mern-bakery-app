const User = require('../models/user-models/usermodel');

const signup = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;

    // Check if user with given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' }); // Add return here
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { signup };
