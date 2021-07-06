<template>
  <div id="app">
<b-navbar toggleable="lg" type="dark" variant="danger">
<b-container>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{name: 'Home'}">Hello Shop</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'Clients'}">Clients</b-nav-item>
            <b-nav-item :to="{name: 'Proveidors'}">Proveïdors</b-nav-item>
            <b-nav-item :to="{name: 'Magatzem'}">Magatzem</b-nav-item>
            <b-nav-item :to="{name: 'Botiga'}">Botiga</b-nav-item>
        </b-navbar-nav>

        </b-collapse>
</b-container>
</b-navbar>

  
      <b-container class="mt-5">
          <transition name="router-anim">
            <router-view/>
          </transition>
      </b-container>

  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
  }
  to {
    opacity: 0;
  }
}
@keyframes coming {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>