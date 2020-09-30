
<template>
  <div class="Book">
    <header id="book">
      <mt-header title="书籍详情" id="ti">
        <router-link to="" slot="left">
          <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
        </router-link>
      </mt-header>
    </header>
  </div>
</template>

<script>
export default {
  props: {
   
  },
  name: "Book",
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
#book .mint-header{
  width: 100%;
  height: 50px;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  
}
#ti{
    font-size: 18px;
}
</style>