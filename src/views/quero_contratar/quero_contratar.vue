<template>
  <div class="contratar_tempalte">
    <div class="information">
      <div class="container_inf">
        <img src="../../assets/SVG/LOGO.svg" alt="Pack Benefcios" />
        <div class="content_info">
          <h2>Plano de saude 100% Digital, na palma da sua Mão.</h2>
          <p>
            Tenha o BENEFÍCIO de consultas médicas e descontos reais em
            medicamentos para você ou sua empresa, agora na palma das suas mãos!
          </p>
          <div class="buttons">
            <button
              class="btn"
              @click="$router.push('/quero_contratar_fisica')"
            >
              Contratar para mim
            </button>
            <button
              class="btn"
              @click="$router.push('/quero_contratar_empresa')"
            >
              Contratar para minha empresa
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="image-rigth"></div>
  </div>
</template>

<script>
export default {};
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
      // justify-content: space-between;
      img {
        max-width: 180px;
      }
      .content_info {
        margin-top: 220px;
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
    background: #133c7e;
    width: 50%;
  }
}

@media only screen and (max-width: 560px) {
  .contratar_tempalte {
    flex-direction: column;
    .information {
      padding: 10px 2%;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      z-index: 10;
      .container_inf {
        justify-content: space-evenly;
        .content_info {
          margin-top: 10px;
          .buttons {
            flex-direction: column;
          }
        }
      }
    }
    .image-rigth {
      width: 100%;
      height: 50%;
      display: none;
    }
  }
}
</style>
