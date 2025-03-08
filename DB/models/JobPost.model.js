const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  CompanyName: {
    type: String,
    required: true,
  },
  jobTitle : {
    type: String,
    required: true,
  },
  jobType: {
    type: [String],
    required: true
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  jobRequirements: {
    type: String,
    required: true,
  },
  requiredSkills: {
    type: [String],
    required: true,
  },
  Document: {
    data: Buffer,
    contentType: String,
  },
});


const JobPost = mongoose.model("JobPost", ApplicationSchema);

module.exports = JobPost;
