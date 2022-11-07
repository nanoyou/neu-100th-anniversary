<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
    data: {
        id: number,
        detailedYear: string,
        detailedMonth: string,
        title: string,
        enabled: boolean,
    }[],
}>()

const emit = defineEmits<{
    (event: 'click', id: number): void,
}>()

const selected = ref(props.data.map(line => line.enabled ? 'selected' : ''))
watch(props, () => {
    selected.value = props.data.map(line => line.enabled ? 'selected' : '')
})

function click(id: number) {
    emit('click', id)
}
</script>
<template>
    <div class="axis">
        <div class="axis-line"></div>
        <div class="axis-content">
            <div class="axis-content-selection" v-for="item in data">
                <div class="detail">
                    <div class="year">{{item.detailedYear}}</div>
                    <div class="month">{{item.detailedMonth}}</div>
                </div>
                <div class="button" :class="selected[item.id]" @click="() => click(item.id)">

                </div>
                <div class="title">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.axis {
    position: relative;

    height: 100vh;

    &-line {
        position: absolute;
        background-color: rgb(215, 226, 235);
        height: 100%;
        width: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    &-content {
        position: absolute;
        top: 50%;
        left: 50%;
        
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        &-selection {
            display: flex;
            align-items: center;

            color: rgb(127, 127, 127);
            font-weight: bold;
            font-size: 20px;

            margin-bottom: 20px;
        }
    }
}

.detail {
    display: flex;
    justify-content: space-between;
}
.detail, .title {
    width: 115px;
}

.button {
    border-radius: 50%;
    background-color: rgb(251, 251, 251);
    box-shadow: 0 0 0 2px rgb(72, 164, 223);

    height: 20px;
    width: 20px;
    margin: 0 20px 0 20px;

    transition: all 0.5s;
}
.button.selected {
    background-color: rgb(72, 164, 223);
    box-shadow: 0 0 0 2px rgb(251, 251, 251);
}
</style>