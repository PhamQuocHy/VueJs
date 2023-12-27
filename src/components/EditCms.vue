<!-- <template>
  <div>
    <h2>Edit Feature</h2>
    <form @submit.prevent="saveFeature">
      <div>
        <label for="title">Title:</label>
        <input v-model="feature.title" type="text" id="title" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="feature.description" id="description" required></textarea>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feature: {
        id: null,
        title: "",
        description: ""
      }
    };
  },
  methods: {
    saveFeature() {
      // Gửi yêu cầu cập nhật feature tới server
      // Ví dụ: sử dụng axios để gửi yêu cầu PUT
      axios.put(`/api/features/${this.feature.id}`, this.feature)
        .then(response => {
          // Xử lý phản hồi từ server (nếu cần)
          console.log(response.data);
        })
        .catch(error => {
          // Xử lý lỗi (nếu có)
          console.error(error);
        });
    }
  },
  mounted() {
    // Lấy thông tin feature từ server khi component được tạo
    const featureId = this.$route.params.id;
    axios.get(`/api/features/${featureId}`)
      .then(response => {
        this.feature = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script> -->