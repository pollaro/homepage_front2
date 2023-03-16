<template>
  <div class="container">
    <div class="col-md-6 mx-auto">
      <div class="card card-container">
        <Form @submit="handleSubmit">
          <div class="form-group mx-4 my-3">
            <button class="btn btn-primary btn-block" :disabled="loading">
              Submit
              <span v-show="loading" class="spinner-border spinner-border-sm" />
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/useUserStore"
import { mapActions } from 'pinia'
import { Form } from 'vee-validate'

export default {
  name: "HblLogin",
  components: { Form },
  data() { return {loading: false} },
  methods: {
    ...mapActions(useUserStore, ['login']),
    handleSubmit() {
      this.loading = true
      this.login()
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>