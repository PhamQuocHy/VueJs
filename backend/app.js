const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

// Cấu hình kết nối MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Địa chỉ host của MySQL
  user: 'root', // Tên người dùng MySQL
  password: '', // Mật khẩu MySQL
  database: 'cms_db' // Tên cơ sở dữ liệu MySQL
});

// Kết nối tới cơ sở dữ liệu MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.use(cors());

// Lấy all features
app.get('/api/features', (req, res) => {
  let sql = 'SELECT * FROM features';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving features:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json(results);
  });
});

// Lấy chi tiết 1 feature
app.get('/api/features/:id', (req, res) => {
  let sql = 'SELECT * FROM features WHERE id = ?';

  connection.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error('Error retrieving feature:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({ error: 'Feature not found' });
      return;
    }

    res.json(result[0]);
  });
});

// Khi có kết nối mới từ client
io.on('connection', (socket) => {
  console.log('New client connected');

  // Lắng nghe sự kiện chỉnh sửa feature
  socket.on('editFeature', (data) => {
    // Thực hiện logic chỉnh sửa feature trong cơ sở dữ liệu

    // Gửi thông báo cập nhật cho tất cả các client khác
    socket.broadcast.emit('featureUpdated', data);
  });

  // Lắng nghe sự kiện cập nhật feature
  socket.on('updateFeature', (data) => {
    // Thực hiện logic cập nhật feature trong cơ sở dữ liệu

    // Gửi thông báo cập nhật cho tất cả các client khác
    socket.broadcast.emit('featureUpdated', data);
  });

  // Khi client ngắt kết nối
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3002, () => {
  console.log('Server is running on port 3001');
});