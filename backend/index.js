const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Rootdagi "pages" papkasini ulaymiz
app.use(express.static(path.join(__dirname, "../pages")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlayapti`);
});

