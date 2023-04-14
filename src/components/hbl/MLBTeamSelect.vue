<template>
  <select v-model="selectedTeam">
    <option value=""></option>
    <option v-for="(team, teamAbbr) in mlbTeams" :value="teamAbbr" :key="teamAbbr">{{ team }}</option>
  </select>
</template>

<script>
export default {
  name: "MLBTeamSelect",
  emits: ['update:selectedTeam'],
  inject: ['mlbTeams'],
  data() { return {selectedTeam: ''} }
}
</script>

<style scoped>

</style>