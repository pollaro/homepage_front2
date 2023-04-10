<template>
    <table class="table table-sm table-striped table-bordered">
      <thead>
        <tr>
          <th class="col-6"><a href="#" @click="sortBy('last_name')">Name</a></th>
          <th class="col-2"><a href="#" @click="sortBy('primary_position')">Pos</a></th>
          <th class="col-1"><a href="#" @click="sortBy('team_name')">Team</a></th>
          <th class="col-3"><a href="#" @click="sortBy('hbl_team.name')">HBL Team</a></th>
        </tr>
      </thead>
      <tbody class="align-middle">
        <tr v-for="prospect in displayProspects" :key="prospect.id">
          <td class="prospect col-6">{{ prospect.first_name }} {{ prospect.last_name }}</td>
          <td class="prospect col-2">{{ prospect.primary_position }}</td>
          <td class="prospect col-1">{{ prospect.team_name }}</td>
          <td class="prospect col-3">{{ prospect.hbl_team.name }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: "HblProspect",
  props: ['prospects'],
  data() {
    return {
      sortKey: 'last_name',
      reverse: 1,
    }
  },
  computed: {
    displayProspects() {
      return [...this.prospects].sort((a, b) => {
        return a[this.sortKey] >= b[this.sortKey] ? this.reverse : -1 * this.reverse
      })
    }
  },
  methods: {
    sortBy(columnName) {
      this.reverse = (this.sortKey === columnName) ? -1 * this.reverse : 1
      this.sortKey = columnName
    }
  },
  watch: {
    prospects(_, newProspects) {
      return newProspects
    }
  }
}
</script>

<style scoped>
  .prospect {
    font-size: 0.8rem;
  }
</style>