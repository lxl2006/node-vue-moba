<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30" />
      <div class="pl-2 flex-grow-1">
        <div class="text-white fs-lg">王者荣耀</div>
        <div class="text-dark-1 fs-xxs">团队成就更多</div>
      </div>
      <router-link to="/" class="text-white d-flex ai-center">
        <span class="pr-2 fs-sm">更多英雄</span>
        <span class="fs-xxl">&gt;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  }
};
</script>

<style>
</style>