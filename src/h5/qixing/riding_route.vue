<template>
    <div class="riding_route">
        <ul class="tabTitle">
            <li :class="activeTab==='one'?'active':''" @click="tabChange('one')">A线</li>
            <li :class="activeTab==='two'?'active':''" @click="tabChange('two')">B1线</li>
            <li :class="activeTab==='three'?'active':''" @click="tabChange('three')">B2线</li>
            <li :class="activeTab==='four'?'active':''" @click="tabChange('four')">非骑行线</li>
        </ul>
        <ul>
            <li v-if="activeTab==='one'" class="tabContent1">
                <img class="img" src="../../assets/img/img_map_A.png" alt="">
            </li>
            <li v-if="activeTab==='two'" class="tabContent1">
                <img class="img" src="../../assets/img/img_map_B1.png" alt="">
            </li>
            <li v-if="activeTab==='three'" class="tabContent1">
                <img class="img" src="../../assets/img/img_map_B2.png" alt="">
            </li>
            <li v-if="activeTab==='four'" class="tabContent2">
                <div>
                    <img class="img" src="../../assets/img/img_map_A2.png" alt="">
                    <!--<div class="tabText">-->
                        <!--请各位选择非骑行线路（A2）的嘉宾于8点20分前往海悦山庄大堂集合, 将有工作人员-->
                        <!--<div class="phone-call" @click="onTel('13808517666')"><img src="../../assets/img/icon_telmini.png" alt="">张华琳 13808517666</div>-->
                        <!--全程引导, 统一乘车参观莲前片区项目和云玺, 参观顺序为：环岛山庄泊寓——莲前公社——创想公社——云玺。-->
                    <!--</div>-->

                    <div class="tabText">
                        请选择非骑行线路(A2)的嘉宾于8点20分前往海悦
                        山庄大堂集合,将有工作人员
                        <div class="phone-call" @click="onTel('13808517666')"><img src="../../assets/img/icon_telmini.png" alt="">张华琳 13808517666</div>
                        全程引导, 统一乘车参观莲前片区项目和云玺。
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeTab: "one",
                activeTabClass: "active"
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
                } else {
                    this.activeTab = "one";
                }
            },
            onTel (tel) {
                this.$logger.log("onTel", tel);
                window.location.href = "tel:" + tel;
            }
        },
        created: async function () {
            //            return;
        }
    };
</script>

<style scoped>

    .phone-call {
        color: #F3ECA2;
        display: flex;
        align-items: center;
        margin: 0.14rem 0;
    }

    .phone-call > img {
        width: 0.28rem;
        height: 0.28rem;
        padding: 0.04rem;
    }
</style>
