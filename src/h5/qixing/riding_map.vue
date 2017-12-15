<template>
    <div class="map-container">
        <img class="map-bg" :src="require('@/assets/img/map.png')"/>
        <div class="map-content-container">
            <div v-for="(item, index) in mapList" :key="index" class="map-btn"
                 :style="{left: item.posX, top:item.posY, width:item.width, height:item.height}"
                 @click="onPos(item)"
            >
                <!--{{item.name}}-->
            </div>
        </div>
    </div>
</template>

<script>
    import config from "@/conf/config";

    export default {
        data () {
            return {
                mapList: [
                    {
                        name: "海悦山庄", posX: "1.2rem", posY: "10.1rem", longitude: 118.147677, latitude: 24.435152
                    },
                    {
                        name: "黄厝", posX: "2.2rem", posY: "9.2rem", longitude: 118.159031, latitude: 24.441019
                    },
                    {
                        name: "会展保障点", posX: "4.9rem", posY: "6.7rem", longitude: 118.185032, latitude: 24.462825
                    },
                    {
                        name: "前埔保障点", posX: "4.8rem", posY: "5.9rem", longitude: 118.175267, latitude: 24.4743
                    },
                    {
                        name: "连前公社", posX: "4.1rem", posY: "5.3rem", longitude: 118.176387, latitude: 24.476115
                    },
                    {
                        name: "创想公社", posX: "3.5rem", posY: "4.9rem", longitude: 118.176152, latitude: 24.481904
                    },
                    //{
                    //name: "泊寓环岛山庄", posX: "1.3rem", posY: "5.0rem", longitude: 118.166868, latitude: 24.460089
                    //},
                    {
                        name: "忠仑公保障点", posX: "1.3rem", posY: "5.0rem", longitude: 118.152859, latitude: 24.485028
                    },
                    {
                        name: "湖边水库休息区", posX: "2.8rem", posY: "3.6rem", longitude: 118.157237, latitude: 24.495548
                    },
                    {
                        name: "金山保障点", posX: "3.2rem", posY: "2.6rem", longitude: 118.159603, latitude: 24.500581
                    },
                    {
                        name: "设计公社1期", posX: "2.1rem", posY: "1.6rem", longitude: 118.157577, latitude: 24.525148
                    },
                    {
                        name: "泊寓高新园", posX: "2.6rem", posY: "1.0rem", longitude: 118.158283, latitude: 24.527149
                    },
                    {
                        name: "设计公社2期", posX: "2.9rem", posY: "0.24rem", longitude: 118.155958, latitude: 24.531826
                    },
                    {
                        name: "万科云玺", posX: "4.8rem", posY: "2.6rem", longitude: 118.186204, latitude: 24.508346
                    }
                ]
            };
        },
        prop: {},

        methods: {
            onPos (pos) {
                this.$logger.log("onPos", pos);
                //const url = `${config.mapUrl}?dest=${pos.longitude},${pos.latitude}&destName=${pos.name}&naviBy=ride&key=${config.mapKey}`;
                const url = `${config.mapUrl}?to=${pos.longitude},${pos.latitude},${pos.name}&mode=ride&callnative=1&key=${config.mapKey}`;
                window.location.href = url;
            }
        },
        created: function () {
        }
    };
</script>

<style scoped>
    .map-container {
        position: relative;
    }

    .map-bg {
        width: 7.5rem;
        height: 13.34rem;
    }

    .map-content-container {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 7.5rem;
        height: 13.34rem;
        /*background-color: #99999988;*/
    }

    .map-btn {
        position: absolute;
        /*background-color: red;*/
        width: 0.88rem;
        height: 0.44rem;
    }
</style>
