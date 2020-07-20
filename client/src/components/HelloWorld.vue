<template>
  <div>
     <div v-if="this.$store.state.staffList.length !== 0">
       <h1>Staff List</h1>
       <div class="form-group container text-center">
          <input type="text" class="form-control" placeholder="Search by id manager" v-model="managerId"  @input="searchStaff">
      </div>
    <div class="container">
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">ID Manager</th>
        </tr>
      </thead>
      <tbody v-if="!this.managerId">
        <tr v-for="staff in this.$store.state.staffList" :key="staff.id_st">
          <td>{{ staff.name }}</td>
          <td>{{ staff.id_mg }}</td>
        </tr>
      </tbody>
      <tbody v-if="this.managerId">
        <tr v-for="staff in this.$store.getters.searchStaff(this.managerId)" :key="staff.id_st">
          <td>{{ staff.name }}</td>
          <td>{{ staff.id_mg }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <h1>Manager List</h1>
    <div class="form-group container text-center">
          <input type="text" class="form-control" placeholder="Search by company" v-model="company" @input="searchManager">
    </div>
    <div class="container">
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Company</th>
        </tr>
      </thead>
      <tbody v-if="!this.company">
        <tr v-for="staff in this.$store.state.managerList" :key="staff.id_mg">
          <td>{{ staff.name }}</td>
          <td>{{ staff.company }}</td>
        </tr>
      </tbody>
      <tbody v-if="this.company">
        <tr v-for="staff in this.$store.getters.searchManager(this.company)" :key="staff.id_mg">
          <td>{{ staff.name }}</td>
          <td>{{ staff.company }}</td>
        </tr>
      </tbody>
    </table>
    </div>   
     </div>
     <div v-if="this.$store.state.staffList.length === 0">
       Loading...
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      managerId: "",
      company: "",
    }
  },
  props: {
    msg: String
  },
  methods: {
    searchStaff(){
      console.log(this.$store.getters.searchStaff(this.managerId))
    },
    searchManager(){
      console.log(this.$store.getters.searchManager(this.company))
    }
  },
  created(){
    this.$store.dispatch('fetchData')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
