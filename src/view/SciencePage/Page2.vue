<script setup lang="ts">
import ScienceCard from '../../components/ScienceCard.vue';


const content = [
    '东北大学材料科学与工程学院科研团队在高Mg含量Al(Mg)合金基复合材料研究方面取得重要进展：在超细晶高Mg含量Al(Mg)-Al3Mg2复合材料的Al(Mg)基体中发现了高密度的堆垛层错。这一发现革新了铝合金因层错能高而难形成高密度堆垛层错的传统认知。相关研究成果以“Stacking faults in a mechanically strong Al(Mg)–Al3Mg2 composite”为题发表在Composites Part B: Engineering (Compos. B. Eng., 245 (2022) 110211)期刊上。',
    '论文的第一作者为张德良教授团队的周登山副教授，研究与南方科技大学逯文君教授和德国马普钢铁所Dierk Raabe教授合作完成。该研究得到了国家自然科学基金（基金号：51701036）和辽宁省兴辽人才计划（基金号：XLYC1802080）的项目支持，以及东北大学分析测试中心的帮助。',
]
</script>
<template>
<div class="wrap">
    <div class="row1">
        <ScienceCard class="card" title="新型铝基复合材料研究方面取得重要进展" time="2022.09.03" :content="content">
        </ScienceCard>
    </div>
    <div class="row2">
        <ScienceCard class="card">
            <img src="/img/keyan/2_2.jpg" />
        </ScienceCard>

        <ScienceCard class="card">
            <img src="/img/keyan/2_1.jpg" />
        </ScienceCard>
    </div>
</div>
</template>
<style lang="less" scoped>
.wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40vh;
}
.line1 {
    display: flex;

    align-items: center;
    justify-content: space-between;

    height: 88%;
}
.row1 {
    width: 700px;
}
.row2 {
    height: 88%;
}
img {
    width: 276px;
}
.card {
    margin: 20px;

}
:deep(.title) {
    margin-top: 60px;
}
:deep(.content-text) {
    line-height: 30px;
}
</style>