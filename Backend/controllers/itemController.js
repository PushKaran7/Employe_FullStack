const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModel");
const { v4: uuidv4 } = require("uuid");


const getAllItems = asyncHandler(async (req, res) => {
    const employee = await Employee.find();
    res.json(employee);
});

const createItem = asyncHandler(async (req, res) => {
    console.log(req.body);

    const uniqueId = uuidv4();
    const { firstName, email, lastName,dob, gender, education, company, experience, package  } = req.body;

    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
        return res.status(400).json({ message: "Email already exists." });
    }
    const employee = await Employee.create({
        emp_id:uniqueId,
        firstName,
        lastName,
        email,
        dob,
        gender,
        education,
        company,
        experience,
        package

    });
    res.json(employee);
});


const updateEmp=asyncHandler(async (req,res)=>{
    const employee=await Employee.findOne({ emp_id: req.params.emp_id });
    if(!employee)
    {
        res.status(400);
        throw new Error("Employee not found");

    }
    const updateval = await Employee.findOneAndUpdate(
        { emp_id: req.params.emp_id },
        req.body,
        { new: true }
    );
    res.status(200).json(updateval);

});

const deleteEmp=asyncHandler(async(req,res)=>{
    const employee=await Employee.findOneAndDelete({ emp_id: req.params.emp_id });
    if (!employee) {
        res.status(404);
        throw new Error("Employee not found");
    }
    res.status(200).json({ message: 'Employee deleted successfully', employee});
})





module.exports = { getAllItems, createItem,updateEmp,deleteEmp};