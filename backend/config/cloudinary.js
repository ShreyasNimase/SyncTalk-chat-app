const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.api.ping((err, res) => {
  if (err) {
    console.error("Cloudinary Config Error:", err.message);
  } else {
    console.log("Cloudinary Connected:", res.status);
  }
});

module.exports = cloudinary;
