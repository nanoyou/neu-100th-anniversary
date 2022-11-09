<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';
import HistoryCard from '../components/HistoryCard.vue'
import TimeAxis from '../components/TimeAxis.vue';

const cards = reactive([
    {
        year: 1922,
        title: '学府筹办',
        body: '1922年春，张作霖委派时任奉天省长兼财政厅长王永江筹办东北大学。同年，成立东北大学筹备委员会，原国立沈阳高等师范学校改办为东北大学理工科，原文学专门学校（原奉天法政学堂）改办为东北大学文法科。校长由王永江兼任，学生480余人。文法科设中国文学系、英文学系、俄文学系、法律学系、政治学系；理工科设数学系、物理学系、化学系、土木工学系，机械学系，并成立东北大学筹委会。',

        detailedYear: '1922年',
        detailedMonth: '春季',

        id: 0,
        enabled: true,
    }, {
        year: 1923,
        title: '东大之印',
        body: '1923年4月19日，奉天省公署颁发“东北大学之印”，4月26日正式启用，东北大学宣告成立，时任奉天省省长王永江为首任校长。',
        icon: '/neu-100th-anniversary/img/neu_stamp.png',

        detailedYear: '1923年',
        detailedMonth: '4月',

        id: 1,
    }, {
        year: 1923,
        title: '首次开学',
        body: '1923年10月24日，东北大学正式开学。学校仿德国柏林大学设计，王永江校长亲题 “知行合一”为东北大学校训。在学校附近另开设东北大学工厂，占地200亩，供学生实习使用，聘留学德国归来的杨毓桢博士任厂长。刚刚诞生的东北大学已经开始运用现代教育的方式和手段，启迪学生思想，丰富学术文化。',

        detailedYear: '1923年',
        detailedMonth: '10月',

        id: 2,
    }, {
        year: 1931,
        title: '浪迹萍踪',
        body: '正当学校蓬勃发展之际，1931年“九一八”事变爆发，日军一夜之间占领沈阳，东北大学成为日本帝国主义侵华破坏的第一所大学。校舍被日军占领，设备图书损失殆尽，学者严重流失，学生流浪他乡，学校一夜之间变成流亡大学。全校师生悲愤已极，被迫走上流亡之路。10月，东北大学在北平勉强复课。',

        detailedYear: '1931年',
        detailedMonth: '9月',

        id: 3,
    }, {
        year: 1935,
        title: '一二·九运动',
        body: '1935年12月9日，在中国共产党的领导下，北平市学生救国联合会组织发动了“一二·九”学生抗日爱国运动，东北大学成为“一二·九”抗日爱国运动的先锋队和主力军，并在其后又举行了“一二·一六运动”示威游行。在学生抗日爱国运动中，东大师生冲破手持大刀的军警包围，孤军出动，从崇元观到西四北大街，再到东郊民巷。他们冒着严寒，一直坚持到夜晚，成为斗争中的主力和先锋。斗争中，东大学生中有四十多人被捕，张学良校长写信营救出被捕同学。“一二·九运动”标志着中国知识青年爱国运动走向新的历史时期。',

        detailedYear: '1935年',
        detailedMonth: '12月',

        id: 4,
    }, {
        year: 1993,
        title: '东大复名',
        body: '1993年3月，国家教委正式批准东北工学院复名为东北大学，学校聘请张学良为东北大学名誉校长。秦皇岛分院随东北大学复名而更名为“东北大学秦皇岛分校”。',

        detailedYear: '1993年',
        detailedMonth: '3月',

        id: 5,
    }, {
        year: 1996,
        title: '211工程',
        body: '1996年12月，东北大学进入国家首批“211工程”重点建设行列，秦皇岛分校也随之进入“211工程”行列。翌年1月，原沈阳黄金学院并入东北大学。',

        detailedYear: '1996年',
        detailedMonth: '12月',

        id: 6
    }, {
        year: 1998,
        title: '985工程',
        body: '1998年5月，东北大学进入国家首批“985工程”大学行列，并划入教育部直属，秦皇岛分校也同步划入教育部直属。',

        detailedYear: '1998年',
        detailedMonth: '5月',

        id: 7
    }, {
        year: 2022,
        title: '胜利辉煌',
        body: '2022年3月，入选教育部公布的首批虚拟教研室建设试点名单。3月，入选教育部基础学科招生改革试点名单（强基计划）。7月18日，东北大学工程结构动力学中心挂牌仪式举行。 9月，成为东北三省一区高校心理健康教育联盟成员。',

        detailedYear: '2022年',
        detailedMonth: '3月',

        id: 8
    }
])
const backgroundID = ref(0)
function axisClick(id: number) {
    cards.forEach(card => {
        if (card.id == id) {
            card.enabled = true;
            backgroundID.value = id
        } else {
            card.enabled = false;
        }
    })
}
</script>
<template>
    <div id="history" :class="`bg bg-${backgroundID}`">
        <aside>
            <TimeAxis :data="cards" @click="axisClick"/>
        </aside>
        <main>
            <HistoryCard v-for="{year, title, body, icon, enabled} in cards" v-show="enabled" :year="year" :title="title" :body="body" :icon="icon" />
        </main>
    </div>
</template>
<style lang="less" scoped>
#history {
    height: 100%;
    background-color: #EEE;
    
    display: flex;
    align-items: center;
    justify-content: center;
}
aside {
    width: 20vw;
    margin-right: 10vw;
}
main {
    margin-top: 75px;
}
.bg {
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    &-0::before {
        background-image: url(/img/history/wangyongjiang.jpeg);
        opacity: 0.2;
        filter: blur(4px);
    }
    &-1::before {
        background-image: url(/img/history/fengtian_gongshu.jpg);
        opacity: 0.3;
        filter: blur(4px);
    }
    &-2::before {
        background-image: url(/img/history/neu_gate.png);
        opacity: 0.2;
        filter: blur(1px);
    }
    &-3::before {
        background-image: url(/img/history/918.jpeg);
        opacity: 0.15;
        filter: blur(4px);
    }
    &-4::before {
        background-image: url(/img/history/129.jpg);
        opacity: 0.15;
        filter: blur(2px);
    }
    &-5::before {
        background-image: url(/img/history/jian_guo_hou_shi.png);
        opacity: 0.2;
        filter: blur(4px);
    }
    &-6::before {
        background-image: url(/img/history/211.jpg);
        opacity: 0.2;
        filter: blur(3px);
    }
    &-7::before {
        background-image: url(/img/history/985.png);
        opacity: 0.2;
        filter: blur(4px);
    }
    &-8::before {
        background-image: url(/img/history/dbdx.jpg);
        opacity: 0.2;
        filter: blur(5px);
    }
}
</style>