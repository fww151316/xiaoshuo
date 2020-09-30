
<template>
  <div class="book">
    <Book></Book>
    <div class="case">
      <img :src="img" />
      <div>
        <h3>{{list.title}}</h3>
        <p>{{list.author}}</p>
        <i>{{list.majorCate}}</i>
      </div>
      <div class="fen">
        <h3>评分</h3>
        <i>{{fen}}</i>
      </div>
    </div>

    <div>
      <button class="add" @click="setid">加入书架</button>
      <button class="begin" @click="golist">开始阅读</button>
    </div>
    <!-- 简介 -->
    <div class="brief">{{list.longIntro}}</div>

    <mt-cell title="目录" is-link @click.native="golist">
      <span style="color: #666;font-size: 12px;">{{list.lastChapter}}</span>
    </mt-cell>
  </div>
</template>

<script>
import Book from "../../components/Book";
import { Toast, MessageBox } from "mint-ui";
import { setToken2, getToken } from "../../utils/auth";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "book",
  data() {
    return {
      list: [],
      img_base_url: "https://statics.zhuishushenqi.com",
      img: "",
      fen: ""
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.book();
    // this.getid();
    // this.mu();
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
    Book
  },
  methods: {
    // 方法
    book() {
      // alert(this.$route.params.id)
      this.$http.get("/book/" + this.$route.params.id).then(res => {
        // console.log(res);
        this.list = res;
        this.img = this.img_base_url + this.list.cover;
        this.fen = this.list.rating.score;
      });
    },

    // 取原来的id用于获取目录
    golist() {
      this.$http
        .get("/btoc?view=summary&book=" + this.$route.params.id)
        .then(res => {
          this.$router.push({
            path: "/list/" + res[0]._id
          });
        });
    },

    // cookie存ID
    setid() {
      if (getToken()) {
        let instance = Toast({
          message: "添加成功"
        });
        setTimeout(() => {
          instance.close();
        }, 1000);
        setToken2(this.$route.params.id, this.$route.params.id);
      } else {
        // alert(111);
        MessageBox.confirm("您尚未登录，是否前往登录?").then(action => {
          console.log(action);
          if (action == "confirm") {
            this.$router.push({
              path: "/mine"
            });
          }
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
<style scoped lang='scss'>
.case {
  margin-top: 10px;
  height: 100px;
  display: flex;
  img {
    width: 70px;
    height: 90px;
    margin-left: 20px;
    margin-right: 15px;
  }
  h3 {
    font-size: 16px;
    font-weight: 900;
    line-height: 30px;
  }
  p {
    font-size: 15px;
    color: #666;
    line-height: 30px;
  }
  i {
    font-size: 14px;
    color: rgb(236, 124, 59);
  }
  .fen {
    height: 100px;
    width: 80px;
    position: absolute;
    right: 0;
    top: 60px;
    text-align: center;
    h3 {
      font-size: 14px;
    }
    i {
      font-size: 18px;
      color: red;
    }
  }
}
.add {
  width: 145px;
  height: 40px;
  border: #b93321 1px solid;
  font-size: 16px;
  color: #b93321;
  margin: 10px 20px 0 20px;
}
.begin {
  width: 145px;
  height: 40px;
  background: #b93321;
  color: #fff;
  font-size: 16px;
  margin: 10px 20px 0 20px;
}
.brief {
  width: 88%;
  height: 80px;
  margin: 20px 0;
  font-size: 14px;
  line-height: 20px;
  margin-left: 20px;
  overflow: hidden;
}
</style>