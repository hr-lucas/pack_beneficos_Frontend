<template>
  <div class="home">
    <HeaderComponent />
    <section class="header-emphasis">
      <div class="container">
        <div class="information">
          <h2>Convênio de saúde 100% Digital, na palma da sua Mão.</h2>
          <p>
            Tenha o benefício de consultas médicas e descontos reais em
            medicamentos, para você ou sua empresa, agora, na palma de suas mão!
          </p>
          <a class="btn" href="#valor_plano"> Contratar agora </a>
        </div>
        <div class="image-left">
          <img src="../../assets/IMAGES/ARTE-min.png" alt="" />
        </div>
      </div>
    </section>
    <section class="section-card">
      <h2>Só quem tem Pack Benefícios ganha tempo e praticidade.</h2>
      <div class="flex">
        <CardComponent
          class="item"
          image="G_01.svg"
          text="Atendimento sem filas: 24h por dia, 7 dias por semana."
        />
        <CardComponent
          class="item"
          image="G_02.svg"
          text="Médicos generalistas, clínico geral, médico da família e pediatra por vídeo.  "
        />
        <CardComponent
          image="G_03.svg"
          class="item"
          text="Atendimento psicológico por vídeo."
        />
        <CardComponent
          image="G_04.svg"
          class="item"
          text="95% de efetividade de atendimento concluído em vídeo sem a necessidade pronto socorro;"
        />
        <CardComponent
          image="G_05.svg"
          class="item"
          text="Descontos reais em medicamentos."
        />
        <CardComponent
          image="G_06.svg"
          class="item"
          text="Prescrição de medicamentos e atestados digitais."
        />
      </div>
    </section>
    <section class="information-benefits">
      <div class="image">
        <img src="../../assets/IMAGES/FOTO.png" alt="" />
      </div>
      <div class="information">
        <div class="dec"></div>
        <h2>Você sabia?</h2>
        <div class="card">
          <img src="../../assets/SVG/HOSPITAl.svg" alt="" />
          <p>
            51% das pessoas vão ao pronto-socorro como primeira opção de
            atendimento médico.
          </p>
        </div>
        <div class="dec"></div>
        <div class="card">
          <img src="../../assets/SVG/CAMERA.svg" alt="" />
          <p>
            80% desses casos poderiam ser resolvidos por meio da telemedicina,
            como a Pack faz!
          </p>
        </div>

        <a class="btn" href="/#porque_contratar">Por que contratar a Pack? </a>
      </div>
    </section>
    <section class="por-que-contratar" id="porque_contratar">
      <p>Por que contratar a pack?</p>
      <div class="dec"></div>
      <h2>PARA VOCÊ: ECONOMIA DE TEMPO E DINHEIRO</h2>
      <div v-for="text in watch_contrat_pf" :key="text.text">
        <CardHorizontalCompent :text="text.text" :image="text.url" />
      </div>
    </section>
    <div class="blue-blackGround">
      <section class="por-que-contratar-empresa">
        <p>Por que contratar a pack?</p>
        <div class="dec"></div>
        <h2>PARA SUA EMPRESA</h2>
        <div v-for="text in watch_contrat_pj" :key="text.text">
          <CardHorizontalCompent :text="text.text" :image="text.url" />
        </div>
      </section>
    </div>
    <section id="como_funciona" class="como-funciona container">
      <div class="dec"></div>
      <h2>Como funciona</h2>
      <div class="passo">
        <div class="image">
          <img src="../../assets/IMAGES/C_01.png" alt="Assine" />
        </div>
        <div class="information">
          <div class="passo-numero">
            <p>1</p>
            <span>Assine</span>
          </div>
          <div class="descricao">
            <p>
              Ao contratar o plano para você ou sua empresa, é necessário apenas
              escolher dentre eles qual se adequa melhor às suas necessidades. A
              contratação pode ser online ou você pode falar com um de nossos
              consultores, da forma que preferir.
            </p>
          </div>
        </div>
      </div>

      <div class="passo reverter">
        <div class="image">
          <img src="../../assets/IMAGES/C_02.png" alt="Assine" />
        </div>
        <div class="information">
          <div class="passo-numero">
            <p>2</p>
            <span>Fazendo o primeiro acesso</span>
          </div>
          <div class="descricao">
            <p>
              Após efetuar a contratação de um de nossos planos, você receberá
              um e-mail com as instruções para baixar o nosso app ou realizar o
              seu primeiro acesso. Siga as orientações.
            </p>
          </div>
        </div>
      </div>
      <div class="passo">
        <div class="image">
          <img src="../../assets/IMAGES/C_03.png" alt="Assine" />
        </div>
        <div class="information">
          <div class="passo-numero">
            <p>3</p>
            <span>Agendando sua primeira consulta</span>
          </div>
          <div class="descricao">
            <p>
              Após logar na área do cliente, você poderá agendar o seu
              atendimento com um de nossos médicos com, no mínimo, 15 minutos de
              antecedência. Depois receberá por WhatsApp, SMS e e-mail o link
              para o atendimento por vídeo.
            </p>
          </div>
        </div>
      </div>
      <div class="passo reverter">
        <div class="image">
          <img src="../../assets/IMAGES/C_04.png" alt="Assine" />
        </div>
        <div class="information">
          <div class="passo-numero">
            <p>4</p>
            <span>Descontos em medicamentos</span>
          </div>
          <div class="descricao">
            <p>
              Os descontos são válidos apenas para medicamentos prescritos nas
              consultas realizadas por meio da Pack. Você deve entrar em contato
              com o suporte pelo WhatsApp (34) 8432-7928 e enviar a receita
              médica junto com o comprovante fiscal da compra do medicamento. O
              reembolso será realizado via transferência bancária em até 2
              (dois) dias úteis.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="price container" id="valor_plano">
      <div class="dec"></div>
      <h2>O plano ideal para você e sua empresa</h2>

      <CardPriceComponent />
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/core/components/TheHeader.vue";
import FooterComponent from "@/core/components/TheFooter.vue";
import CardComponent from "./components/card.vue";
import CardHorizontalCompent from "./components/card_horizontal.vue";
import CardPriceComponent from "./components/card_price.vue";
export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardHorizontalCompent,
    CardPriceComponent,
  },
  data() {
    return {
      watch_contrat_pf: [
        {
          url: "01.svg",
          text: "A espera em um pronto-socorro pode durar de 2 a 4h para casos que não são considerados graves. Além disso, existe o tempo gasto no deslocamento. Na Pack o seu atendimento é sem fila, 24h por dia.",
        },
        {
          url: "2.svg",
          text: "R$439,54 é o valor médio mensal pago em um plano de saúde, considerando que ainda há coparticipação em alguns casos. O plano padrão da Pack custa, por ano, R$298,80",
        },
        {
          url: "3.svg",
          text: "O gasto médio com medicamentos por atendimento é de R$138,32. Na Pack você tem desconto de R$30,00 nos medicamentos prescritos.",
        },
        {
          url: "4.svg",
          text: "O custo médio de uma consulta particular com um clínico geral é de R$110,00, fora o valor gasto com medicamentos. Na Pack você não paga pelas consultas, apenas a mensalidade.",
        },
        {
          url: "5.svg",
          text: "O custo médio de uma sessão com um psicólogo é de R$130,00. O ideal são pelo menos duas sessões por mês, totalizando R $260,00. Na Pack você não paga pelas consultas, apenas a sua mensalidade.",
        },
      ],
      watch_contrat_pj: [
        {
          url: "6.svg",
          text: "O custo de oferecer como benefício a assistência da Pack pode ser até 30x MENOR que um plano de saúde convencional.",
        },
        {
          url: "7.svg",
          text: "Mais de 55% dos colaboradores são atraídos por benefícios na hora de escolher uma empresa, de acordo com o estudo Employee Benefits Study, de 2019.",
        },
        {
          url: "8.svg",
          text: "69% dos colaboradores dizem ter mais lealdade com os empregadores por conta da gama de benefícios oferecidos. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header-emphasis {
  padding: 100px 2%;
  position: relative;
  min-height: 90vh;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  background: radial-gradient(circle at right top, #2a65c5, #133c7e);
  .container {
    display: flex;
    background: url("../../assets/IMAGES/ARTE-min.png");
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    height: 100%;
    padding: 100px 50px;
    border-radius: 10px;
    .information {
      width: 50%;
      text-align: left;
      h2 {
        font-size: 2.5rem;
        font-weight: 900;
        line-height: 45px;
        margin-bottom: 20px;
      }
      p {
        font-size: 1.3rem;
        margin-bottom: 30px;
      }
      .btn {
        width: 500px;
        font-size: 1.2rem;
        border-radius: 100px;
        padding: 20px 100px;
        margin-top: 150px;
        text-decoration: none;
      }
    }
    .image-left {
      width: 70%;
      img {
        display: none;
      }
    }
  }
}
.section-card {
  width: 100%;
  padding: 50px 3%;
  background: rgba(19, 60, 126, 1);
  color: white;
  .flex {
    max-width: 980px;
    margin: 50px auto;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    .item {
      flex: 1 1 250px;
    }
  }
}
.information-benefits {
  display: flex;
  max-width: 1296px;
  margin: 0 auto;
  width: 100%;
  padding: 100px 2%;
  gap: 30px;
  align-items: center;
  justify-content: center;
  .image {
    width: 50%;
    img {
      max-width: 526px;
    }
  }
  .information {
    width: 50%;
    text-align: left;
    .dec {
      border-top: 1px solid #4fbf43;
      margin: 10px 0;
      &:nth-child(1) {
        border-top: 4px solid #4fbf43;
        width: 300px;
        border-radius: 30px;
      }
    }
    h2 {
      font-weight: 900;
      font-size: 2rem;
    }
    .card {
      width: 100%;
      display: flex;
      gap: 20px;
      padding: 10px;
      align-items: center;
      text-align: left;
      margin-bottom: 25px;
      img {
        width: 15%;
      }
      p {
        width: 85%;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
    .btn {
      width: 300px;
      padding: 10px 40px;
      border-radius: 10px;
      text-decoration: none;
    }
  }
}
.por-que-contratar {
  width: 100%;
  max-width: 1296px;
  margin: 0 auto;
  padding: 100px 0;
  text-align: left;
  .dec {
    border-top: 3px solid #4fbf43;
    margin: 10px 0;
    width: 300px;
    border-radius: 30px;
  }
  p {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
  }
}
.por-que-contratar-empresa {
  width: 100%;
  max-width: 1296px;
  margin: 0 auto;
  padding: 100px 0;
  text-align: left;
  .dec {
    border-top: 3px solid #4fbf43;
    margin: 10px 0;
    width: 300px;
    border-radius: 30px;
  }
  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: white;
  }
  h2 {
    color: white;
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
  }
}
.como-funciona {
  padding: 100px 0;
  text-align: left;
  h2 {
    color: #2a65c5;
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 100px;
  }
  .dec {
    border-top: 3px solid #4fbf43;
    margin: 10px 0;
    width: 300px;
    border-radius: 30px;
  }
  .reverter {
    flex-direction: row-reverse;
  }
  .passo {
    display: flex;
    width: 100%;
    max-width: 1198px;
    margin: 0 auto;
    gap: 20px;
    align-items: center;
    .image {
      width: 50%;
      text-align: center;
      img {
        max-width: 380px;
      }
    }
    .information {
      text-align: left;
      width: 50%;
      .passo-numero {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-bottom: 20px;
        p {
          padding: 10px 20px;
          color: white;
          font-size: 1.8rem;
          border-radius: 10px;
          background: #69aa04;
        }
        span {
          font-size: 1.8rem;
          font-weight: 500;
          color: #2a65c5;
        }
      }
      .descricao {
        font-size: 1.2rem;
        color: #2a65c5;
      }
    }
  }
}
.price {
  padding: 100px 0;
  text-align: left;
  h2 {
    color: #2a65c5;
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 100px;
  }
  .dec {
    border-top: 3px solid #4fbf43;
    margin: 10px 0;
    width: 300px;
    border-radius: 30px;
  }
  .flex {
    max-width: 1100px;
    margin: 50px auto;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    .item {
      flex: 1 1 300px;
    }
  }
}
@media only screen and (max-width: 880px) {
  .header-emphasis {
    flex-direction: column-reverse;
    .container {
      flex-direction: column-reverse;
      padding: 20px 0;
      background: none;
      .information {
        width: 100%;
        padding: 10px 3%;
        text-align: left;
      }
      .image-left {
        width: 100%;
        img {
          border-radius: 10px;
          width: 100%;
          display: block;
        }
      }
    }
  }
  .information-benefits {
    flex-direction: column;
    padding: 35px 3%;
    .image {
      width: 100%;
    }
    .information {
      width: 100%;
      margin-top: 20px;
    }
  }
  .por-que-contratar,
  .por-que-contratar-empresa {
    padding: 100px 3%;
  }
  .como-funciona,
  .price {
    padding: 100px 3%;
  }
}

@media only screen and (max-width: 560px) {
  .information-benefits .image img {
    max-width: 380px;
  }
  .como-funciona {
    padding: 0 3%;
    .passo {
      flex-direction: column;
      row-gap: 20px;
      margin-bottom: 100px;
      padding: 0 3%;
      .image {
        width: 100%;
        img {
          max-width: 280px;
        }
      }
      .information {
        margin: 10px 0;
        width: 100%;
      }
    }
  }
  .information-benefits {
    width: 100%;
    .information {
      h2 {
        font-size: 1.6rem;
        margin-bottom: 20px;
      }
      padding: 0 5%;
      .btn {
        font-size: 1.2rem;
        width: 100%;
      }
    }
  }
  .por-que-contratar {
    h2 {
      font-size: 1.6rem;
    }
  }
}
</style>
