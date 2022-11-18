<template>
  <section class="footer">
    <div class="logo">
      <img src="../../assets/SVG/LOGO.svg" alt="Pack Beneficios" />
    </div>
    <div class="menus">
      <div class="menu">
        <h3>Soluções</h3>
        <ul>
          <li>
            <router-link to="/">Regulamento</router-link>
          </li>
        </ul>
      </div>
      <div class="menu">
        <h3>Ajuda</h3>
        <ul>
          <li>
            <router-link to="/perguntas_frequentes"
              >Perguntas Frequentes</router-link
            >
          </li>
        </ul>
      </div>
      <div class="menu">
        <h3>Fale conosco</h3>
        <ul>
          <li>
            <a href="mail::suporte@packbeneficios.com.br" target="_blank"
              >suporte@packbeneficios.com.br</a
            >
          </li>
          <li>
            <a href="tel::3484327927" target="_blank">(34) 8432-7928</a>
          </li>
        </ul>
      </div>
      <div class="menu">
        <h3>Baixar App DocWay</h3>
        <ul>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.docway"
              ><img src="../../assets/IMAGES/AppStore.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.docway"
              ><img src="../../assets/IMAGES/GooglePlay.png" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped lang="scss">
.footer {
  border-top: 2px solid #69aa04;
  width: 100%;
  max-width: 1296px;
  padding: 50px 2%;
  margin: 0 auto;
  text-align: left;
  .menus {
    // max-width: 980px;
    margin: 50px auto;
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    .menu {
      flex: 1 1 250px;
      color: #2a65c5;
      h3 {
        font-size: 1.5rem;
      }
      ul {
        list-style-type: none;
        display: flex;
        row-gap: 30px;
        margin-top: 20px;
        flex-direction: column;
        li {
          a {
            color: #2a65c5;
            font-size: 1.3rem;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
