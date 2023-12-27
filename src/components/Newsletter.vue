<template>
    <div class="newsletter-container">
      <h2 class="newsletter-title">BÀI VIẾT MỚI NHẤT</h2>
 
      <ul class="newsletter-list">
        <li v-for="post in posts" :key="post.id" class="newsletter-item">
          <div class="newsletter-item-content">
            <img :src="post.image" alt="Post Image" class="newsletter-item-image" />
            <div class="content-newssletter">
            <h3 class="newsletter-item-title">{{ post.title }}</h3>
            <p class="newsletter-item-description">{{ post.description }}</p>
            <a :href="post.link" class="newsletter-item-link">Xem thêm</a>
        </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewsletterSection',
    data() {
      return {
        posts: [
          {
            id: 1,
            title: '4 nguyên lý thiết kế Website mà Marketer nào cũng nên biết',
            description: 'Trong thời đại công nghệ phát triển như vũ bão, việc thiết kế website hoàn hảo không chỉ là điều tất yếu mà còn là bộ nhận diện cho thương hiệu...',
            link: 'https://example.com/post1',
            image: 'https://amedigital.vn/wp-content/uploads/2023/03/nguyen-ly-thiet-ke-website-amedigita.png'
          },
          {
            id: 2,
            title: 'Công ty thiết kế Logo chuyên nghiệp tại Cần Thơ',
            description: 'Việc có một logo chuyên nghiệp sẽ giúp cho doanh nghiệp của bạn trở nên nổi bật và có thể nhận diện dễ dàng với...',
            link: 'https://example.com/post2',
            image: 'https://amedigital.vn/wp-content/uploads/2023/03/cong-ty-thiet-ke-logo-chuyen-nghiep-amedigital.png'
          },
          {
            id: 3,
            title: '7 cách giữ chân khách hàng ở lại Website lâu hơn',
            description: 'Bạn có biết rằng khách hàng của bạn đang dành thời gian trên website của bạn bao lâu không? Để duy trì kinh doanh và...',
            link: 'https://example.com/post3',
            image: 'https://amedigital.vn/wp-content/uploads/2023/03/cach-giu-chan-khach-hang-o-lai-website-amedigital.png'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .newsletter-container {
    margin: 0 auto;
    padding-left: 100px;
  }
  
  .newsletter-title {
    font-size: 40px;
    padding-top: 20px;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
    margin-left: -5%;
    color: #1e78e7;

  }
  
  .newsletter-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
  
  .newsletter-item {
    width: 30%;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  
  .newsletter-item:last-child {
    margin-right: 0;
  }
  
  .newsletter-item-content {
    background-color: #f9f9f9;
    padding: 0px;
    border-radius: 10px;
  }
  
  .newsletter-item-image {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0px 0px;
  }
  .content-newssletter{
    padding: 10px 20px 30px 20px;
  }
  
  .newsletter-item-title {
    font-size: 18px;
    margin-bottom: 10px;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 700;
    
  }
  
  .newsletter-item-description {
    font-size: 14px;
    margin-bottom: 10px;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  }
  
  .newsletter-item-link {
    font-size: 14px;
    text-decoration: none;
    color: #1e78e7;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  }
  </style>