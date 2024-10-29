const express=require("express");
const { getAllItems, createItem, updateEmp, deleteEmp } = require("../controllers/itemController");
const router=express.Router();

router.route("/").get(getAllItems);

router.route("/").post(createItem);

router.route("/:emp_id").put(updateEmp);



router.route("/:emp_id").delete(deleteEmp);

module.exports=router;