<script setup lang="ts">
import ScienceCard from '../../components/ScienceCard.vue';


const content = [
    '东北大学材料学院李逸兴、张雪峰课题组采用直流电弧等离子体制备技术，成功将一系列高熵合金纳米颗粒原位封装在石墨壳中，制得具有核@壳包覆结构的高熵合金@石墨纳米胶囊材料（HEA@C-NPs），并利用其独特的核@壳结构实现了对光热转换性能的优化提升。相关研究成果以“Confined high-entropy-alloy nanoparticles within graphitic shells for synergistically improved photothermal conversion”为题发表在Acta Materialia上。材料学院博士研究生廖怡君为论文第一作者，材料学院青年教师李逸兴博士为论文通讯作者。',
    '据悉，本工作揭示了HEA@C-NPs光热转换性能的优化机理，为高性能光热转换材料的制备和研究提供了新的理论和设计策略，展现出巨大的实际应用潜力。该研究获得了国家重点研发计划、国家自然科学基金、浙江省重点研发计划、辽宁省自然科学基金等的资助。',
]
</script>
<template>
<div class="wrap">
    <div class="line1">
        <ScienceCard class="card">
            <img src="/img/keyan/1_1.png" />
        </ScienceCard>

        <ScienceCard class="card">
            <img src="/img/keyan/1_2.png" />
        </ScienceCard>
    </div>
    <div class="line2">
        <ScienceCard class="card" title="东北大学在高熵合金研究方面取得重要进展" time="2022.09.13" :content="content">
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

    width: 1000px;
}
.line2 {
    width: 1000px;
}
img {
    height: 30vh;
}
.card {
    margin: 20px;
}
</style>