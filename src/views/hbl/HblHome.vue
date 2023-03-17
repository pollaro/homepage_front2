<template>
  <HblLogin v-if='!loggedIn' />
  <HblTeams v-if='loggedIn' />
</template>

<script>
import HblLogin from "@/components/hbl/HblLogin.vue"
import HblTeams from '@/components/hbl/HblTeams.vue'
import { useUserStore } from "@/stores/useUserStore"
import { mapActions, mapState } from "pinia"

export default {
  name: "HblHome",
  components: { HblTeams, HblLogin },
  computed: {
    ...mapState(useUserStore, ['loggedIn'])
  },
  methods: {
    ...mapActions(useUserStore, ['check'])
  },
  created() {
    this.check()
  }
}
</script>

<style scoped>

</style>