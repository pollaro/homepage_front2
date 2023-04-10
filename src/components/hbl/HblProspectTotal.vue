<template>
  <table class="table table-sm table-bordered">
    <thead>
      <tr>
        <th class="col">Team Name</th>
        <th class="col">Total Prospects</th>
      </tr>
    </thead>
    <tbody class="align-middle">
      <tr v-for="team in teams" :key="team.team_id">
        <td class="col">{{ team.name }}</td>
        <td class="col">{{ totalProspectsPerTeam[team.name] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "HblProspectTotal",
  props: ['prospects', 'teams'],
  data() {},
  computed: {
    totalProspectsPerTeam() {
      let totalProspectsPerTeam = {}
      for (let prospect of this.prospects) {
        console.log(prospect.hbl_team.name)
        if (prospect.hbl_team.name in totalProspectsPerTeam) {
          totalProspectsPerTeam[prospect.hbl_team.name]++
        } else {
          totalProspectsPerTeam[prospect.hbl_team.name] = 1
        }
      }
      return totalProspectsPerTeam
    }
  }
}
</script>

<style scoped>

</style>