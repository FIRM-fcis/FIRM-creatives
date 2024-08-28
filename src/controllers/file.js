import upload from "../utils/multer.js";
import cloudinary from "../utils/cloudinary.js";

export const uploadFile = (req, res) => {
    upload.single("file")(req, res, (err) => {
        if (err) {
            console.log(err.message);
            return res.status(400).json({
                success: false,
                message: err.message  // Return the specific error message
            });
        }

        // Proceed with Cloudinary upload only if there's no error
        cloudinary.uploader.upload(req.file.path, { resource_type: "auto" }, function (err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Cloudinary upload error"
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
