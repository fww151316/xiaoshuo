
<template>
  <div class="index">
    <header id="book">
      <mt-header title="目录" id="ti">
        <router-link to slot="left">
          <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
        </router-link>
      </mt-header>
    </header>
    <div class="kong"></div>
    <ul v-infinite-scroll="getlist" infinite-scroll-disabled="loading" infinite-scroll-distance="20">
      <mt-cell :title="item.title" v-for="item in list" :key="item._id" @click.native="gocont"></mt-cell>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "index",
  data() {
    return {
      list: [],
      link: "",
      t:0,
      f:40,
      s:0,
    };
  },
  created() {
    // 实例被创建之后执行代码
    // this.getlist();
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    getlist() {
      this.loading = true;
      this.$http
        .get("/atoc/" + this.$route.params.id + "?view=chapters")
        .then(res => {
          this.s = res.chapters.length
          for(var i =this.t; i<this.f;i++){
              this.list.push(res.chapters[i])
          }
          this.t += 40;
        if (this.s > this.f + 40) {
          this.f += 40;
          this.loading = false;
        } else {
          this.f = this.s;
        }
        });
    },

    gocont() {
      console.log(this.link);
      this.$router.push({
        path: "/cont"
      });
    }
  },
  mounted() {
    // 页面进入时加载内容
  },
  watch: {
    // 监测变化
  }
};
</script>
<style scoped lang='scss'>
#book .mint-header {
  width: 100%;
  height: 50px;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: fixed;
  top: 0;
  z-index: 2;
}
#ti {
  font-size: 18px;
}
.kong {
  height: 50px;
}
</style>