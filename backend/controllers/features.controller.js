const express = require('express');
const router = express.Router();
// const db = require('../node_modules/db'); 

// Lấy all features
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM features';

  db.query(sql, (err, results) => {
    if (err) throw err;  

    res.json(results);
  });
});


// Lấy chi tiết 1 feature
router.get('/:id', (req, res) => {
  let sql = 'SELECT * FROM features WHERE id = ?';
  
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;

    res.json(result[0]);
  });
});


module.exports = router;