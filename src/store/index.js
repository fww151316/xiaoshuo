import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        name:"你正在使用的版本已不再提供支持，为确保你的正常使用，请下载安装最新版<追书神器>。",
        id:0
    }
})

export default store