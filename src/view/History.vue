<script setup lang="ts">
import { ref } from 'vue';


const currentCard = ref()
</script>
<template>
    <div id="history">
        <aside>
            轴
        </aside>
        <main>
            <component :is="currentCard" />
        </main>
    </div>
</template>
<style lang="less" scoped>
#history {
    height: 100%;
    background-color: gray;
    
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>