const feedback = require("../../../DB/models/Feedback.model");

const PostComment = async (req, res) => {
    try {
        const id  = req.params.id;
        const {comment, rating} = req.body;
        const newFeetback = await feedback.create({
            createdBy: id,
            comment,
            rating,
        });
        await feedback.findById(newFeetback._id).populate({path:"createdBy", select: "userName email"});
        res.status(200).json({ message: "feetback added successfully", data: req.body });
    } catch (err) {
        res.status(401).json({ message: "something went wrong", err: err.message });
    }
}

const GetComments =  async (req, res) => {
    try {
        const feedbacks = await feedback.find({}).populate({path:"createdBy", select: "userName email"});

        res.status(200).json({ message: "Success", feedbacks});
    } catch (err) {
        res.status(401).json({ message: "Something went wrong", error: err.message });
    }
}


module.exports = {PostComment, GetComments}