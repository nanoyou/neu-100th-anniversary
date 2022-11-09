<script setup lang="ts">
import ScienceCard from '../../components/ScienceCard.vue';


const content = [
    '2017年12月29日，“港珠澳大桥主体工程全线贯通”入选人民日报评出的2017年国内十大新闻。这座被国家主席习近平在2018年新年贺词中所提到的跨海大桥，是世界总体跨度最长、钢结构桥体最长、海底沉管隧道最长的跨海大桥，也是世界公路建设史上技术最复杂、施工难度最高、工程规模最庞大的桥梁。被誉为“新世界七大奇迹”之一的港珠澳大桥，大量应用东北大学王昭东教授带领团队研发的基于新一代控轧控冷工艺的高性能绿色桥梁钢，成为东北大学以领跑世界的绿色冶金工艺服务国家重大战略需求的生动写照。在今天召开的2017年度全国科技奖励大会上，东北大学“热轧板带钢新一代控轧控冷技术及应用”项目获评国家科技进步二等奖。',
]
</script>
<template>
<div class="wrap">
    <div class="line1">
        <ScienceCard class="card">
            <img src="/img/keyan/4_1.jpg" />
        </ScienceCard>

        <ScienceCard class="card">
            <img src="/img/keyan/4_2.jpg" />
        </ScienceCard>
    </div>
    <div class="line2">
        <ScienceCard class="card" title="热轧板带钢新一代控轧控冷技术及应用获国家科技进步二等奖" time="2017.12.29" :content="content">
        </ScienceCard>
    </div>
</div>
</template>
<style lang="less" scoped>
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


}
.line1 {
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 950px;
}
.line2 {
    width: 950px;
}
img {
    height: 30vh;
}
.card {
    margin: 20px;
}
</style>