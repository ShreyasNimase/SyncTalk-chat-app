const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const upload = require("../middleware/upload");
const multer = require("multer");

const router = express.Router();

// router.post("/signup", upload.single("profileImage"), registerUser);
router.post("/login", authUser);

router.post(
  "/signup",
  (req, res, next) => {
    upload.single("profileImage")(req, res, function (err) {
      
        // Multer errors (file too large, missing file, etc.)
      if (err instanceof multer.MulterError) {
        console.error("Multer Error:", err);
        return res.status(400).json({ success: false, message: err.message });
      }

      // Cloudinary-specific errors or fileFilter errors
      if (err) {
        console.error("Cloudinary Upload Error:", err);
        return res.status(400).json({ success: false, message: err.message });
      }

      next();
    });
  },
  registerUser
);
module.exports = router;
