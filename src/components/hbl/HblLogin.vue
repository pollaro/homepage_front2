<template>
  <div class="container">
    <div class="col-md-6 mx-auto">
      <span>To access the Huckleberry Baseball League, Yahoo authorization is required.</span>
      <div class="card-container col-md-6 mx-auto">
        <Form @submit="handleSubmit">
            <button class="btn btn-primary btn-block" :disabled="loading">
              Submit
              <span v-show="loading" class="spinner-border spinner-border-sm" />
            </button>
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