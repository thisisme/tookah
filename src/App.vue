<template>
  <div id="app">
    <header class="header">
      <router-link
          to="/"
          class="navigation__link navigation__link--home">
          Tookah!
        </router-link>
      <nav class="navigation">
        <router-link
          to="/settings"
          class="navigation__link navigation__link--settings">
          Settings
        </router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
