<template>
    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src="../images/mylogo02.png" alt="Logo" width="50%" />
          <h4>QUOC HY DEVELOPER</h4>
        </div>
        <div class="footer-sections">
          <div class="footer-section flolow">
            <h4>Theo dõi chúng tôi</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          <div class="footer-section contact">
            <h4>Thông tin liên hệ</h4>
            <ul>
              <li>Email: example@example.com</li>
              <li>Điện thoại: 123456789</li>
              <li>Địa chỉ: 123 đường ABC, Quận XYZ, TP. ABC</li>
            </ul>
          </div>
          <div class="footer-section chinhsach">
            <h4>Chính sách</h4>
            <ul>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <hr>
        <p>&copy; 2023 Quoc Hy Developer. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  </template>
  <script>
  export default {
    name: 'FooterSection',
    // Các options và logic khác của component
  }
  </script>
  
  <style scoped>

  
  footer {
    background-color: #1e78e7;
    color: #fff;
    padding: 10px;
  }
  
  .footer-container {
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-start;
    flex-wrap: wrap;
  }
  
  .footer-logo img {
    max-width: 100%;
    margin-top: 40px;
    padding-left: 100px;
    width: 30%;
  }
  .footer-logo{
    flex-basis: 30.33%;
  }
  .footer-logo h4{
    padding-left: 80px;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;

  }
  
  .footer-sections {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  
  .footer-section {
    flex-basis: 25%;
    margin-bottom: 20px;
  }
  
  .footer-section h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .footer-section ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 5px;
  }
  
  .footer-section ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer-bottom {
    margin-top: 20px;
    text-align: center;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;

  }
  
  .footer-bottom p {
    margin: 0;
  }
  .flolow{
    margin-left: -50px;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    padding-right: 50px;
  }
  .contact{
    margin-left: 50px;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    padding-right: 50px;
  }
  .chinhsach{
    margin-left: 50px;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    padding-right: 50px;
  }
  </style>