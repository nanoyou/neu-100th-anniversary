<script setup lang="ts">
const props = defineProps<{
    title?: string,
    time?: string,
    content?: string[],
}>()
</script>
<template>
    <div class="card">
        <h2 v-if="props.title" class="title">{{props.title}}</h2>
        <div v-if="props.time" class="time">
            <div class="time-content">
                {{props.time}}
            </div>
        </div>
        <div v-if="props.content" class="content">
            <div class="content-text" v-for="p in props.content">
                {{p}}
            </div>
        </div>
        <slot>

        </slot>
    </div>
</template>
<style lang="less" scoped>
.card {
    position: relative;
    border: 12px solid #F1F1F1;
    border-radius: 4px;
    box-shadow: 4px 4px 8px #888;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title {
    margin-bottom: 0;
    margin-top: 30px;

    font-size: 26px;
}
.content {
    display: flex;
    flex-direction: column;
    margin: 35px;
    &-text {
        text-indent: 2em;
        font-size: 19px;
        line-height: 25px;
    }
}
.time {
    position: absolute;
    top: 26px;
    left: -59px;

    background-image: url(/img/science/azure_libbon.svg);
    background-size: cover;

    color: white;
    font-weight: bold;

    width: 160px;
    padding: 5px 20px 5px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotate(-45deg);
}
</style>