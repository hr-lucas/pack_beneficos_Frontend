<template>
  <div class="mensgem-send">
    <div class="img">
      <img src="../../../assets/message.gif" alt="" />
    </div>
    <h2>Agradecemos o seu interesse em contratar nossos serviços!</h2>
    <p>Em breve nossa equipe comercial irá entrará em contato com você!</p>
    <router-link :to="{ name: 'home' }">Voltar início </router-link>
  </div>
</template>

<script>
export default {
  name: "sendInformationComponent",
};
</script>

<style lang="scss" scoped>
.mensgem-send {
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 100px 0;
  flex-direction: column;
  img {
    max-width: 30%;
  }
}
</style>
>
