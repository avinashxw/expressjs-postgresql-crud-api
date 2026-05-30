import joi from 'joi';

// validation schema for user input

const userSchema = joi.object({
    name: joi.string().min(3).max(255).required(),
    email: joi.string().email().required()
});

const validateUserInput = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if(error) {
        return res.status(400).json({
            status: 400,
            message: "Invalid user input",
            error: error.details[0].message
        })
    }
    next();
};

export default validateUserInput;