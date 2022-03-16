<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div id="nav">
            <ul class="menu_ul">
              <li class="menu-item">
                <router-link to="/">
                  Главная
                </router-link>
              </li>
              <li class="menu-item"> 
                <router-link to="/add">
                  Предметы
                </router-link>   
              </li>
              <li class="menu-item">
                <router-link to="/schedule">
                  Расписание
                </router-link>  
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: "App"
}
</script>

<style>
#app {
  margin: auto;
  padding: 0;
  box-sizing: border-box;
}
#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.menu_ul {
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
}
.menu-about {
  margin-top: 15px;
}
.menu-item + .menu-item {
  margin-left: 50px;
}
a.router-link-exact-active {
  color: #5ed9e2;
} 
</style>
