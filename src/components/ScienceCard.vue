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
            {{props.time}}
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
    margin-top: 20px;

    font-size: 26px;
}
.content {
    display: flex;
    flex-direction: column;
    margin: 35px;
    &-text {
        text-indent: 2em;
        font-size: 19px;
    }
}
</style>