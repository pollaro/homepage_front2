<template>
  <td>{{ player.first_name + ' ' + player.last_name }}</td>
  {{player.first_name}}
</template>

<script>
export default {
  name: "HblPlayer",
  props: {
    player: {
      type: Object
    }
  },
}
</script>

<style scoped>

</style>