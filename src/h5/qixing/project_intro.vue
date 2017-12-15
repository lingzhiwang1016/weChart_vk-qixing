<template>
    <div class="project_intro">
        <div class="title">
            <img src="../../assets/img/icon_jieshao.png">
            <div class="text">项目介绍</div>
        </div>
        <ul class="tabTitle">
            <li :class="activeTab==='one'?'active':''" @click="tabChange('one')">泊寓·莲前公社</li>
            <li :class="activeTab==='two'?'active':''" @click="tabChange('two')">创想公社+泊寓前埔店</li>
            <li :class="activeTab==='three'?'active':''" @click="tabChange('three')">设计公社一期+泊寓设计公社店</li>
            <li :class="activeTab==='four'?'active':''" @click="tabChange('four')">泊寓·高新园店</li>
            <li :class="activeTab==='five'?'active':''" @click="tabChange('five')">设计公社二期</li>
            <li :class="activeTab==='six'?'active':''" @click="tabChange('six')">云玺</li>
        </ul>
        <ul class="tabContent">
            <li v-if="activeTab==='one'">
                <div class="content_title">泊寓·莲前公社</div>
                <p>莲前公社位于软件园二期附近, 是一个集联合办公与创客公寓为一体的创新社区,也是厦门万科首个推行联合办公的项目。项目一、二层配置流动办公卡位和固定办公租赁, 三至八层配置 383 套青年公寓, 为城市青年创业者提供“高品质、高性价比”的办公与生活配套。</p>
                <p>地址：厦门市思明区前埔东路481号</p>
            </li>
            <li v-if="activeTab==='two'">
                <div class="content_title">创想公社+泊寓前埔店</div>
                <p>创想公社位于厦门软件园二期, 主要定位为“新型互联网与新媒体”的圈层化产业集群, 集合“互联网+”概念下的软件开发与外包, 动漫、游戏以及互联网产业下的新媒体、创意设计、品牌策划、影视传媒等, 打造新型服务式的产业办公平台。为企业的不同发展阶段提供灵活的办公空间及多重服务。</p>
                <p>泊寓前埔店位于厦门思明区软件园, 是一个集办公、住宿、商业为一体的创新型社区, 项目距离机场20分钟车程, 距离动车站、火车站仅需15分钟到达, 该项目得天独厚的地理位置成为软件园互联网高薪技术人才卓越之选。通达的交通条件使居住在这里的“城市青年家们”更快适应鹭岛城市步伐。</p>
                <p>地址：厦门市思明区前埔工业园61号</p>
            </li>
            <li v-if="activeTab==='three'">
                <div class="content_title">设计公社一期+泊寓设计公社店</div>
                <p>设计公社一期位于厦门设计产业最活跃的湖里区创新园内, 是聚合设计行业上下游的产业办公集群, 公社经过精心规划, 提供符合设计师创作的定制办公空间, 成为万科旗下首个融合青年公寓、商业空间、社群空间的共享社区。</p>
                <p>泊寓设计公社店位于厦门市湖里区创新园内, 2016 年 2 月正式对外营业, 因其公区集装箱造型、舒适的房间设计及优秀的社群文化, 而成为厦门“网红”项目, 吸引了大批租房青年的关注以及同行参观交流。</p>
                <p>地址：厦门市湖里区安岭二路50号</p>
            </li>
            <li v-if="activeTab==='four'">
                <div class="content_title">泊寓·高新园店</div>
                <p>高新园店位于厦门湖里区创新园内, 是一个集办公、住宿、商业为一体的创新型社区, 项目紧邻BRT双十中学站, 距离机场仅需10分钟车程, 距离动车站、火车站仅需30分钟车程, 通达的交通条件使居住在这里的“城市青年家们”出行更加快捷便利。</p>
                <p>地址：厦门市湖里区安岭路988号新希阳中心</p>
            </li>
            <li v-if="activeTab==='five'">
                <div class="content_title">设计公社二期</div>
                <p>设计公社二期位于厦门湖里创新园内, 是厦门万科深度服务与重构设计产业的第二个项目。该项目围绕创意设计产业与互联网新媒体产业, 为城市活跃的设计企业与群体提供办公场所。同时, 也是集办公空间、展览空间、创意集合店为一体的城市设计体验中心。</p>
                <p>地址：厦门市湖里区岭下西路273号</p>
            </li>
            <li v-if="activeTab==='six'">
                <div class="content_title">云玺</div>
                <p>云玺是万科产业办公着力打造的两岸金融中心商务标杆, 以汇聚金融上下游产业优质资源为理念, 建设总部办公封面样板。项目为厦门金融商务集群提供顶级的办公硬件和高端的商务服务, 并挖掘商务人士需求, 定制白领公寓——泊寓、写字楼里的幼儿园——梅沙教育, 以及体验式商业街区万科里等完善配套体系。</p>
                <p>地址：厦门市湖里区高林中路535号</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeTab: "one"
            };
        },
        prop: {},

        methods: {
            tabChange (activeTab) {
                if (activeTab === "one") {
                    this.activeTab = "one";
                } else if (activeTab === "two") {
                    this.activeTab = "two";
                } else if (activeTab === "three") {
                    this.activeTab = "three";
                } else if (activeTab === "four") {
                    this.activeTab = "four";
                } else if (activeTab === "five") {
                    this.activeTab = "five";
                } else if (activeTab === "six") {
                    this.activeTab = "six";
                } else {
                    this.activeTab = "one";
                }
            }
        },
        created: async function () {
            //            return;
        }
    };
</script>

<style scoped>

</style>
