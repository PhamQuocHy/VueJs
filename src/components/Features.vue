<template>
  <div class="feature-container">
    <div class="feature-left">
      <div class="feature-content">
        <h2 class="feature-title">{{ feature.title }}</h2>
        <p class="feature-content2">{{ feature.content }}</p>
        <p><a class="see-more" href="#">{{ feature.link }}</a></p>
      </div>
    </div>
    <div class="feature-right">
      <img src="../images/feature01.png" alt="Hình ảnh" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FeaturesSection',
  data() {
    return {
      feature: {
        title: '',
        content: '',
        link: '',
        image_url: ''
      }
    };
  },
  mounted() {
    axios.get('http://localhost:3002/api/features')
      .then(response => {
        const data = response.data;
        if (Array.isArray(data) && data.length > 0) {
          this.feature = data[0];
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
</script>

<style scoped>
/* CSS cho phần mở rộng "FeaturesSection" */
.feature-container {
  display: flex;
  flex-wrap: wrap;
  padding-right: 20px;
  padding-top: 50px;
}

.feature-content2 {
  white-space: pre-wrap;
  text-align: justify;
  padding: 0 100px;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

.see-more {
  text-decoration: none;
  padding: 0 100px;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1e78e7;
}

.feature-title {
  color: #1e78e7;
  padding: 0 100px;
  font-size: 35px;
  padding-top: 50px;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
}

.feature-left {
  margin-top: 0px;
  flex: 1 1 100%; /* Chiếm 100% trong trường hợp màn hình nhỏ */
}
.feature-right {
    flex: 0 0 30%; /* Chiếm 50% */
  }
  

@media (min-width: 768px) {
  /* Responsive: Khi màn hình rộng hơn 768px */
  .feature-left {
    flex: 0 0 60%; /* Chiếm 50% */
  }
  .feature-right img {
    width: 100%;
    padding-top: 50px;
    float: left;
  }
  
}
</style>