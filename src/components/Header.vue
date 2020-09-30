
<template>
  <div class="header">
    <header id="header">
      <h1>追书神器</h1>
      <h3>{{title}}</h3>
      <span class="iconfont icon-wodedangxuan" @click="gomine"></span>
    </header>
  </div>
</template>

<script>
export default {
   props: {
    // 父辈向子辈传参
    title:{
        type:String,
        default:"首页"
    }
  },
  data() {
    return {};
  },
  created() {
    // 实例被创建之后执行代码
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    gomine(){
      this.$router.push({
        path: "/mine"
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
<style scoped>
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position:fixed;
  top: 0px;
  z-index: 2;
  display: flex;
  justify-content: space-around;
}
#header h1 {
  font-size: 18px;
  line-height: 50px;
  font-weight: normal;
}
#header h3{
 font-size: 18px;
  line-height: 50px;
}
#header span{
 font-size: 18px;
  line-height: 50px;
}

</style>