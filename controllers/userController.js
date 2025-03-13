const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

//@desc Register a User
//@route POST api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All three should be filled");
    }

    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error("User already register");
    }

    // Hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: " + hashedPassword);
    
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    
    console.log(`user created ${user}`)
    
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400);
        throw new Error("User data isn't valied")
    }
    // res.json({message: "Register the user"})
});

//@desc Login a User
//@route POST api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error({message: "Both Email and Password are mandatory!"});
    }

    const user = await User.findOne({email});
    // compare password with hashed password!
    if(user && (await bcrypt.compare(password, user.password))){ // Fixed: Added await and parentheses
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "59m"}
        )
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw new Error("email or password is not valid")
    }
});

//@desc Current User info
//@route GET api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
});

module.exports = {registerUser, loginUser, currentUser}