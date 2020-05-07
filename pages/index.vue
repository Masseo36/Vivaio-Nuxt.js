<template>
  <div>
    <h1>Lista employees</h1>
    <ul>
      <li v-for="employee of employees" :key="employee.id">
        <nuxt-link
          :to="{ name: 'employees-id-details', params: { id: employee.id }}"
        >{{ employee.name + " " }}{{ employee.surname + " "}} {{ employee.age + " " }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home Page"
    };
  },
  data() {
    return {
      employees: this.$store.state.employees.list
    };
  }
};
</script>
