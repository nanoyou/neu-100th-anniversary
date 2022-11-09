<script setup lang="ts">
import { reactive, ref } from 'vue';
import Page1 from './SciencePage/Page1.vue';

const current = ref(0)
const pages = reactive([
    {
        id: 0,
        comp: Page1,
    },
])

</script>
<template>

<div class="wrap">
    <div class="inner">
        <div class="left button">
            <img src="/img/science/left_triangle_button.svg" alt="">
        </div>
        <div class="main">
            <section v-for="{id, comp} in pages" v-show="id == current">
                <component :is="comp" />
            </section>
        </div>
        <div class="right button">
            <img src="/img/science/right_triangle_button.svg" alt="">
        </div>
    </div>
</div>

</template>
<style lang="less" scoped>
.wrap {
    width: 100%;
    height: 100%;
}
.inner {
    width: 100%;
    height: 100%;
    margin-top: 20px;

    display: flex;

    align-items: center;
    justify-content: center;
}
.left {
    // background-color: red;
}
.right {
    // background-color: aqua;
}
.left, .right {
    margin: 0 10vw 0 10vw;
}
.main {
    flex: 1;
    // background-color: yellow;
    // height: 100%;
}
.button {
    width: 100px;
}
</style>