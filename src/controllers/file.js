import upload from "../utils/multer.js";
import cloudinary from "../utils/cloudinary.js";

export const uploadFile = (req, res, next) => {
    upload.single("file")(req, res, (err) => {
        if (err) {
            console.log(err.message);
            return res.status(400).json({
                message: err.message,
                body: null,
                status: 400
            });
        }

        // Proceed with Cloudinary upload only if there's no error
        cloudinary.uploader.upload(req.file.path, { resource_type: "auto" }, function (err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Upload failed!",
                    body: null,
                    status: 500
                });
            }

            res.status(200).json({
                message: "Uploaded!",
                body: {
                    url: result.secure_url
                },
                status: 200
            });
        });
    });
};
