<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{
    name: string,
    id: string,    
    selected: boolean,
}>()

const a = ref()
watch(props, () => {
    if (props.selected) {
        a.value.classList.add('selected')
    } else {
        a.value.classList.remove('selected')
    }
})
onMounted(() => {

    if (props.selected) {
        a.value.classList.add('selected')
    }
})

function click(e: Event) {
}
</script>
<template>
    <a ref="a" :href="`#${id}`" class="link" @click.prevent="click">{{props.name}}</a>
</template>
<style lang="less" scoped>
.link {
    color: #FFF;
    font-size: 23px;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    padding: 20px;
    
    &:hover {
        background-color: rgb(60, 50, 46);
        color: rgb(255, 116, 35);
    }
}
.selected.link::after {

        content: "";
        height: 4px;
        overflow: hidden;
        display: block;
        left: 0;
        bottom: 0px;
        position: absolute;
        width: 100%;
        background: #FBFBFB;
        transform: scaleX(1);
    }
</style>