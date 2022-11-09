<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';


const images = reactive([
    {
        url: '/img/scene/1.jpg',
    }, {
        url: '/img/scene/2.jpg',
    }, {
        url: '/img/scene/3.jpg',
    }, {
        url: '/img/scene/4.jpg',
    }, {
        url: '/img/scene/5.jpg',
    }
])
const currentImage = ref(0)
const imageBar = ref()
const deltaX = computed(() => imageBar.value ? currentImage.value * imageBar.value.scrollWidth / images.length : 0)
onMounted(() => currentImage.value = 0)
// setTimeout(() => currentImage.value = 1 , 1000)
function nextImage() {
    let length = currentImage.value + 1
    if (length >= images.length) {
        length = 0
    }
    currentImage.value = length
}
function switchTo(index: number) {
    clearInterval(handle)

    currentImage.value = index

    handle = setInterval(nextImage, 3000)
}
let handle = setInterval(nextImage, 3000)

</script>
<template>
    <div class="wrap">
        <div class="background" :style="`background-image: url(/neu-100th-anniversary/${images[currentImage].url})`"></div>
        <div class="frame">
            <div ref="imageBar" class="img" :style="`transform: translateX(-${deltaX}px)`">
                <div v-for="{url} in images" class="image-wrap">
                    <img :src="url" alt="">
                </div>
            </div>
        </div>

        <div class="button-group">
            <div v-for="i in images.length">
                <div class="button" :class="i - 1 == currentImage ? 'button-activated' : ''" @click="() => switchTo(i-1)"></div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.wrap {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
}
.background {
    position: absolute;
    z-index: -114514;

    background-size: cover;
    left: -1vw;
    top: -1vh;
    height: 102%;
    width: 102%;

    filter: blur(8px);
}
.frame-border {
    position: absolute;
    top: 0;
    left: 0;
    
    background-color: white;
    height: calc(3vh * 20);
    width: calc(4vh * 20);
    z-index: 100;

    // transform: translate(50%, 50%);

}
img {
    height: 100%;
}
.frame {
    position: relative;

    overflow: hidden;

    width: calc(4vh * 20);
    
    border: 20px solid white;
    border-radius: 2px;

    box-shadow: 5px 5px 8px #111;
    margin-top: 60px;
}

.image-wrap {
    height: 100%;

    height: calc(3vh * 20);
    width: calc(4vh * 20);
}
.img {
    height: 100%;
    width: 100%;
    display: flex;

    transition: all 0.5s;
}

.button-group {
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
}
.button {
    width: 20px;
    height: 20px;
    margin: 10px;

    background-color: #FEFEFE;
    border-radius: 50%;
    opacity: 0.4;

    box-shadow: 1px 1px 6px #333;
    &:hover {
        cursor: pointer;
        height: 18px;
        width: 18px;
        margin: 11px;
    }
    &-activated {
        opacity: 1;
    }
}
</style>