import Job from "../model/job.js";

export const saveJobdata = async (req, res) => {
  try {
    const data = req.body;
    const newJob = new Job(data);
    let res = await newJob.save();
    console.log(res);
  } catch (error) {
    console.error(
      "error while calling  ---- /save ----- from ------ saveJobData controller",
      error.message
    );
  }
};

export const getJobData = async (req, res) => {
  try {
    // console.log("done");
    let jobData = await Job.find({});
    // console.log(jobData);
    return res.json(jobData);
  } catch (error) {
    console.error(
      "error while calling  ---- /save ----- from ------ saveJobData controller",
      error.message
    );
  }
};
