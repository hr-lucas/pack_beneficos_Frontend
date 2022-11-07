<template>
  <div class="contratar_tempalte">
    <div class="information">
      <div class="container_inf">
        <img src="../../assets/SVG/LOGO.svg" alt="Pack Benefcios" />
        <div class="content_info" v-if="mensagemSucesso">
          <h2>Conheça a Pack Benefícios</h2>
          <p>Preencha os campos abaixo com o seus dados.</p>
          <v-form v-model="form" @submit.prevent="onSubmit">
            <v-text-field
              v-model="dadosFormulario.nomeCompleto"
              class="mb-2"
              label="Nome completo"
              variant="outlined"
              :rules="organizationRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="dadosFormulario.email"
              class="mb-2"
              type="email"
              required
              :rules="emailRules"
              label="E-mail corporativo"
              variant="outlined"
            ></v-text-field>
            <!-- Start -->
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  :rules="organizationRules"
                  v-model="dadosFormulario.nomeEmpresa"
                  class="mb-2"
                  label="Nome da empresa"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="dadosFormulario.numeroFuncionarios"
                  :rules="organizationRules"
                  class="mb-2"
                  required
                  label="Nº funcionários"
                  v-maska="['#', '##', '###', '#.###', '##.###', '###.###']"
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  :rules="phoneRules"
                  v-model="dadosFormulario.telefone"
                  class="mb-2"
                  label="Telefone/Whatsapp"
                  v-maska="['+55 (##) ####-####', '+55 (##) # ####-####']"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  :rules="organizationRules"
                  v-model="dadosFormulario.cargo"
                  class="mb-2"
                  label="Cargo"
                  required
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- End -->

            <v-btn
              :disabled="!form"
              :loading="loading"
              block
              color="success"
              size="large"
              type="submit"
              variant="outlined"
            >
              Cadastrar para receber contato
            </v-btn>
          </v-form>
        </div>
      </div>
    </div>
    <div class="image-rigth"></div>
  </div>
</template>

<script>
// import { cpf } from "cpf-cnpj-validator";

export default {
  data() {
    return {
      form: false,
      dadosFormulario: {
        nomeCompleto: null,
        email: null,
        nomeEmpresa: null,
        numeroFuncionarios: null,
        telefone: null,
        cargo: null,
      },
      mensagemSucesso: true,
      loading: false,
      organizationRules: [(v) => !!v || "Preencha o campo vazio"],
      phoneRules: [
        (v) => !!v || "Preencha o campo vazio",
        (v) => (v && v.length >= 18) || "Informe um numero válido!",
      ],
      emailRules: [
        (v) => !!v || "Preencha o campo vazio",
        (v) => this.validEmail(v) || "Informe um email válido!",
      ],
    };
  },
  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.mensagemSucesso = false;
      }, 2000);
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped lang="scss">
.contratar_tempalte {
  display: flex;
  width: 100%;
  height: 100vh;
  .information {
    width: 50%;
    .container_inf {
      max-width: 580px;
      padding: 35px 0;
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;

      img {
        max-width: 180px;
      }
      .content_info {
        margin-top: 100px;
        h2 {
          font-size: 2.5rem;
          line-height: 45px;
          font-weight: 900;
          color: #2a65c5;
        }
        p {
          text-align: left;
          margin-top: 25px;
          font-size: 1.3rem;
        }
        form {
          margin-top: 50px;
        }
        .buttons {
          display: flex;
          width: 100%;
          gap: 20px;
          margin-top: 25px;
          .btn {
            border-radius: 5px;
            &:last-child {
              background: none;
              border: 1px solid #2a65c5;
              color: #2a65c5;
            }
          }
        }
      }
    }
    text-align: left;
  }
  .image-rigth {
    height: 100%;
    background: blue;
    width: 50%;
  }
}
</style>
