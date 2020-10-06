<!-- 内容页面 -->
<template>
  <div  class='index'>
      <header id="book">
      <mt-header title="内容" id="ti">
        <router-link to slot="left">
          <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
        </router-link>
      </mt-header>
    </header>
    <div class="kong"></div>
    <div class="zhi">
      {{$store.state.name}}
    </div>
    
  </div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'index',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码
      // this.getcont()
    },
  computed: { // 计算属性

    },
  components: { // 组件的引用

    },
  methods: { // 方法
        // getcont(){
        //   console.log(this.$route)
        //   this.$http.get("/chapter/5817f1161bb2ca566b0a5973?cv=1481275033588").then(res => {
        //     console.log(res)
        //   })
        // }

    },
  mounted () { // 页面进入时加载内容

    },
  watch: { // 监测变化

    }
}
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
.zhi{
  width: 80%;
  margin-left: 10%;
  margin-top: 50%;
  font-size: 25px;
  line-height: 40px;
  color: rgb(245, 100, 100);
}
</style>