<script setup lang="ts">

const props = defineProps<{
    year: number,
    title: string,
    body: string,
    icon?: string,
}>()

</script>
<template>
    <div class="card">
        <h2 class="title">{{props.title}}</h2>

        <div class="body">
            <img class="body-img" :src="props.icon" v-if="props.icon" />
            <p class="body-description">{{props.body}}</p>
        </div>
        <div class="ribbon">
            {{props.year}}
        </div>
    </div>
</template>
<style lang="less" scoped>
h2 {
    margin: 0;
}
.card {
    position: relative;
    background-color: #FFF;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 5px 5px 8px #555;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 30vw;
}
.ribbon {
    position: absolute;

    top: 26px;
    left: -38px;

    padding: 8px 65px 8px 65px;
    rotate: -45deg;
    
    color: white;
    font-weight: bold;

    background-image: url(/img/ribbon.svg);
    background-repeat: no-repeat;
    background-position: center;
}
.title {
    font-size: 40px;
    margin-bottom: 20px;
}
.body {
    display: flex;
    align-items: center;

    &-img {
        width: 100px;
        margin-right: 50px;
    }

    &-description {
        text-indent: 2em;
        font-size: 22px;
    }
}
</style>