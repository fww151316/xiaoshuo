
<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/home">
        <span class="iconfont icon-index"></span>
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/rank">
        <span class="iconfont icon-paixing"></span>
        <p>排行</p>
      </router-link>
      <li @click="gobookcase">
        <span class="iconfont icon-shujia"></span>
        <p>书架</p>
      </li>
      <router-link tag="li" to="/mine">
        <span class="iconfont icon-wodedangxuan"></span>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
import { getToken } from "../utils/auth";
import { MessageBox } from "mint-ui";
export default {
  props: {
    // 父辈向子辈传参
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
    gobookcase() {
      if (getToken()) {
        this.$router.push({
          path: "/bookcase"
        });
      } else {
        MessageBox.alert("尚未登录，请前往登录!").then(action => {
          if (action)
            this.$router.push({
              path: "/mine"
            });
        });
      }
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
#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer ul .router-link-active {
  color: #f03d37;
}
#footer ul span {
  font-size: 20px;
}
#footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>