<template>
  <div class="root">
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
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-2 d-flex flex-wrap text-center ai-center">
      <div class="nav-item text-grey mb-3 mt-2" v-for="n in 12" :key="n">
        <i class="sprite" :class="sprite_arr[n-1][1]"></i>
        <div class="mt-1" v-text="sprite_arr[n-1][0]"></div>
      </div>
    </div>
    <!-- end of nav_icon -->
    <!-- 新闻资讯展示 -->
    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newsList">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${item._id}`"
          class="py-2 fs-xl d-flex"
          v-for="(item, i) in category.newsList"
          :key="i"
        >
          <span class="text-info">[{{item.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark text-ellipsis">{{item.title}}</span>
          <span class="text-grey">{{item.createdAt | day_month}}</span>
        </router-link>
      </template>
    </m-list-card>
    <!-- 英雄列表展示 -->
    <m-list-card icon="card-hero" title="英雄列表" :categories="heroList">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <div class="p-2" style="width: 20%;" v-for="(item, i) in category.heroList" :key="i">
            <router-link tag="div" 
            :to="`/heroes/${item._id}`" 
            class="hero text-center">
              <img :src="item.avator" :alt="item.name" style="width: 60px; height: 60px" />
              <div>{{item.name}}</div>
            </router-link>
          </div>
        </div>
      </template>
    </m-list-card>
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  filters: {
    day_month(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      // 精灵图图标数组
      sprite_arr: [
        ["爆料站", "sprite-new"],
        ["故事站", "sprite-story"],
        ["周边商城", "sprite-mall"],
        ["体验服", "sprite-experience"],
        ["新人专区", "sprite-rookie"],
        ["荣耀传承", "sprite-honor"],
        ["王者营地", "sprite-camp"],
        ["公众号", "sprite-publicMedia"],
        ["版本介绍", "sprite-version"],
        ["对局环境", "sprite-environment"],
        ["无限王者团", "sprite-team"],
        ["创意互动", "sprite-intereaction"]
      ],
      newsList: [],
      heroList: []
    };
  },
  methods: {
    async fetchNewsList() {
      const { data: list } = await this.axios.get("/news/list");
      this.newsList = list;
    },
    async fetchHeroList() {
      const { data: list } = await this.axios.get("/heroes/list");
      this.heroList = list;
    }
  },
  created() {
    this.fetchNewsList();
    this.fetchHeroList();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
// nav-icons
.nav-icons {
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
// sprite
.sprite {
  background: url("../assets/images/sprite.png") no-repeat 0 0;
  background-size: 28.8462rem;
  display: inline-block;
  &.sprite-new {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 63.546% 15.517%;
  }
  &.sprite-story {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 90.483% 15.614%;
  }
  &.sprite-mall {
    width: 1.4615rem;
    height: 1.6923rem;
    background-position: 36.746% 0.924%;
  }
  &.sprite-experience {
    width: 1.7692rem;
    height: 1.6154rem;
    background-position: 10.408% 15.517%;
  }
  &.sprite-rookie {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 89.733% 1.266%;
  }
  &.sprite-honor {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 36.467% 15.287%;
  }
  &.sprite-camp {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 63.3% 0.927%;
  }
  &.sprite-publicMedia {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 0 96.207%;
  }
  &.sprite-version {
    width: 1.8462rem;
    height: 1.8462rem;
    background: url("../assets/images/version-icon.png");
    background-size: 1.8462rem;
    background-position: 33.333% 33.333%;
  }
  &.sprite-environment {
    width: 2.6154rem;
    height: 1.6154rem;
    background: url("../assets/images/djhj.png");
    background-size: 2.6154rem 1.6154rem;
    background-position: 0 0;
  }
  &.sprite-team {
    width: 2.4615rem;
    height: 0.6923rem;
    background: url("../assets/images/wxwzt.png");
    background-size: 2.4615rem 0.6923rem;
    background-position: 0 0;
  }
  &.sprite-intereaction {
    width: 1.6154rem;
    height: 1.4615rem;
    background: url("../assets/images/cyhdy.png");
    background-size: 1.8462rem 1.8462rem;
    background-position: 50% 50%;
  }
}
.nav-icons {
  align-items: baseline;
}
</style>>