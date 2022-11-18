<template>
  <div class="contratar_tempalte">
    <div class="information">
      <div class="container_inf">
        <img src="../../../assets/SVG/LOGO.svg" alt="Pack Benefcios" />

        <div class="content_info" v-if="mensagemSucesso">
          <h2>Conheça a Pack Benefícios</h2>
          <p>Preencha os campos abaixo com o seus dados.</p>
          <v-form
            v-model="form"
            name="formulario_pessoa"
            id="formulario_pessoa"
            @submit.prevent="onSubmit"
          >
            <v-text-field
              v-model="dadosFormulario.nomeCompleto"
              class="mb-2"
              label="Nome completo"
              variant="outlined"
              type="text"
              name="nomeCompleto"
              :rules="organizationRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="dadosFormulario.email"
              name="email"
              type="email"
              class="mb-2"
              required
              :rules="emailRules"
              label="E-mail Pessoal"
              variant="outlined"
            ></v-text-field>
            <!-- Start -->
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  name="quantidadePessoas"
                  type="text"
                  v-model="dadosFormulario.numeroPessoas"
                  :rules="organizationRules"
                  class="mb-2"
                  required
                  label="Quantidade pessoal no plano"
                  v-maska="['#', '##', '###', '#.###', '##.###', '###.###']"
                  variant="outlined"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  name="telefone"
                  type="text"
                  :rules="phoneRules"
                  v-model="dadosFormulario.telefone"
                  class="mb-2"
                  label="Telefone/Whatsapp"
                  v-maska="['+55 (##) ####-####', '+55 (##) # ####-####']"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-select
              v-model="dadosFormulario.select"
              :items="items"
              item-title="plan"
              item-value="value"
              name="selectPlano"
              label="Selecione plano"
              persistent-hint
              return-object
              required
              variant="outlined"
              single-line
            ></v-select>
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
        <SendInformation v-else />
      </div>
    </div>
    <div class="image-rigth"></div>
  </div>
</template>

<script>
// import { cpf } from "cpf-cnpj-validator";
import SendInformation from "../components/sendInforamtion.vue";
export default {
  components: {
    SendInformation,
  },
  data() {
    return {
      form: false,
      items: [
        { plan: "Plano Básico", value: "PL_B" },
        { plan: "Plano Padrão", value: "PL_P" },
        { plan: "Plano Completo", value: "PL_C" },
      ],
      dadosFormulario: {
        nomeCompleto: null,
        select: null,
        email: null,
        nomeEmpresa: null,
        numeroPessoas: null,
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
  background: white;
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

@media only screen and (max-width: 560px) {
  .contratar_tempalte {
    flex-direction: column;
    .information {
      width: 100%;

      padding: 25px 2%;
      .container_inf {
        margin-top: 10px;
        .content_info {
          margin-top: 100px;
        }
        .buttons {
          flex-direction: column;
        }
      }
    }
  }
}
</style>
