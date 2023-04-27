<template>
  <div class='container'>
    <div class='row'>
      <input class="mx-1 mt-2 col-6" v-model="addProspectName" placeholder="Prospect to Add" />
      <MLBTeamSelect class="mx-1 mt-2 col-4" v-model="addMLBTeam" :key="addKey"/>
      <input class="mx-1 mt-2 col-1" v-model="addPosition" placeholder="Main Position (limit one)" />
    </div>
    <div class="row">
      <input class="mx-1 mt-2 col-6" v-model="removeProspectName" placeholder="Prospect to Remove" />
      <MLBTeamSelect class="mx-1 mt-2 col-4" v-model="removeMLBTeam" :key="removeKey" />
      <input class="mx-1 mt-2 col-1" v-model="removePosition" placeholder="Main Position (limit one)" />
    </div>
    <div class="row">
      <button class="mt-2" @click="handleTransaction">Process Transaction</button>
    </div>
    <div class="mt-2 row mx-auto" v-show="addResponse">
      <span class="prospectTransactionResponse">{{ addResponse }}</span>
    </div>
    <div class="mt-2 row mx-auto" v-show="removeResponse">
      {{ removeResponse }}
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
  data() { return {
    loading: false,
    addProspectName: '',
    removeProspectName: '',
    addMLBTeam: '',
    removeMLBTeam: '',
    addPosition: '',
    removePosition: '',
    addResponse: '',
    removeResponse: '',
    addKey: 0,
    removeKey: 0
  } },
  props: ['prospects'],
  methods: {
    ...mapActions(useProspectsStore, ['addProspect', 'removeProspect', 'swapProspect']),
    handleTransaction() {
      this.loading = true
      this.addResponse = ''
      this.removeResponse = ''
      if (this.addProspectName && this.addMLBTeam) {
        this.addProspect(this.addProspectName, this.addMLBTeam, this.addPosition).then(resp => {
          this.addResponse = resp.msg
          this.addProspectName = ''
          this.addPosition = ''
          this.addKey++
        })
      } else if ((this.addProspectName && !this.addMLBTeam) || (!this.addProspectName && this.addMLBTeam)) {
        console.log('Both a team and prospect are needed to add a prospect')
      }
      if (this.removeProspectName && this.removeMLBTeam) {
        this.removeProspect(this.removeProspectName, this.removeMLBTeam, this.removePosition).then(resp => {
          this.removeResponse = resp.msg
          this.removeProspectName = ''
          this.removePosition = ''
          this.removeKey++
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