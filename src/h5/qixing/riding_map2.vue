<template>
    <div>
        <div class="map-hint">
            <img :src="require('@/assets/img/icon_tishi.png')" style="width: 0.8rem; height: 0.8rem; margin-right: 0.2rem">
            <div>
                <p>点击地图点位进入骑行导航</p>
                <p>请先在手机中安装高德地图</p>
            </div>
        </div>

        <div class="map-container">
            <img class="map-bg" :src="require('@/assets/img/map/img_map_bg.png')"/>
            <img class="map-mask" :src="activeSrc"/>
            <div class="map-content-container">
                <div v-for="(item, index) in mapList" :key="index" class="map-btn"
                     :style="{left: item.posX, top:item.posY, width:item.width, height:item.height, display:isVisible(item)}"
                     @click="onPos(item)"
                >
                    <!--{{item.name}}-->
                </div>
            </div>

            <div class="logo-1 logo-anim"></div>
            <div class="logo-2"></div>
            <div class="logo-3"></div>
        </div>

        <ul class="tabTitle">
            <li :class="activeTab==='one'?'active':''" @click="tabChange('one')">A线</li>
            <li :class="activeTab==='two'?'active':''" @click="tabChange('two')">B1线</li>
            <li :class="activeTab==='three'?'active':''" @click="tabChange('three')">B2线</li>
            <li :class="activeTab==='four'?'active':''" @click="tabChange('four')">非骑行线</li>
        </ul>
    </div>
</template>

<script>
    import config from "@/conf/config";

    export default {
        data () {
            return {
                activeTab: "one",
                mapList: [
                    {
                        name: "海悦山庄", posX: "1.2rem", posY: "11.0rem", longitude: 118.147677, latitude: 24.435152, lines: [0, 1, 2, 3]
                    },
                    {
                        name: "黄厝", posX: "2.2rem", posY: "10.0rem", longitude: 118.155692, latitude: 24.439001, lines: [0, 1]
                    },
                    {
                        name: "会展保障点", posX: "4.9rem", posY: "7.5rem", longitude: 118.185032, latitude: 24.462825, lines: [0, 1]
                    },
                    {
                        name: "前埔保障点", posX: "4.8rem", posY: "6.7rem", longitude: 118.175267, latitude: 24.4743, lines: [0, 1]
                    },
                    {
                        name: "连前公社", posX: "4.1rem", posY: "6.2rem", longitude: 118.176387, latitude: 24.476115, lines: [0, 3]
                    },
                    {
                        name: "创想公社", posX: "3.5rem", posY: "5.7rem", longitude: 118.176152, latitude: 24.481904, lines: [0, 3]
                    },
                    {
                        name: "泊寓环岛山庄", posX: "2.8rem", posY: "7.4rem", longitude: 118.166868, latitude: 24.460089, lines: [0, 1, 2, 3]
                    },
                    {
                        name: "忠仑公保障点", posX: "1.3rem", posY: "5.9rem", longitude: 118.152859, latitude: 24.485028, lines: [1, 2]
                    },
                    {
                        name: "湖边水库休息区", posX: "2.8rem", posY: "4.5rem", longitude: 118.157237, latitude: 24.495548, lines: [1, 2]
                    },
                    {
                        name: "金山保障点", posX: "3.2rem", posY: "3.5rem", longitude: 118.159603, latitude: 24.500581, lines: [1, 2]
                    },
                    {
                        name: "设计公社1期", posX: "2.1rem", posY: "2.5rem", longitude: 118.157577, latitude: 24.525148, lines: [1, 2]
                    },
                    {
                        name: "泊寓高新园", posX: "2.6rem", posY: "1.9rem", longitude: 118.158283, latitude: 24.527149, lines: [1, 2]
                    },
                    {
                        name: "设计公社2期", posX: "2.9rem", posY: "1.1rem", longitude: 118.155958, latitude: 24.531826, lines: [1, 2]
                    },
                    {
                        name: "万科云玺", posX: "4.8rem", posY: "3.5rem", longitude: 118.186204, latitude: 24.508346, lines: [0, 1, 2, 3]
                    }
                ]
            };
        },
        prop: {},

        computed: {
            activeSrc () {
                if (this.activeTab === "one") {
                    return require("@/assets/img/map/img_map_A.png");
                }
                if (this.activeTab === "two") {
                    return require("@/assets/img/map/img_map_B1.png");
                }
                if (this.activeTab === "three") {
                    return require("@/assets/img/map/img_map_B2.png");
                }
                if (this.activeTab === "four") {
                    return require("@/assets/img/map/img_map_A2.png");
                }
            }
        },

        methods: {
            onPos (pos) {
                this.$logger.log("onPos", pos);
                //const url = `${config.mapUrl}?dest=${pos.longitude},${pos.latitude}&destName=${pos.name}&naviBy=ride&key=${config.mapKey}`;
                const url = `${config.mapUrl}?to=${pos.longitude},${pos.latitude},${pos.name}&mode=ride&callnative=1&key=${config.mapKey}`;
                /**
                 * 12 刚好厦门岛
                 * 14 半个岛
                 * 18 刚好附近
                 */
                if (wx.isReady) {
                    wx.openLocation({
                        latitude: pos.latitude, // 纬度，浮点数，范围为90 ~ -90
                        longitude: pos.longitude, // 经度，浮点数，范围为180 ~ -180。
                        name: pos.name, // 位置名
                        address: "", // 地址详情说明
                        scale: 14, // 地图缩放级别,整形值,范围从1~28。默认为最大
                        infoUrl: url // 在查看位置界面底部显示的超链接,可点击跳转
                    });
                } else {
                    window.location.href = url;
                }
            },
            isVisible (item) {
                let index = 0;
                if (this.activeTab === "one") {
                    index = 0;
                }
                if (this.activeTab === "two") {
                    index = 1;
                }
                if (this.activeTab === "three") {
                    index = 2;
                }
                if (this.activeTab === "four") {
                    index = 3;
                }
                return item.lines.indexOf(index) === -1 ? "none" : "";
            },
            tabChange (activeTab) {
                this.activeTab = activeTab;
            }
        },
        created: function () {
        }
    };
</script>

<style scoped lang="less">
    @width : 7.5rem;
    @height : 12.2rem;

    .map-container {
        position: relative;
        width: @width;
        height: @height;
    }

    .map-hint {
        font-size: 0.3rem;
        color: #F3ECA2;
        width: 100%;
        text-align: center;

        display: flex;
        align-items: center;
        margin-top: 0.6rem;
        padding-left: 0.4rem;
    }

    .map-bg {
        width: @width;
        height: @height;
    }

    .map-mask {
        position: absolute;
        left: 0px;
        top: 0px;
        width: @width;
        height: @height;
    }

    .map-content-container {
        position: absolute;
        left: 0px;
        top: 0px;
        width: @width;
        height: @height;
        /*background-color: #99999988;*/
    }

    .map-btn {
        z-index: 1;
        position: absolute;
        /*background-color: red;*/
        width: 0.88rem;
        height: 0.44rem;
    }

    .tabTitle {
        display: flex;
        align-items: stretch;
        height: 0.86rem;
        font-size: 0.3rem;
        background: #1D3A52;
        color: #A0CDCE;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        width: 25%;
        background: #1D3A52;
    }

    li:not(:last-of-type) {
    }

    li.active {
        color: #ffffff;
        background: #214A6B;
    }

    @left : 4.86rem;
    @top : 3.5rem;

    .logo-1 {
        background-color: #fff;

        width: 0.56rem;
        height: 0.56rem;
        border-radius: 0.28rem;

        position: absolute;
        left: @left;
        top: @top;
    }

    @l : @left + 0.1rem;
    @t : @top + 0.1rem;
    .logo-2 {
        background-color: #E83237;

        width: 0.36rem;
        height: 0.36rem;
        border-radius: 0.18rem;

        position: absolute;
        left: @l;
        top: @t;
    }

    .logo-3 {
        display: none;
        background-color: #E83237;

        width: 0.2rem;
        height: 0.2rem;
        border-radius: 0.1rem;

        position: absolute;
        left: @left +0.18rem;
        top: @top +0.18rem;
    }

    .logo-anim {
        margin: 0 auto;
        /* IE10、Firefox and Opera, IE9以及更早的版本不支持 */
        animation-name: breath;
        /* 动画名称 */
        animation-duration: 2s;
        /* 动画时长3秒 */
        animation-timing-function: ease-in-out;
        /* 动画速度曲线：以低速开始和结束 */
        animation-iteration-count: infinite;
        /* 播放次数：无限 */
        /* Safari and Chrome */
        -webkit-animation-name: breath;
        /* 动画名称 */
        -webkit-animation-duration: 2s;
        /* 动画时长3秒 */
        -webkit-animation-timing-function: ease-in-out;
        /* 动画速度曲线：以低速开始和结束 */
        -webkit-animation-iteration-count: infinite;
        /* 播放次数：无限 */
        opacity: 0.1;
    }

    @keyframes breath {
        from {
            opacity: 0.3;
            transform: scale(1.4);
        }
        /* 动画开始时的不透明度 */
        50% {
            opacity: 1;
            transform: scale(0.6);
        }
        /* 动画50% 时的不透明度 */
        to {
            opacity: 0.3;
            transform: scale(1.4);
        }
        /* 动画结束时的不透明度 */
    }

    @-webkit-keyframes breath {
        from {
            opacity: 0.1;
        }
        /* 动画开始时的不透明度 */
        50% {
            opacity: 1;
        }
        /* 动画50% 时的不透明度 */
        to {
            opacity: 0.1;
        }
        /* 动画结束时的不透明度 */
    }
</style>
