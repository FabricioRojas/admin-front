<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <form @submit.prevent="formSubmit">
              <!-- <login-card header-color="green"> -->
              <h4 slot="title" class="card-title">Login</h4>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>First Name...</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <button>
                <md-button slot="footer" class="md-simple md-success md-lg">Logueame</md-button>
              </button>
              <!-- </login-card> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { LoginCard } from '../components/LoginCard'
import loginController from "../controllers/login";

export default {
  components: {
    // LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null
    };
  },
  created() {
    loginController.get();
  },
  props: {
    header: {
      type: String,
      default: "black"
    }
  },
  methods: {
    formSubmit() {
      console.log("submit");
      loginController.register({
        username: this.email,
        password: this.password
      });

      loginController.login({
        username: this.email,
        password: this.password
      });
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
