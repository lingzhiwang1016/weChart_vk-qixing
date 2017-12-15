<template>
    <div class="vk-vankely">
        <ridingIntro></ridingIntro>
        <ridingRoute></ridingRoute>
        <ridingMap></ridingMap>
        <ridingHelp></ridingHelp>
        <projectIntro></projectIntro>
    </div>
</template>

<script>
    import ridingIntro from "@/h5/qixing/riding_intro";
    import ridingRoute from "@/h5/qixing/riding_route";
    import ridingMap from "@/h5/qixing/riding_map2";
    import ridingHelp from "@/h5/qixing/riding_help";
    import projectIntro from "@/h5/qixing/project_intro";

    export default {
        name: "app",

        data () {
            return {};
        },

        computed: {},
        methods: {},

        created: function () {
        },

        components: {
            ridingIntro,
            ridingRoute,
            ridingMap,
            ridingHelp,
            projectIntro
        }
    };
</script>

