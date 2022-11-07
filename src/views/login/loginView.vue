<template>
  <div class="login_template">
    <div class="form">
      <div class="form_container">
        <img src="../../assets/SVG/LOGO.svg" alt="Pack Benefcios" />
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="cpfSend"
            :readonly="loading"
            :rules="organizationRules"
            class="mb-2"
            label="Informe seu CPF"
            variant="outlined"
            maxlength="11"
          ></v-text-field>

          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="outlined"
          >
            Entrar
          </v-btn>
        </v-form>
      </div>
    </div>
    <div class="image-rigth"></div>
  </div>
</template>

<script>
import { cpf } from "cpf-cnpj-validator";

export default {
  data() {
    return {
      form: false,
      cpfSend: null,
      loading: false,
      organizationRules: [
        (v) => !!v || "Preencha o campo vazio",
        (v) =>
          (v && v.length <= 14) ||
          "Organization must be less than 11 characters",
        (v) =>
          (v && v.length <= 14 && cpf.isValid(v) === true) || "CPF INVALIDO",
      ],
    };
  },
  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
  watch: {
    cpfSend(value) {
      if (value.length >= 11) {
        const formart = cpf.format(value);
        return (this.cpfSend = formart);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login_template {
  display: flex;
  width: 100%;
  align-content: center;
  height: 100vh;
  .form {
    width: 50%;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 100px;
    .form_container {
      max-width: 380px;
      margin: 0 auto;
      width: 100%;
      img {
        margin-bottom: 20px;
      }
    }
  }
  .image-rigth {
    height: 100%;
    background: #133c7e;
    width: 50%;
  }
}
</style>
