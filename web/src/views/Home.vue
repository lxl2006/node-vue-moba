<template>
  <div>
    <swiper>
      <swiper-slide :options="swiperOptions">
        <img src="../assets/images/2adc9cbbeecd8a41cdaadc10e002369e.jpeg" class="w-100" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/9cb500627642ffcba65d94a3e83b39d4.jpeg" class="w-100" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/fe06c0dd13dd85f7a6b3ca233f89faef.jpeg" class="w-100" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home" slot="pagination">123</div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      }
    };
  }
};
</script>

<style>
</style>