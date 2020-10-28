<template>
    <div class="dropdown-select" v-clickoutside="()=>{this.show=false}">
        <div class="dropdown-input" @click="showPanel">
            <span class="dropdown-label">{{ cl }}</span>
        </div>
        <div class="dropdown-panel" v-if="show">
            <div class="item-selector">
                <div class="list_item" v-for="t in types" :key="t" @click="chooseType(t)"><span
                    class="dropdown-label">{{ t }}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import {Clickoutside} from './domUtil'

export default {
    directives: {Clickoutside},
    name: "CusSelect",
    props: ['types', 'clazz'],
    data() {
        return {
            cl: this.clazz,
            show: false
        }
    },
    methods: {
        chooseType(t) {
            this.cl = t;
            this.$emit('change', this.cl);
            this.show = false;
        },
        showPanel() {
            this.show = true;
        }
    }
    
}
</script>

<style lang="scss" scoped>
.dropdown-label {
    margin-left: 10px;
}

.dropdown-select {
    z-index: 100;
    position: relative;
    
    .dropdown-input {
        background-color: #3A414C;
        border-color: #D3D8E0;
        box-shadow: none;
        
        .dropdown-val {
            color: #A0A7B4;
            overflow: hidden;
        }
    }
    
    .dropdown-panel {
        border: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        position: absolute;
        bottom: auto;
        margin-top: 4px;
        margin-bottom: auto;
        display: flex;
        flex-direction: column;
        background-color: #29323C;
        box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);
        
        
        .item-selector {
            background-color: #29323C;
            border-top: 1px solid #242730;
            overflow-y: auto;
            max-height: 280px;
            box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);
            border-radius: 2px;
            &::-webkit-scrollbar {
                width: 10px !important;
                height: 10px !important;
            }
    
            &::-webkit-scrollbar-corner {
                background: #29323C !important;
            }
    
            &::-webkit-scrollbar-thumb {
                border-radius: 10px !important;
                background-color: #3A4552 !important;
                border: 3px solid #29323C !important;
            }
            .list_item {
                font-size: 11px;
                font-weight: 500;
                white-space: nowrap;
            }
            
            .list_item:hover {
                cursor: pointer;
                background-color: #6A7485;
            }
        }
        
    }
}
</style>