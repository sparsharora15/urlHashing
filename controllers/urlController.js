const crypto = require("crypto");
const Url = require("../models/urlModel");

exports.redirectToOriginalRoute = async (req, res) => {
    try {
      const hash = req.params.hash;
      const url = await Url.findOne({ hash });
  
      if (url) {
        res.redirect(url.longUrl);
      } else {

        res.status(404).send('Not Found');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  
exports.getHomePage = (req, res) => {

  const data = generateData();
    const hashedUrl = generateHash(data);

  res.render("index", { hashedUrl });
};

exports.generateHash = async (req, res) => {
  try {
    const longUrl = req.body.longUrl;
    const hash = generateHash(longUrl);

    const url = new Url({ longUrl, hash });
    await url.save();

    res.render("index", { hashedUrl: hash }); 
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

function generateData() {
  
  return ""
}

function generateHash(data) {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
}
