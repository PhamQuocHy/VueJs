<template>
    <div class="hero">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../images/banner02.png" alt="Banner 2" />
          </div>
          <div class="swiper-slide">
            <img src="../images/banner03.png" alt="Banner 3" />
          </div>
        </div>
        <div class="swiper-pagination"></div> <!-- Thêm phần tử pagination -->
      </div>
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper';
  import 'swiper/swiper-bundle.css'; // Import CSS stylesheet
  
  export default {
    name: 'HeroSection',
    mounted() {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000, // Thời gian chuyển slide (đơn vị: ms)
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }
  }
  </script>
  
  <style>
  .hero {
  text-align: center;
  width: 100%;
}

.swiper-container {
  height: 550px; /* Adjust the desired height here */
  width: 100%; /* Add this line */
  overflow: hidden;
}

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>