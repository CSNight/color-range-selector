<template>
    <div>
        <color-picker ref="picker" v-if="showPicker" :color="curColor" @change="changeColor"/>
        <draggable v-model="editColors" tag="div" handle=".drag">
            <div class="palette-item" v-for="c in editColors" :key="c.id">
                <svg viewBox="0 0 64 64" width="20px" height="20px" class="anchor drag" style="fill: #fff;">
                    <rect x="35.01" y="48.31" width="6.44" height="6.44"></rect>
                    <rect x="35.01" y="35.43" width="6.44" height="6.44"></rect>
                    <rect x="35.01" y="22.55" width="6.44" height="6.44"></rect>
                    <rect x="35.01" y="9.67" width="6.44" height="6.44"></rect>
                    <rect x="22.13" y="48.31" width="6.44" height="6.44"></rect>
                    <rect x="22.13" y="35.43" width="6.44" height="6.44"></rect>
                    <rect x="22.13" y="22.55" width="6.44" height="6.44"></rect>
                    <rect x="22.13" y="9.67" width="6.44" height="6.44"></rect>
                </svg>
                <div class="color-bg">
                    <div class="color-block" :style="'background-color:'+c.color+';opacity:'+c.alpha"
                         @click="showPickerPanel(c)"/>
                </div>
                <div class="color-edit">
                    <input spellcheck="false" type="text" class="color-input" id="input-layer-label" v-model="c.color"/>
                </div>
                <svg viewBox="0 0 64 64" width="16px" height="16px" class="delBtn" style="fill:#ccc;"
                     @click="delColor(c)">
                    <path d="M51.4,13.9v1.6c0,0.9-0.7,1.6-1.6,1.6H13.6c-0.9,0-1.6-0.7-1.6-1.6v-1.6c0-0.9,0.7-1.6,1.6-1.6h9
                    c0.9,0,1.6-0.7,1.6-1.6C24.3,9.7,25.1,9,26,9h11.5c0.9,0,1.6,0.7,1.6,1.6c0,0.9,0.7,1.6,1.6,1.6h9C50.7,12.3,51.4,13,51.4,13.9z"/>
                    <path d="M40.8,50.1l0.8-25.4h-3.3l-0.8,25.4H40.8z M30.1,50.1h3.3V24.7h-3.3V50.1z M26,50.1l-0.8-25.4h-3.3l0.8,25.4H26
 z M44.9,55H18.5c-0.9,0-1.6-0.7-1.6-1.6l-1.5-31.2c0-0.9,0.7-1.7,1.6-1.7h29.4c0.9,0,1.7,0.8,1.6,1.7l-1.5,31.2C46.5,54.3,45.8,55,44.9,55z"/>
                </svg>
            </div>
        </draggable>
        <div class="button" @click="addColor">+ Add Step</div>
        <div class="line-split"></div>
        <div class="edit-footer">
            <div class="button confirm" @click="confirm">Confirm</div>
            <div class="button cancel" @click="cancel">Cancel</div>
        </div>
    </div>
</template>

<script>
import {Clickoutside} from './domUtil'
import draggable from "vuedraggable";
import colorPicker from './ColorPicker'
import {guid, hexToRgb, rgbToHex} from "./utils";

export default {
    name: "paletteEdit",
    props: ['palette'],
    components: {draggable, colorPicker},
    directives: {Clickoutside},
    mounted() {
        this.$nextTick(() => {
            if (this.palette && this.palette.colors.length > 0) {
                this.init()
            }
        })
    },
    data() {
        return {
            editColors: [], showPicker: false, curColor: '',
        }
    },
    watch: {
        colors: {
            handler: function (cSet) {
                if (cSet && cSet.colors.length > 0) {
                    this.init()
                }
            }
        }
    },
    methods: {
        init() {
            for (let i = 0; i < this.palette.colors.length; i++) {
                this.editColors.push({
                    id: guid(),
                    color: this.palette.colors[i],
                    alpha: this.palette.alphas[i]
                })
            }
        },
        addColor() {
            this.showPicker = false;
            this.curColor = null;
            if (this.editColors.length === 0) {
                this.editColors.push({
                    id: guid(),
                    color: '#FFFFFF',
                    alpha: 1
                })
                return;
            }
            let newColor = JSON.parse(JSON.stringify(this.editColors[this.editColors.length - 1]))
            newColor.id = guid();
            this.editColors.push(newColor)
        },
        delColor(color) {
            this.showPicker = false;
            this.curColor = null;
            for (let i = 0; i < this.editColors.length; i++) {
                if (this.editColors[i].id === color.id) {
                    this.editColors.splice(i, 1)
                }
            }
        },
        confirm() {
            let palettes = {
                "name": this.palette.name,
                "type": this.palette.type,
                "category": this.palette.category,
                colors: [],
                alphas: [],
            };
            for (let i = 0; i < this.editColors.length; i++) {
                palettes.colors.push(this.editColors[i].color)
                palettes.alphas.push(this.editColors[i].alpha);
            }
            this.$emit('change', palettes)
        },
        cancel() {
            this.$emit('change', null);
        },
        showPickerPanel(c) {
            this.showPicker = false;
            this.curColor = null;
            let {r, g, b} = hexToRgb(c.color)
            this.curColor = {id: c.id, r: r, g: g, b: b, a: c.alpha}
            this.showPicker = true;
        },
        changeColor(color) {
            for (let i = 0; i < this.editColors.length; i++) {
                if (this.editColors[i].id === this.curColor.id) {
                    let newColor = {
                        color: rgbToHex(color.r, color.g, color.b),
                        alpha: color.a
                    }
                    this.$set(this.editColors, i, newColor)
                }
            }
            this.showPicker = false;
            this.curColor = null;
        }
    }
}
</script>

<style lang="scss" scoped>
.palette-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3px;
    padding-bottom: 3px;
    z-index: 101;
    
    .delBtn {
        cursor: pointer;
        
        &:hover {
            fill: #fff;
        }
    }
    
    
    .color-bg {
        width: 32px;
        height: 18px;
        display: inline-block;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
        
        .color-block {
            width: 32px;
            height: 18px;
            display: inline-block;
        }
    }
    
    
    .color-edit {
        margin-left: 12px;
        
        .color-input {
            color: #A0A7B4;
            font-size: 10px;
            letter-spacing: 0.43px;
            line-height: 18px;
            height: 24px;
            font-weight: 400;
            max-width: 80px;
            padding-left: 4px;
            margin-left: -4px;
            background-color: transparent;
            border: 1px solid transparent;
            
            &:focus, &:hover {
                border: 1px #6a7485 solid;
            }
        }
    }
    
    .anchor {
        visibility: hidden;
    }
    
    &:hover {
        background-color: #3A4552;
        
        .anchor {
            visibility: visible;
        }
    }
}

.button {
    color: #A0A7B4;
    cursor: pointer;
    padding: 9px 12px;
    line-height: 14px;
    
    &:hover {
        color: #ffffff;
    }
}

.line-split {
    width: calc(100% - 16px);
    height: 1px;
    background-color: #6A7485;
    margin-top: 8px;
    margin-left: 8px;
}

.edit-footer {
    margin-top: 11px;
    display: flex;
    direction: rtl;
}

</style>