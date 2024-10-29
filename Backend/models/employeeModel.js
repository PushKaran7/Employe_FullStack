const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    emp_id: {
        type: String, 
        
    },
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        


    },
    dob: {
        type: Date,

    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    education: {
        type: String,
       
    },
    company: {
        type: String,
    },
    experience: {
        type: Number,
        min: 0,
    },
    package: {
        type: Number,
        min: 0,
    },
},
    {
        timestamps: true,
    }
);

const Employee = mongoose.model("items", employeeSchema);
module.exports = Employee;
