<template>
  <section>
    <div class="menu container">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/SVG/LOGO.svg" alt="Pack Beneficios" />
        </router-link>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/#porque_contratar">Porque contratar a Pack??</a>
          </li>
          <li>
            <a href="/#como_funciona">Como funciona?</a>
          </li>
          <li v-for="(menu, index) in menus" :key="index">
            <router-link :to="menu.path">{{ menu.name }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="action-end">
        <router-link to="quero_contratar">Quero contratar</router-link>
        <router-link to="login"><button class="btn">Login</button></router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menus: [
        {
          name: "Perguntas frequentes",
          path: "perguntas_frequentes",
        },
        {
          name: "Blog",
          path: "blog",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  background: white;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  .menu {
    margin: 0 auto;
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 20%;
      text-align: left;
      img {
        width: 150px;
      }
    }
    nav {
      width: 60%;
      ul {
        list-style: none;
        display: flex;
        gap: 25px;
        align-items: flex-start;
        li {
          a {
            color: #2a65c5;
            text-decoration: none;
          }
        }
      }
    }
    .action-end {
      width: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        width: 50%;
        text-decoration: none;
        color: #2a65c5;

        .btn {
          width: 100%;
          background: none;
          border-radius: 5px;
          color: #69aa04;
          border: 1px solid #69aa04;
        }
      }
    }
  }
}
</style>
