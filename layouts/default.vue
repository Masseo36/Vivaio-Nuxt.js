<template>
  <div>
    <div class="container">
      <TheNavbar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  components: {
    TheNavbar
  },
  /*asinch fetch per caricar ei dati nello $store*/
  async fetch() {
    function replacer(key, value) {
      if (typeof value === "number" || typeof value === "boolean") {
        return String(value);
      } else {
        return value;
      }
    }
    this.employees = await this.$http.$get(
      "http://localhost:8080/JerseyHibernateApp/webapi/employees"
    );
    /*Uso stringify per creare una stringa JSON e racchiudere il valore dell'id dentro le virgolette(tramite il metodo replacer),
     altrimenti non viene letto*/
    this.employees = JSON.stringify(this.employees, replacer);
    //Ora prendo la stringa e la ritrasformo in un oggetto JavaScript, prima di inviarla allo $store
    this.employees = JSON.parse(this.employees);
    this.$store.dispatch("employees/popolaStore", this.employees);
  }
};
</script>

<style>
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>