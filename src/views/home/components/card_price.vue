<template>
  <div class="flex">
    <div class="card">
      <div class="content-item">
        <div class="header-information">
          <h2>Plano Básico</h2>
          <span>Indiviudal</span>
        </div>
        <div class="price">
          <span>Por Apenas</span>
          <h2>R$ 14,90</h2>
          <span>Por Mês</span>
        </div>
        <div class="items">
          <ul>
            <li>
              Consulta com <strong> CLÍNICO GERAL</strong> por vídeo-chamada
              <strong> SEM CUSTO.</strong> O médico pode prescrever
              medicamentos, pedidos de exames e atestados.
            </li>
            <li>Dependente adicional: <strong>R$ 10,00</strong></li>
          </ul>
        </div>
      </div>
      <button class="btn" @click="$router.push('/quero_contratar')">
        Contratar já
      </button>
    </div>
    <div class="card">
      <div class="content-item">
        <div class="header-information">
          <h2>Plano Padrão</h2>
          <span>Indiviudal</span>
        </div>
        <div class="price">
          <span>Por Apenas</span>
          <h2>R$ 29,90</h2>
          <span>Por Mês</span>
        </div>
        <div class="items">
          <ul>
            <li>
              Consulta com <strong> CLÍNICO GERAL</strong> por vídeo-chamada
              <strong> SEM CUSTO.</strong> O médico pode prescrever
              medicamentos, pedidos de exames e atestados.
            </li>
            <li>
              Desconto de <strong>R$ 30,00</strong> em medicamentos por mês*
            </li>
            <li>Dependente adicional: <strong>R$ 10,00</strong></li>
          </ul>
        </div>
      </div>
      <button class="btn" @click="$router.push('/quero_contratar')">
        Contratar já
      </button>
    </div>
    <div class="card">
      <div class="content-item">
        <div class="header-information">
          <h2>Plano Completo</h2>
          <span>Indiviudal</span>
        </div>
        <div class="price">
          <span>Por Apenas</span>
          <h2>R$ 44,90</h2>
          <span>Por Mês</span>
        </div>
        <div class="items">
          <ul>
            <li>
              Consulta com <strong> CLÍNICO GERAL + PSICOLOGO</strong> por
              vídeo-chamada <strong> SEM CUSTO.</strong> O médico pode
              prescrever medicamentos, pedidos de exames e atestados.
            </li>
            <li>
              Desconto de <strong>R$ 30,00</strong> em medicamentos por mês*
            </li>
            <li>Dependente adicional: <strong>R$ 10,00</strong></li>
          </ul>
        </div>
      </div>
      <button class="btn" @click="$router.push('/quero_contratar')">
        Contratar já
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPriceComponent",
};
</script>

<style scoped lang="scss">
.flex {
  max-width: 1100px;
  margin: 50px auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    flex: 1 1 300px;
    width: 100%;
    max-width: 380px;
    background: white;
    min-height: 600px;
    padding: 35px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-between;
    &:last-child {
      background: #2a65c5;
      color: white;
      padding: 35px 0;
      .header-information {
        h2 {
          font-size: 1.6rem;
        }
      }
      .price {
        width: 100%;
        padding: 10px;
        background: white;
      }
      .items {
        padding: 0 35px;
      }
      .btn {
        margin: 0 auto;
        width: 80%;
        text-align: center;
      }
    }
    .header-information {
      text-align: center;
    }
    .price {
      text-align: center;
      width: 100%;
      margin: 20px 0;
      span {
        color: #2a65c5;
        &:nth-last-child(1) {
          width: 80%;
          display: flex;
          justify-content: flex-end;
        }
      }
      h2 {
        font-size: 2.8rem;
        font-weight: 900;
        color: #69aa04;
      }
    }
    .items {
      width: 100%;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        li {
          text-decoration: none;
          padding-bottom: 20px;
          border-bottom: 1px solid #69aa04;
          &:last-child {
            border: none;
          }
        }
      }
    }
    .btn {
      width: 100%;
      margin-top: 50px;
      font-size: 1.2rem;
      border-radius: 30px;
    }
  }
}
</style>
