<template>
    <div class="riding_intro">
        <div class="picture">
            <img class="img_zhutu_bg" src="../../assets/img/img_zhutu_bg.png" alt="">
            <img class="img_flower_right" src="../../assets/img/img_flower_right.png" alt="">
            <img class="img_zhutu" src="../../assets/img/img_zhutu.png" alt="">
            <img class="img_zhutu_1" src="../../assets/img/img_zhutu_1.png" alt="">
            <img class="img_zhutu_bike" src="../../assets/img/img_zhutu_bike.png" alt="">
            <img class="img_flower_left" src="../../assets/img/img_flower_left.png" alt="">
            <div class="img_futu">
                <div class="left"></div>
                <img class="i-center" src="../../assets/img/img_futu.png" alt="">
                <div class="right"></div>
            </div>

            <div class="info">
                <p>集合时间: 12月8日 上午8:20</p>
                <p>集合地点: 海悦山庄酒店大堂</p>
            </div>
        </div>
        <ul class="content">
            <li>骑行前夜, 请充分休息, 确保有充足的体力享受第二天的骑行和项目参观。</li>
            <li>骑行出发前, 请关注个人的身体状况, 避免疲劳骑行; 如遇身体不适等不宜运动的情况, 请及时与本队队长联系, 以乘车方式参观项目, 特殊情况可取消项目参观。</li>
            <li>请统一<span class="innerSpecial">着骑行服、佩戴骑行手套、携带骑行背包和骑行护照</span>参加活动。骑行背包内配有555ml饮用水一瓶、士力架能量棒一条、厦门地图、雨衣一件, 请务必携带。</li>
            <li>出发前, 队长将向您发放一张编号贴纸, 请牢记自己的编号, 并将贴纸贴在您骑行外套的明显位置。感谢您的支持！</li>

            <!--<li>骑行前夜, 请充分休息确保体力享受骑行和项目参观</li>-->
            <!--<li>出发前, 请关注身体状况。如遇身体不适请及时与队长联系, 以乘车方式参观项目, 特殊情况可取消</li>-->
            <!--<li>请统一携带物品参加<span class="innerSpecial"> [骑行服、骑行手套、骑行背包、骑行护照] </span></li>-->
            <!--<li>骑行背包内配有330ml饮用水一瓶, 士力架能量棒一条、厦门地图、雨衣一件</li>-->
            <!--<li>出发前队长会向您发一张编号贴纸, 请牢记编号, 并将贴纸贴在骑行外套的明显位置, 感谢配合！</li>-->
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {};
        },
        prop: {},

        methods: {},
        created: async function () {
            //            return;
        }
    };
</script>

<style scoped lang="less">
    @import "~@/assets/less/h5/qixing/riding_intro.less";
</style>
