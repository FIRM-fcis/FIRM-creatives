import upload from "../utils/multer.js";
import cloudinary from "../utils/cloudinary.js";

export const uploadFile = (req, res) => {
    upload.single("file")(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Error"
            })
        }

        cloudinary.uploader.upload(req.file.path, function (err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Error"
                })
            }

            res.status(200).json({
                message: "Uploaded!",
                body: {
                    url: result.secure_url
                },
                status: 200
            })
        });
    })
};