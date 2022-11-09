<script setup lang="ts">
import ScienceCard from '../../components/ScienceCard.vue';


const content = [
    '东北大学机器人科学与工程学院聚焦机器人领域的智能导航、自主编程、交互协作的交叉共融开展研究，取得了系列原创性研究成果。',
    '共融机器人代表了智能机器人技术发展的未来趋势，其所涉及的非结构环境中的多模态感知与情景理解、基于生物信号的行为意图理解、人机自然交互、机器人个体自主与机器人群体智能，一直是国际智能机器人领域的挑战性研究课题。',
    '在移动机器人智能导航方面，研究成果“Real-time 3D Single Object Tracking with Transformer”被多媒体领域国际顶级期刊《IEEE Transactions on Multimedia》（中科院一区Top，JCR一区）录用，将于2022年末正式出版，该成果旨在研究移动机器人在三维点云场景下的目标跟踪任务。',
]
</script>
<template>
<div class="wrap">
    <div class="row2">
        <ScienceCard class="card">
            <img src="/img/keyan/3_1.png" />
        </ScienceCard>

        <ScienceCard class="card">
            <img src="/img/keyan/3_2.png" />
        </ScienceCard>

        <ScienceCard class="card">
            <img src="/img/keyan/3_3.png" />
        </ScienceCard>
    </div>
    <div class="row1">
        <ScienceCard class="card" title="东北大学在智能机器人研究方面取得重要成果" time="2022.04.27" :content="content">
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
    width: 268px;
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