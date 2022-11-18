<template>
  <section>
    <div class="menu container">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/SVG/LOGO.svg" alt="Pack Beneficios" />
        </router-link>
      </div>
      <div class="button" @click="mobileActove = !mobileActove">
        <i
          class="uil"
          :class="[mobileActove ? 'uil-multiply' : 'uil-bars']"
        ></i>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/#porque_contratar">Por que contratar a Pack?</a>
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

    <Transition name="slide-fade">
      <div v-if="mobileActove" class="menu-mobile">
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
          <router-link to="login"
            ><button class="btn">Login</button></router-link
          >
        </div>
      </div>
    </Transition>
  </section>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      mobileActove: false,
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
  .menu-mobile {
    display: none;
    width: 100%;
    min-width: 390px;
    height: 100vh;
    background: white;
  }
  .menu {
    margin: 0 auto;
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .button {
      display: none;
    }
    .logo {
      width: 20%;
      text-align: left;
      img {
        width: 115px;
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
@media only screen and (max-width: 880px) {
  section {
    .menu {
      // display: none;
      padding: 20px 2%;
      .logo {
        padding: 0 5%;
        width: 70%;
        text-align: left;
      }
      .button {
        display: block;
        width: 30%;
        font-size: 2rem;
        cursor: pointer;
        text-align: right;
        // padding: 20px;
      }
      nav {
        display: none;
        width: 100%;
      }
      .action-end {
        display: none;
      }
    }
    .menu-mobile {
      display: block;
      // z-index: 101;
      max-width: 414px;
      position: absolute;
      right: 0;
      padding: 10px 3%;
      nav {
        width: 100%;
        padding: 5%;
        text-align: left;
        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 25px;
          // align-items: flex-start;
          li {
            border-bottom: 1px solid #69aa04;
            padding: 10px 0;
            a {
              color: #2a65c5;
              text-decoration: none;
            }
          }
        }
      }
      .action-end {
        width: 100%;
        .btn {
          width: 100%;
        }
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatey(100px);
  opacity: 0;
}
</style>
