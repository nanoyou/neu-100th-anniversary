<script setup lang="ts">

</script>
<template>
    <div class="main">
        <img class="logo" src="/img/100_anniversary_logo_without_moji.png" alt="" />
        <h1>东北大学 百年校庆</h1>
        <h2>百年沧桑，欣逢盛世。满天桃李，共庆华诞。</h2>
    </div>
</template>
<style lang="less" scoped>
.main {
    background-image: url(img/neu_nanhu_night_scene.png);
    background-size: cover;

    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

h1, h2 {
    margin: 0;
    color: white;
}
h1 {
    font-size: 100px;
    text-shadow: 10px 10px 10px #333;
    margin-top: 30px;
}    
h2 {
    font-size: 30px;
    text-shadow: 10px 10px 10px #333;
    margin-top: 30px;
}
.logo {
    width: 450px;

    // margin-top: 50px;
}
</style>