const {body, validationResult} = require('express-validator');

const studentValidation = [
    body("name").notEmpty().withMessage("Name is required!"),

    body("id")
        .notEmpty().withMessage("Student ID is required")
        .isLength({min:10})
        .withMessage("ID must be atleast of 10 characters"),


    
    body('course').notEmpty().withMessage("COURSE is required!"),

    body('email').isEmail().withMessage("Student Email is required!"),

];


const validate = (req,res,next)=>{
    const errors = validationResult(req);


    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array(),

        });
    }
    // imp to prevent hangout in browser
    next();

};


module.exports = {
    studentValidation,
    validate
};






