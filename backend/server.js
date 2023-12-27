const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // Thêm middleware cors vào ứng dụng Express

app.get('/api/settings', (req, res) => {
  const settings = {
    textColor: '#1e78e7'
  };

  res.json(settings);
});

app.put('/api/settings', (req, res) => {
  const newTextColor = req.body.textColor;

  const updatedSettings = {
    textColor: newTextColor
  };

  res.json(updatedSettings);
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});