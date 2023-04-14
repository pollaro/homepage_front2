<template>
  <div class='container'>
    <div class='row'>
      <input class="mx-1 mt-2 col-6" v-model="addProspectName" placeholder="Prospect to Add" />
      <MLBTeamSelect class="mx-1 mt-2 col-4" v-model="addMLBTeam" />
      <input class="mx-1 mt-2 col-1" v-model="addPosition" placeholder="Main Position (limit one)" />
    </div>
    <div class="row">
      <input class="mx-1 mt-2 col-6" v-model="removeProspectName" placeholder="Prospect to Remove" />
      <MLBTeamSelect class="mx-1 mt-2 col-4" v-model="removeMLBTeam" />
      <input class="mx-1 mt-2 col-1" v-model="removePosition" placeholder="Main Position (limit one)" />
    </div>
    <div class="row">
      <button class="mt-2" @click="handleTransaction">Process Transaction</button>
    </div>
    <div class="mt-2 row" v-show="addResponse">
      {{ addResponse.data }}
    </div>
    <div class="mt-2 row" v-show="removeResponse">
      {{ removeResponse.data }}
    </div>
  </div>
</template>

<script>
import MLBTeamSelect from '@/components/hbl/MLBTeamSelect.vue'
import { useProspectsStore } from '@/stores/useProspectsStore'
import { mapActions } from 'pinia'

export default {
  name: "HBLProspectTransaction",
  components: { MLBTeamSelect },
  data() { return {loading: false, addProspectName: '', removeProspectName: '', addMLBTeam: '', removeMLBTeam: '', addPosition: '', removePosition: '', addResponse: {}, removeResponse: {}} },
  props: ['prospects'],
  methods: {
    ...mapActions(useProspectsStore, ['addProspect', 'removeProspect', 'swapProspect']),
    handleTransaction() {
      this.loading = true
      this.addResponse = ''
      this.removeResponse = ''
      if (this.addProspectName && this.addMLBTeam) {
        this.addProspect(this.addProspectName, this.addMLBTeam, this.addPosition).then(resp => {
          this.addResponse = resp
          this.addProspectName = ''
          this.addMLBTeam = ''
          this.addPosition = ''
        })
      } else if ((this.addProspectName && !this.addMLBTeam) || (!this.addProspectName && this.addMLBTeam)) {
        console.log('Both a team and prospect are needed to add a prospect')
      }
      if (this.removeProspectName && this.removeMLBTeam) {
        this.removeProspect(this.removeProspectName, this.removeMLBTeam, this.removePosition).then(resp => {
          this.removeResponse = resp
          this.removeProspectName = ''
          this.removeMLBTeam = ''
          this.removePosition = ''
        })
      } else if ((this.removeProspectName && !this.removeMLBTeam) || (!this.removeProspectName && this.removeMLBTeam)) {
        console.log('Both a team and prospect are needed to drop a prospect')
      }
      this.loading = false
    },
  }
}
</script>

<style scoped>

</style>