<template>
    <div class="contact-section">
      <div class="contact-image">
        <img src="../images/contact.png" alt="Introduction Image" />
      </div>
      <div class="contact-form">
        <h2 class="contact-title">Liên hệ</h2>
        <p class="contact-decr">Vui lòng để lại thông tin chúng tôi sẽ liên hệ đến bạn ngay</p>
        <form>
          <div class="form-group">
            <input type="text" placeholder="Họ và Tên" id="name" name="name" required />
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="form-column">
                <input type="tel" placeholder="Số điện thoại" id="phone" name="phone" required />
              </div>
              <div class="form-column2">
                <input type="email" placeholder="Email" id="email" name="email" required />
              </div>
            </div>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Địa chỉ" id="address" name="address" required />
          </div>
          <div class="form-group">
            <textarea id="message" name="message" placeholder="Nội dung liên hệ" required></textarea>
          </div>
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'ContactFormSection',
  };
  </script>
  
  <style scoped>
  .contact-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    padding-left: 150px;
    padding-right: 150px;
    padding-bottom: 60px;
  }
  .contact-decr{
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;

  }
  
  
  .contact-image {
    flex: 1;
    margin-right: 20px;
  }
  
  .contact-image img {
    width: 90%;
    height: auto;
    margin-bottom: -15%;
    z-index: 0;
  }
  
  .contact-form {
    flex: 1;
  }
  
  .contact-title {
    font-size: 24px;
    margin-bottom: 20px;
    
    color: #1e78e7;
  font-size: 35px;   
  text-transform: uppercase;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  .form-row {
    display: flex;
    justify-content: space-between;
  }
  
  .form-column {
    flex: 1;
    margin-right: 30px;
  }
  .form-column2 {
    flex: 1;
    margin-right: 12px;
  }
  
  input {
    width: 96%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  textarea{
    width: 96%;
    padding: 10px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>