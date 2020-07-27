<template>
  <div class="page-article">
    <div class="d-flex ai-baseline px-1 py-3 border-bottom">
      <div class="iconfont icon-back fs-sm flex-1 text-blue text-bold" v-cloak>{{article.title}}</div>
      <div class="text-grey fs-sm">2020-07-23</div>
    </div>
    <div v-html="article.body" class="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
      article: {}
    };
  },
  methods: {
    async fetchArticle() {
      const { data: res } = await this.axios.get(`/articles/${this.id}`);
      this.article = res;
    }
  },
  created() {
    this.fetchArticle();
  }
};
</script>

<style lang="scss">
.page-article {
  .content {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>