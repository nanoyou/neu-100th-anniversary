<script setup lang="ts">
import Main from './Main.vue'
import History from './History.vue'
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import Bus from '../bus'

const fullPage = ref()
const sections = computed(() => fullPage.value.querySelectorAll('section'))
let currentPage = 0
let isScrolling = false
onMounted(() => {
    document.body.addEventListener('mousewheel', handler)
    document.body.addEventListener('DOMMouseScroll', handler)
})

function moveToPage(index: number) {
    if (isScrolling) {
        return false
    }
    isScrolling = true
    const height = document.body.clientHeight * index
    fullPage.value.style.transform = `translateY(-${height}px)` 
    currentPage = index

    setTimeout(() => {
        isScrolling = false
    }, 800)
}
function moveToPageWithID(id: string) {
    for (let i = 0; i < sections.value.length; i++) {
        if (sections.value[i].id == `section-${id}`) {
            moveToPage(i)
            return
        }
    }
}

function next() {
    console.log("next")
    if (currentPage + 1 >= sections.value.length) {
        return
    }
    moveToPage(currentPage + 1)
}

function prev() {
    console.log("prev")
    if (currentPage == 0) {
        return
    }
    moveToPage(currentPage - 1)
}
Bus.on('full-page-next', next)
Bus.on('full-page-prev', prev)
Bus.on('full-page-to', moveToPageWithID)

function handler(event: any) {
    console.log("handler")
    if (event.stopPropagation) {
        event.stopPropagation()
    } else {
        event.returnValue = false
    }

    console.log(isScrolling)
    const e = event.originalEvent || event
    const deltaY = e.deltaY || e.detail
    console.log(deltaY)
    if (deltaY > 0) {
        next()
    } else {
        prev()
    }
}

</script>
<template>
    <div class="wrap">
    <div id="full-page" ref="fullPage">
        <section id="section-main">
            <Main />
        </section>
        <section id="section-history">
            <History />
        </section>
    </div>
    </div>
</template>
<style lang="less" scoped>
.wrap {
    height: 100vh;
    overflow: hidden;
}
#full-page {
    height: 100%;
    width: 100%;

    transition: all linear 0.5s;
}
section {
    height: 100vh;
}
</style>