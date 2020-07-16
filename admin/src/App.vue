<template>
  <div id="app">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<style>
html,body {
  margin: 0;
  padding: 0;
}
</style>
