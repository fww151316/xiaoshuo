
<template>
  <div  class='index'>
    <Header title="我的"></Header>
     <div id="content" v-if="showFlag">
      <div class="login_body">
        <div>
          <input class="login_text" type="text" placeholder="账户名/手机号/Email" />
        </div>
        <div>
          <input class="login_text" type="password" placeholder="请输入您的密码" />
        </div>
        <div class="login_btn">
          <input type="submit" value="登录" @click="gomine"/>
        </div>
        <div class="login_link">
          <a href="#">立即注册</a>
          <a href="#">找回密码</a>
        </div>
      </div>
      </div>

      <div class="deng" v-else>
        <mt-cell title="修改" is-link>
          <span style="color: green"></span>
        </mt-cell>
        <mt-cell title="退出登录" is-link @click.native="login">
          <span style="color: green"></span>
        </mt-cell>
      </div>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { setToken, getToken, removeToken } from "../../utils/auth";
export default {
  props: { // 父辈向子辈传参
  },
  name: 'index',
  data () {
    return {
        showFlag: true
    }
  },
  created () { // 实例被创建之后执行代码
      if(getToken()){
      this.showFlag = false
    }
    },
  computed: { // 计算属性

    },
  components: { // 组件的引用
     Header,
     Footer
    },
  methods: { // 方法
      gomine(){
        setToken("fww");
        this.showFlag = false
      },
      login(){
        removeToken();
        this.showFlag = true
      }
    },
  mounted () { // 页面进入时加载内容

    },
  watch: { // 监测变化

    }
}
</script>
<style scoped lang="scss">
#content .login_body {
  margin-top: 150px;
  width: 100%;
}
.login_body .login_text {
  width: 90%;
  height: 40px;
  border: none;
  border: 1px #999 solid;
  margin-bottom: 25px;
  outline: none;
  text-indent: 10px;
  margin-left: 20px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
.deng{
   margin-top: 55px;
}
</style>