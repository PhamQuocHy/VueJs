<template>
    <div class="service">
      <h2 class="service-title-all">DỊCH VỤ CỦA CHÚNG TÔI</h2>
      <div class="service-intro">
        <div v-for="(service, index) in services" :key="index" class="service-item">
          <div class="service-content" @mouseover="handleMouseOver(index)" @mouseout="handleMouseOut(index)">
            <div class="service-image" :style="{ backgroundImage: `url(${service.image})` }"></div>
            <h3 class="service-title">{{ service.title }}</h3>
            <!-- <p class="service-description" v-if="service.hovered">{{ service.hoverText }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesSection',
    data() {
      return {
        services: [
          {
            title: "Dịch vụ A",
            description: "Mô tả về dịch vụ A.",
            image: "https://amedigital.vn/wp-content/uploads/2023/03/nguyen-ly-thiet-ke-website-amedigita.png",
            hovered: false,
            hoverText: "Nội dung khi hover vào dịch vụ A"
          },
          {
            title: "Dịch vụ A",
            description: "Mô tả về dịch vụ A.",
            image: "https://amedigital.vn/wp-content/uploads/2023/03/nguyen-ly-thiet-ke-website-amedigita.png",
            hovered: false,
            hoverText: "Nội dung khi hover vào dịch vụ A"
          },
           {
            title: "Dịch vụ A",
            description: "Mô tả về dịch vụ A.",
            image: "https://amedigital.vn/wp-content/uploads/2023/03/nguyen-ly-thiet-ke-website-amedigita.png",
            hovered: false,
            hoverText: "Nội dung khi hover vào dịch vụ A"
          },
          {
            title: "Dịch vụ A",
            description: "Mô tả về dịch vụ A.",
            image: "https://amedigital.vn/wp-content/uploads/2023/03/nguyen-ly-thiet-ke-website-amedigita.png",
            hovered: false,
            hoverText: "Nội dung khi hover vào dịch vụ A"
          },
          {
            title: "Dịch vụ A",
            description: "Mô tả về dịch vụ A.",
            image: "https://amedigital.vn/wp-content/uploads/2023/03/nguyen-ly-thiet-ke-website-amedigita.png",
            hovered: false,
            hoverText: "Nội dung khi hover vào dịch vụ A"
          },
          {
            title: "Dịch vụ A",
            description: "Mô tả về dịch vụ A.",
            image: "https://amedigital.vn/wp-content/uploads/2023/03/nguyen-ly-thiet-ke-website-amedigita.png",
            hovered: false,
            hoverText: "Nội dung khi hover vào dịch vụ A"
          }
          // Thêm các dịch vụ khác vào đây
        ]
      };
    },
    methods: {
      handleMouseOver(index) {
        this.services[index].hovered = true;
      },
      handleMouseOut(index) {
        this.services[index].hovered = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .service {
    background-color: #f2f2f2;
    padding: 20px;
    padding-bottom: 60px;
    text-align: center;
  }
  
  .service-title-all {
    font-size: 40px;
    padding-top: 20px;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
    color: #1e78e7;
    margin-bottom: 20px;
  }
  
  .service-intro {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .service-item {
    width: 400px;
    padding: 0px;
    margin: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .service-content {
    position: relative;
    height: 100%;
    transition: all 0.3s ease;
  }
  
  .service-image {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
  }
  
  .service-content:hover {
    transform: scale(1.05);
  }
  
  .service-title {
    font-size: 18px;
    margin-bottom: 10px;
    color: #fff;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  
  .service-description {
    font-size: 14px;
    color: #fff;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  
  .service-content:hover .service-description {
    opacity: 1;
  }
  </style>