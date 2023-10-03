const express = require('express');
const connectDB = require('./db/dbconnect'); 
const User = require('./db/user');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const PORT = 5000;

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello");
});

// Registration
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ register: 'Registration is successful' });
    } catch (err) {
        res.status(500).json({ error: `Error during registration: ${err}` });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid Username or Password' });
        }
        
        // Compare the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Password does not match' });
        }
        
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        res.status(401).json({ error: 'Login failed' });
    }
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening on port ${PORT}`);
});
