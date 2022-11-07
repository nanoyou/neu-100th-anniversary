<script setup lang="ts">
import { reactive, ref } from 'vue';
import HistoryCard from '../components/HistoryCard.vue'

const cards = reactive([
    {
        year: 1922,
        title: '学府筹办',
        body: '1922年春，张作霖委派时任奉天省长兼财政厅长王永江筹办东北大学。同年，成立东北大学筹备委员会，原国立沈阳高等师范学校改办为东北大学理工科，原文学专门学校（原奉天法政学堂）改办为东北大学文法科。校长由王永江兼任，学生480余人。文法科设中国文学系、英文学系、俄文学系、法律学系、政治学系；理工科设数学系、物理学系、化学系、土木工学系，机械学系，并成立东北大学筹委会。',
        icon: undefined,

        detailYear: '1922年',
        detailMonth: '春季',

        enabled: false,
    }, {
        year: 1923,
        title: '东大之印',
        body: '1923年4月19日，奉天省公署颁发“东北大学之印”，4月26日正式启用，东北大学宣告成立，时任奉天省省长王永江为首任校长。',
        icon: '/img/neu_stamp.png',

        detailYear: '1923年',
        detailMonth: '4月',

        enabled: true,
    }
])
</script>
<template>
    <div id="history">
        <aside>
            轴
        </aside>
        <main>
            <HistoryCard v-for="{year, title, body, icon, enabled} in cards" v-show="enabled" :year="year" :title="title" :body="body" :icon="icon" />
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
aside {
    width: 20vw;
}
</style>