<template>
  <Transition name="slide-fade">
    <router-view />
  </Transition>
</template>

<style lang="scss">
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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
:target {
  scroll-margin-top: 0.8em;
}

html {
  scroll-behavior: smooth;
}
body {
  background: #f6f8fa;
}
.container {
  width: 100%;
  max-width: 1386px;
  margin: 0 auto;
}
.btn {
  width: 100%;
  padding: 15px;
  border: none;
  text-align: center;
  cursor: pointer;
  background: #69aa04;
  color: white;
}
.blue-blackGround {
  width: 100%;
  background: #133c7e;

  margin: 0 auto;
}
</style>
