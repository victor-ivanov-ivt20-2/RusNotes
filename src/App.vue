<script setup>
import Schedule from './components/Schedule.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
<!-- Шапка сайта -->
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div id="nav">
          <ul class="menu_ul">
            <li class="menu-item"> <a href="">Главная</a> </li>
            <li class="menu-item"> <a href="">Предметы</a> </li>
            <li class="menu-item"> <a href="">Записи</a> </li>
          </ul>
        </div>
      </div>
    </div>    
  </header>
  <div class="main__content">
    <div class="container">
      <Schedule/>
    </div>
  </div>
  
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #202020;
  overflow-y: scroll;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 600;
  color: #fff;
}
.main__content {
  margin-top: 50px;
}
li {
  list-style-type: none;
}
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
header {
  background-color: #202020;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}
.menu_ul {
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  margin-top: 15px;
  margin-right: 10px;
}
.menu-about {
  margin-top: 15px;
}
.menu-item + .menu-item {
  margin-left: 50px;
}
a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: #aaa;
}
</style>
