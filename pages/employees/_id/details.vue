<template>
  <div class="container">
    <article>
      <ul>
        <h2>{{actualEmployee.name + " "}}{{actualEmployee.surname + " "}}{{actualEmployee.age + " "}}</h2>
        <div>
          <v-btn rounded class="blue" @click="goTo">Modifica</v-btn>
        </div>
      </ul>
    </article>
    <aside>
      <h3>Other employees</h3>
      <ul>
        <li v-for="employee in otherEmployees" :key="employee.id">
          <nuxt-link
            :to="{name: 'employees-id-details', params: {id: employee.id}}"
          >{{employee.name}}</nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.actualEmployee.name
    };
  },
  data() {
    return {
      id: this.$route.params.id,
      employees: this.$store.state.employees.list
    };
  },
  computed: {
    actualEmployee() {
      return this.employees.find(employee => employee.id === this.id);
    },
    otherEmployees() {
      return this.employees.filter(employee => employee.id !== this.id);
    }
  },
  methods: {
    goTo() {
      this.$router.push({
        path: "/employees/" + this.id + "/update"
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>