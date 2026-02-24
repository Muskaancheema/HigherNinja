import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { adminGetAllJobs, getAllJobs, getJobById, postJobs } from "../controllers/jobs.controller.js";



const router = express.Router();
 
router.route("/post").post(isAuthenticated, postJobs);
router.route("/getall").get(isAuthenticated, getAllJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/adminjobs").get(isAuthenticated, adminGetAllJobs);

export default router;
