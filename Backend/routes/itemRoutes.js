const express=require("express");
const { getAllItems, createItem, updateEmp, deleteEmp } = require("../controllers/itemController");
const validateToken = require("../middleware/validateTokenHandler");
const router=express.Router();


//all routes are private here cause i have used middleware validateToken
router.use(validateToken);
router.route("/").get(getAllItems);

router.route("/").post(createItem);

router.route("/:emp_id").put(updateEmp);



router.route("/:emp_id").delete(deleteEmp);

module.exports=router;