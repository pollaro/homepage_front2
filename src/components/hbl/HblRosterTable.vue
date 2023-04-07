<template>
    <table class="table table-sm table-striped table-bordered">
      <thead>
        <tr>
          <th class="col-6">Name</th>
          <th class="col-5">Pos</th>
          <th class="col-1">Team</th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr v-for="player in players" :key="player.player_id">
          <td class="player col-6">{{ player.first_name }} {{ player.last_name }}</td>
          <td class="player col-5">{{ player.display_positions }}</td>
          <td class="player col-1">{{ player.team_name }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: "HblRosterTable",
  props: ['players'],
  watch: {
    players(_, newPlayers) {
      return newPlayers
    }
  }
}
</script>

<style scoped>
  .player {
    font-size: 0.8rem;
  }
</style>