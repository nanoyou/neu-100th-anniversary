<script setup lang="ts">
import { reactive, ref } from 'vue';
import Page1 from './SciencePage/Page1.vue';
import Page2 from './SciencePage/Page2.vue';

const current = ref(0)
const pages = reactive([
    {
        id: 0,
        comp: Page1,
    }, {
        id: 1,
        comp: Page2,
    }
])
function next() {
    let nextPage = current.value + 1
    if (nextPage == pages.length) {
        nextPage = 0
    }

    current.value = nextPage
}
function prev() {
    let prevPage = current.value - 1
    if (prevPage == -1) {
        prevPage = pages.length - 1
    }

    current.value = prevPage
}
</script>
<template>

<div class="wrap">
    <div class="inner">
        <div class="left button" @click="prev">
            <img src="/img/science/left_triangle_button.svg" alt="">
        </div>
        <div class="main">
            <section v-for="{id, comp} in pages" v-show="id == current">
                <component :is="comp" />
            </section>
        </div>
        <div class="right button" @click="next">
            <img src="/img/science/right_triangle_button.svg" alt="">
        </div>
    </div>
</div>

</template>
<style lang="less" scoped>
.wrap {
    width: 100%;
    height: 100%;

    background-color: #FEFEFE;
}
.inner {
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;

    align-items: center;
    justify-content: center;
}
.main {
    flex: 1;
    // background-color: yellow;
    // height: 100%;
}
.left {
    margin-left: 100px;
}
.right {
    margin-right: 100px;
}
.button {
    // margin: 0 7vw 0 7vw;
    width: 80px;
    
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }
}
</style>