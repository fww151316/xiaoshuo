
<template>
  <div class="index">
    <Header title="排行"></Header>
    <mt-search v-model="value" cancel-text="搜索" placeholder="搜索" @click.native="goscout"></mt-search>
    <h3>排行榜</h3>

    <router-link tag="p" to="/hot">
      <span class="iconfont icon-weibiaoti--" ></span>追书最热榜
    </router-link>

    <router-link tag="p" to="/opinion">
      <span class="iconfont icon-haoping"></span>好评榜
    </router-link>
    <router-link tag="p" to="/search">
      <span class="iconfont icon-xingzhuang"></span>热搜榜
    </router-link>
    <router-link tag="p" to="/latent">
      <span class="iconfont icon-qianlishangjiashu"></span>潜力榜
    </router-link>
    <router-link tag="p" to="/end">
      <span class="iconfont icon-wanjie"></span>完结榜
    </router-link>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "index",
  data() {
    return {
      value: ""
    };
  },
  created() {
    // 实例被创建之后执行代码
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
    Header,
    Footer
  },
  methods: {
    goscout(){
      this.$router.push({
        path:'/scout'
      })
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
.mint-search {
  padding-top: 50px;
  height: 50px;
}
h3 {
  font-size: 30px;
  margin-left: 145px;
  line-height: 70px;
  color: #f03d37;
  font-weight: 900;
}
p {
  width: 340px;
  line-height: 45px;
  font-size: 22px;
  margin-bottom: 10px;
  margin-left: 30px;
}
.icon-weibiaoti-- {
  color: #f03d37;
  font-size: 22px;
  margin-right: 5px;
}
.icon-haoping {
  color: #8fe032;
  font-size: 22px;
  margin-right: 5px;
}
.icon-xingzhuang{
  color: red;
  font-size: 22px;
  margin-right: 5px;
}
.icon-qianlishangjiashu{
  color: red;
  font-size: 22px;
  margin-right: 5px;
}
.icon-wanjie{
  color: #000;
  font-size: 22px;
  margin-right: 5px;
}
</style>