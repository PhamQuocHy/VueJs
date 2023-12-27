<template>
    <div class="testimonials">
      <h2 class="testimonials-title">Khách hàng nói về chúng tôi</h2>
      <div class="testimonial-container">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial">
         
          <div class="testimonial-content">
            <div class="testimonial-text">
              <p>{{ testimonial.quote }}</p>
            </div>
            <div class="testimonial-image">
            <img :src="testimonial.image" :alt="testimonial.name" />
          </div>
            <div class="testimonial-author">
              <h3>{{ testimonial.name }}</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsSection',
    data() {
      return {
        testimonials: [
          {
            quote: "Lorem ipsum dolor sit amet. Aliquam ut lorem vitae mi tincidunt mollis. Mauris in sodales purus, vitae facilisis leo.",
            name: "John Doe",
            company: "ABC Company",
            image: "https://png.pngtree.com/thumb_back/fw800/background/20230423/pngtree-smiling-asian-man-in-an-urban-setting-image_2495166.jpg"
          },
          {
            quote: "Nullam scelerisque risus justo, non cursus lorem blandit eget. Morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            name: "Jane Smith",
            company: "XYZ Corporation",
            image: "https://png.pngtree.com/thumb_back/fw800/background/20230423/pngtree-smiling-asian-man-in-an-urban-setting-image_2495166.jpg"
          },
          {
            quote: "Fusce euismod, lorem non blandit aliquet mauris sit amet tortor. Praesent vitae mauris eleifend, suscipit ex eu, efficitur metus.",
            name: "David Johnson",
            company: "123 Industries",
            image: "https://png.pngtree.com/thumb_back/fw800/background/20230423/pngtree-smiling-asian-man-in-an-urban-setting-image_2495166.jpg"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .testimonials {
    background-color: #f9f9f9;
    padding: 20px;
    padding-bottom: 60px;
    text-align: center;
  }
  
  .testimonials-title {
    font-size: 40px;
    padding-top: 0px;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
    color: #1e78e7;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  
  .testimonial-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  
  .testimonial {
    width: 350px;
    margin: 10px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(225, 225, 225, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .testimonial-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 5px;
  }
  
  .testimonial-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .testimonial-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
  }
  
  .testimonial-text {
    margin-bottom: 10px;
    text-align: justify;
  }
  
  .testimonial-author h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  .testimonial-author p {
    font-size: 14px;
    color: #999;
  }
  </style>