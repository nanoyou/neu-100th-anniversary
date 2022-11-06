<script setup lang="ts">
import { reactive } from 'vue'
import { bus } from '../bus'
import NavLink from '../components/NavLink.vue'
const links = reactive([
    {
        name: "百年校庆",
        id: "main",
        selected: true,
    }, {
        name: "东大历史",
        id: "history",
        selected: false,
    }, {
        name: "校园风采",
        id: "",
        selected: false,
    }, {
        name: "师生风貌",
        id: "",
        selected: false,
    }, {
        name: "科研成果",
        id: "",
        selected: false,
    }, {
        name: "要闻在线",
        id: "",
        selected: false,
    }
])
bus.on('full-page-moved-to', (index: number) => {
    links.forEach(link => link.selected = false)
    links[index].selected = true
})
</script>
<template>
    <nav>
        <div><img id="logo" src="/img/neu_en_1_logo.png" alt=""></div>
        <div id="link">
            <NavLink v-for="{name, id, selected} in links" :name="name" :id="id" :selected="selected" />
        </div>
    </nav>
</template>
<style lang="less" scoped>
nav {
    z-index: 114514;

    position: fixed;
    top: 0;
    left: 0;
    height: 75px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;


    background-color: #1F1A17;
}
#link {
    display: flex;
    justify-content: end;
    flex: 1;
    margin-right: 8vw;
}


#logo {
    margin-left: calc(8vw - 20px);
    margin-top: 5px;
    width: 100px;
}
</style>