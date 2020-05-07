<template>
  <v-container>
    <v-card class="mx-auto mt-12" raised style="background: #F9FBE7 " width="750px">
      <v-card-title>
        <h1 class="subheading grey--text">Modifica employee</h1>
      </v-card-title>
      <v-col>
        <v-form ref="form" class="md-5">
          <v-text-field
            style
            v-model="name"
            label="Nome"
            required
            id="styled-input-update"
            class="styled-input-update"
          ></v-text-field>
          <v-text-field
            v-model="surname"
            label="Cognome"
            required
            id="styled-input-update"
            class="styled-input-update"
          ></v-text-field>
          <v-text-field
            v-model="age"
            label="Età"
            required
            id="styled-input-update"
            class="styled-input-update"
          ></v-text-field>
          <v-btn class="ma-2" color="success" dark @click="updateEmployee">Modifica</v-btn>
          <v-btn class="ma-2" color="error" dark>Indietro</v-btn>
        </v-form>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "update-employee",
  data() {
    return {
      //Questa riga consente di portare in questa pagina l'id dell'oggetto
      //dalla pagina di provenienza
      id: this.$route.params.id,
      employees: this.$store.state.employees.list
    };
  },
  computed: {
    actualEmployee() {
      return this.employees.find(employee => employee.id === this.id);
    },
    name: {
      get() {
        return this.actualEmployee.name;
      },
      set(value) {
        var payload = {
          idEmployeeAttuale: this.id,
          nomeDaAggiornare: value
        };
        this.$store.dispatch("employees/updateName", payload);
      }
    },
    surname: {
      get() {
        return this.actualEmployee.surname;
      },
      set(value) {
        var payload = {
          idEmployeeAttuale: this.id,
          cognomeDaAggiornare: value
        };
        this.$store.dispatch("employees/updateSurname", payload);
      }
    },
    age: {
      get() {
        return this.actualEmployee.age;
      },
      set(value) {
        var payload = {
          idEmployeeAttuale: this.id,
          ageDaAggiornare: value
        };
        this.$store.dispatch("employees/updateAge", payload);
      }
    }
  },
  methods: {
    // Aggiorno l'oggetto
    updateEmployee() {
      var data = {
        name: this.name,
        surname: this.surname,
        age: this.actualEmployee.age
      };
      if (this.name.length <= 0 || this.surname.length <= 0 || this.age <= 0) {
        this.$alert("Riempire tutti i campi", "Errore", "error");
      } else {
        this.$confirm(
          "Confermi la modifica?",
          "Modifica utente",
          "question"
        ).then(() => {
          axios
            .put(
              "http://localhost:8080/JerseyHibernateApp/webapi/employees/update/" +
                this.actualEmployee.id,
              data
            )
            .then(response => {
              // this.refresh();
              //Terminato il metodo, andrò alla seguente pagina
              // this.$router.push("/employees");
            })
            .catch(e => {
              console.log(e);
            });
        });
      }
    }
  }
};
//};
</script>

<style>
#styled-input-update {
  height: 40px;
  font-size: 20pt;
  color: orangered;
}
.styled-input-update label[for] {
  height: 30px;
  font-size: 15pt;
  color: blue;
}
</style>