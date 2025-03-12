const AuthRoutes = require("../Modules/Auth/Auth.routes");

const ApplicationRoutes = require("../Modules/Application/Application.routes");

const FeedbackRoutes = require("../Modules/Feedback/Feedback.routes");

const JobPostRoutes = require("../Modules/JobPost/JobPost.routes");

const searchRoute = require("../Modules/search/search.routes")

module.exports= {
    AuthRoutes,
    ApplicationRoutes,
    FeedbackRoutes,
    JobPostRoutes,
    searchRoute
} 