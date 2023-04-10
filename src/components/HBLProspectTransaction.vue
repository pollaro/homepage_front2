<template>
  <div class='container'>
    <div class='row'>
      <input v-model='addProspect' placeholder='Prospect to Add' />
      <input v-model='removeProspect' placeholder='Prospect to Remove' />
      <button @click="handleTransaction()">Process Transaction</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HBLProspectTransaction",
  data() { return {loading: false} },
  props: ['prospects'],
  methods: {
    handleTransaction() {
      this.loading = true

      this.loading = false
    },
  }
}
</script>

<style scoped>

</style>