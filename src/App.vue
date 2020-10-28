<template>
    <div id="app" class="app">
        <ColorRangeSelector :steps="5" mode="hex" style="width: 250px" @change="co"/>
    </div>
</template>

<script>
import ColorRangeSelector from "@/components/ColorRangeSelector";

export default {
    name: 'app',
    components: {ColorRangeSelector},
    methods:{
        co(e){
            console.log(e)
        }
    }
}
</script>
<style>
.app {
    /*50 = navbar  */
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
}
</style>