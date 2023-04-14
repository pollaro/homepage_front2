<template>
  <div class="container">
    <div class="row align-items-center">
      <div class='col ms-2'>
        <HBLProspectTransaction :prospects="allProspects"/>
      </div>
      <div class='col ms-2'>
        <HblProspectTotal class="ms-2" :teams="teams" :prospects="allProspects" />
      </div>
    </div>
    <div class="row row-cols-1 mt-2">
      <HblProspect class="ms-2" :prospects="(teamId === 0 ? allProspects:prospects[teamId])" />
    </div>
  </div>
</template>

<script>
import HblProspect from '@/components/hbl/HblProspect.vue'
import HblProspectTotal from '@/components/hbl/HblProspectTotal.vue'
import HBLProspectTransaction from '@/components/hbl/HBLProspectTransaction.vue'
import { useProspectsStore } from '@/stores/useProspectsStore'
import { useTeamsStore } from '@/stores/useTeamsStore'
import { mapActions, mapState } from 'pinia'

export default {
  name: "HblProspectRoster",
  components: { HBLProspectTransaction, HblProspectTotal, HblProspect },
  data() { return {loading: false, teamId: 0} },
  computed: {
    ...mapState(useTeamsStore, ['teams']),
    ...mapState(useProspectsStore, ['prospects']),
    allProspects() {
      let all = []
      for(let list of Object.values(this.prospects)) {
        all = all.concat(list)
      }
      return all
    }
  },
  methods: {
    ...mapActions(useTeamsStore, ['getAllTeams']),
    ...mapActions(useProspectsStore, ['getProspectList']),
    getTeams () {
      this.loading = true
      this.getAllTeams()
      this.loading = false
    },
    getProspects (teamId) {
      this.loading = true
      this.getProspectList(teamId)
      this.loading = false
    },
  },
  created() {
    if (typeof(this.teamId) === 'undefined' || this.teamId === '' || this.teamId === 0) {
      this.loading = true
      this.getProspects(0)
      this.loading = false
    }
    if (this.teams.length === 0) {
      this.loading = true
      this.getTeams()
      this.loading = false
    }
    if (this.teamId > 0) {
      this.loading = true
      this.getProspects(this.teamId)
      this.loading = false
    }
  }
}

</script>

<style scoped>

</style>