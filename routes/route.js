import express from "express";

// import controllers :

import { saveJobdata, getJobData } from "../controller/job-controller.js";

const router = express.Router();

router.post("/save", saveJobdata);
router.get("/get", getJobData);

export default router;
