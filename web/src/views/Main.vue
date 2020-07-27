<template>
  <div class="main">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30">
      <div class="pl-2 flex-grow-1">
        <div class="text-white fs-lg">王者荣耀</div>
        <div class="text-dark-1 fs-xxs">团队成就更多</div>
      </div>
      <button class="btn bg-primary px-2 py-2">立即下载</button>
    </div>
    <div class="bg-primary pb-2 pt-3">
      <div class="nav nav-inverse ai-center jc-around">
        <div class="nav-item active">
          <router-link tag="div" to="">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" to="">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" to="">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .topbar {
    position: sticky;
    top: 0;
    z-index: 10;
  }
</style>