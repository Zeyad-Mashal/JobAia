
const Application = require("../../../DB/models/Application.model");


const ViewApplication =  async (req, res) => {
    try {
        const applications = await Application.find();

        res.status(200).json( applications );
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err.message });
    }
}

const CreateApplication = async (req, res) => {
    try{
        const application = req.body;
        application.CV = {
            data: req.file.buffer,
            contentType: req.file.mimetype,
        };
        const newApplication = await Application.create(application);

        res.status(201).json(newApplication);
        if(!req.file){
            return res.status(201).send("file not uploaded");
        }res.status(201).json({massage: "file uploaded successfully" , fileName: req.file.filename , path: req.file.path, size: req.file.size});

    }catch(err){
        res.status(401).json({ message: "something went wrong", err: err.message });
    }
}



module.exports = {
    ViewApplication,
    CreateApplication
}


