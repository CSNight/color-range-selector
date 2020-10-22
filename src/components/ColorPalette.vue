<template>
    <div class="palette">
        <div class="palette__inner" style="height: 10px; transform: scale(1, 1);">
            <div class="palette__block" v-for="(color,i) in colors" :key="i" :style="'background-color:'+color"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ColorRamp",
    props: ['colors']
}
</script>

<style lang="scss" scoped>
.palette {
    display: flex;
    flex-grow: 1;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
    
    .palette__inner {
        border-radius: 2px;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: space-between;
        overflow: hidden;
    }
    
    .palette__block {
        flex-grow: 1;
    }
}

</style>