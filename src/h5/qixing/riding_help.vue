<template>
    <div class="riding_help">
        <div class="topTitle">
            <img src="../../assets/img/img_help.png" alt="">
            如需帮助请联系总控台或线路管理员
        </div>
        <ul class="phone_ul">
            <li class="phone-title_first">总控台</li>
            <li class="phone">
                <div>曾颖</div>
                <div>183 5973 6216</div>
                <img src="../../assets/img/img_tel.png" alt="" @click="onTel('18359736216')">
            </li>
            <li class="phone">
                <div>刘松青</div>
                <div>181 0697 3968</div>
                <img src="../../assets/img/img_tel.png" alt="" @click="onTel('18106973968')">
            </li>
            <li class="phone">
                <div>李玲</div>
                <div>180 3026 0452</div>
                <img src="../../assets/img/img_tel.png" alt="" @click="onTel('18030260452')">
            </li>
            <li class="phone-title">线路A</li>
            <li class="phone">
                <div>谢晓明</div>
                <div>159 5945 6780</div>
                <img src="../../assets/img/img_tel.png" alt="" @click="onTel('15959456780')">
            </li>
            <li class="phone-title">线路B</li>
            <li class="phone">
                <div>张葛扬</div>
                <div>186 5001 3069</div>
                <img src="../../assets/img/img_tel.png" alt="" @click="onTel('18650013069')">
            </li>
        </ul>

        <div class="tipTitle">
            <img src="../../assets/img/icon_wenxin.png" alt="">
            骑行途中温馨提示
        </div>
        <ol class="tip_ol">
            <li>组委会在沿途设置了补给点、骑行保障点、小黄车更换点、休息点等中途点位, 保障各位嘉宾的骑行体验安全、顺畅、无忧; 具体点位详情, 请参阅骑行地图。</li>
            <li>骑行途中, 如果您遇到任何困难或紧急情况需要帮助, 请您直接与<span class="innerSpecial">总控台</span>取得联系; 若您无法及时联系上总控台, 您可以与两条线路的管理员取得联系。</li>
            <li>组委会在骑行沿线分段排布了工作人员, 提供方向指引、紧急救援等沿线服务; 您如需帮助, 也可向工作人员求助。</li>
            <li>如遇到中途迷路的情况, 您可以向总控台、线路管理员、沿线工作人员求助, 亦可参照“美好骑行”H5链接中的位置导航和“骑行护照”上的项目地址, 通过手机导航骑行或打车的方式, 到达各个项目。</li>
            <li>由于时间关系, 莲前片区和高新园片区的骑行与项目参观时间为上午8点30分至11点。11点时, 请各位嘉宾在各自所在的项目点上接驳车, 前往云玺项目参观。如有嘉宾11点时正在两个项目之间的骑行途中, 您可以继续骑行前往离您最近的项目上车, 也可停止骑行, 在安全区域与总控台联系, 总控台将安排车辆到您所在的位置接您前往云玺。</li>
            <li>如果您在骑行途中感到疲劳、头晕、身体不适, 请立即停止骑行, 在安全区域与总控台联系; 组委会在每条线路的末尾安排了骑行保障车, 您可以随时停止骑行, 乘车参观项目。</li>
            <li>选择线路B骑行的嘉宾请注意：空中自行车道平均每隔0.5km-1km设有出入口; 若您在空中自行车道上遇到困难需要帮助, 请前往与您最近的出入口, 并与总控台联系获得帮助。</li>

            <!--<li>组委会在沿途设置了补给点、骑行保障点、小黄车更换点、休息点等中途点位, 保障各位嘉宾的骑行体验安全、顺畅、无忧; 具体点位详情, 请参阅骑行地图。</li>-->
            <!--<li>骑行途中, 如果您遇到任何困难或紧急情况需要帮助, 请您直接与总控台取得联系; 若您无法及时联系上总控台, 您可以与两条线路的管理员取得联系。</li>-->
            <!--<li>组委会在骑行沿线分段排布了工作人员, 提供方向指引、紧急救援等沿线服务; 您如需帮助, 也可向工作人员求助。</li>-->
            <!--<li>如遇到中途迷路的情况, 您可以向总控台、线路管理员、沿线工作人员求助, 亦可参照“美好骑行”H5链接中的位置导航和“骑行护照”上的项目地址, 通过手机导航骑行或打车的方式, 到达各个项目。</li>-->
            <!--<li>由于时间关系, 莲前片区和高新园片区的骑行与项目参观时间为上午8点30分至11点。11点时, 请各位嘉宾在各自所在的项目点上接驳车, 前往云玺项目参观。如有嘉宾11点时正在两个项目之间的骑行途中, 您可以继续骑行前往离您最近的项目上车, 也可停止骑行, 在安全区域与总控台联系, 总控台将安排车辆到您所在的位置接您前往云玺。</li>-->
            <!--<li>如果您在骑行途中感到疲劳、头晕、身体不适, 请立即停止骑行, 在安全区域与总控台联系; 组委会在每条线路的末尾安排了骑行保障车, 您可以随时停止骑行, 乘车参观项目。</li>-->
            <!--<li>选择线路B骑行的嘉宾请注意：空中自行车道平均每隔0.5km-1km设有出入口; 若您在空中自行车道上遇到困难需要帮助, 请前往与您最近的出入口, 并与总控台联系获得帮助。</li>-->
        </ol>
    </div>
</template>

<script>
    export default {
        data () {
            return {};
        },
        prop: {},

        methods: {
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

</style>
