  <template>
    <div>
      <header :style="{ backgroundColor: newTextColor }" ref="targetElement">
        <div class="logo">
          <img src="../images/mylogo02.png" alt="Logo" width="50%" />
        </div>

        <nav>
          <ul class="menu">
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Dịch vụ</a></li>
            <li><a href="#">Lĩnh vực</a></li>
            <li><a href="#">Đánh giá</a></li>
            <li><a href="#">Bài viết</a></li>
            <li><a href="#">Liên hệ</a></li>
            <router-link to="/cms">Go to CMS</router-link>
            
          </ul>
        </nav>

        <div class="contact-button">
          <button class="btn-contact"> <a href="tel:0368503413">Tư vấn ngay</a></button>
        </div>
      </header>

      <Hero title="Welcome" />
      <Features :list="[{name: 'Feature 1'}]" />
      <Services/>
      <Newsletter/>
      <Testimonials/>
      <!-- <div>
        <input type="text" v-model="textColorInput" placeholder="Enter new text color" />
        <button @click="updateTextColor">Update Text Color</button>
      </div> -->
      <Contact/>

      
      <Footer/>
    </div>
  </template>

  <script>
  import Hero from '../components/Hero.vue';
  import Features from '../components/Features.vue';
  import Services from '../components/Services.vue';
  import Newsletter from '../components/Newsletter.vue';
  import Testimonials from '../components/Testimonials.vue';
  import Contact from '../components/Contact.vue';
  import Footer from './footer.vue';
  


  export default {
    name: 'HomepageSection',

    components: {
      Hero,
      Features,
      Services,
      Newsletter,
      Testimonials,
      Contact,
      Footer,
    },

    data() {
      return {
        newTextColor: '',
        textColorInput: '',
      };
    },

    methods: {
      updateTextColor() {
        fetch('http://localhost:3000/api/settings', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ textColor: this.textColorInput }),
        })
          .then(response => response.json())
          .then(updatedSettings => {
            const targetElement = this.$refs.targetElement;
            targetElement.style.color = updatedSettings.textColor;

            this.newTextColor = updatedSettings.textColor;
            this.textColorInput = '';
          })
          .catch(error => {
            console.error('Error:', error);
          });
      },
    },

    mounted() {
      fetch('http://localhost:3000/api/settings')
        .then(response => response.json())
        .then(settings => {
          const targetElement = this.$refs.targetElement;
          targetElement.style.color = settings.textColor;
          this.newTextColor = settings.textColor;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
  };
  </script>

  <style>
  /* Styles cho header và menu */
  body{
    margin: 0px !important;
  }

  header {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    padding: 10px 100px 10px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #1e78e7;
  }

  .logo img {
    max-width: 100px;
  }

  .menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .menu li {
    margin: 0px 30px 0px 30px;
    font-size: 18px;
  }
  .btn-contact a{
    text-decoration: none;
    color: #003786;
  }
  .menu li a {
    text-decoration: none;
    color: #fff;
  }

  .contact-button .btn-contact {
    background-color: #fff;
    color: #003786;
    padding: 10px 18px 10px 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Responsive styles */
  @media screen and (max-width: 768px) {
    .logo img {
      max-width: 80px;
    }

    .menu {
      display: none;
    }

    .contact-button .btn-contact {
      padding: 8px 16px;
    }
  }
  </style>