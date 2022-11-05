<script setup lang="ts">

</script>
<template>
    <nav>
        <div><img id="logo" src="/img/100_anniversary_logo.png" alt=""></div>
        <div id="link">

            <div class="links">主页</div>
            <div class="links">历史</div>
            <div class="links">师生</div>
        </div>
    </nav>
</template>
<style lang="less" scoped>
nav {
    z-index: 114514;

    position: fixed;
    top: 0;
    left: 0;
    height: 90px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;


    background-color: #165BA4;
}
#link {
    display: flex;

}

.links {
    margin: 5px;
}

#logo {
    margin-left: 20px;
    width: 80px;
}
</style>