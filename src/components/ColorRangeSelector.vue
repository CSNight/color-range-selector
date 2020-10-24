<template>
    <div class="selector" ref="dom" v-clickoutside="closeDropdown">
        <div class="selector-input">
            <color-palette v-if="selectPalette" :colors="selectPalette.colors" @click.native="showDropdown"/>
            <svg viewBox="0 0 1024 1024" width="16" height="16" style="fill: #fff;cursor: pointer" v-if="!showDrop"
                 @click="showDropdown">
                <path
                    d="M792.576 327.68c-8.192-8.192-20.48-8.192-28.672 0L552.96 559.104 342.016
                    327.68c-8.192-8.192-20.48-8.192-28.672 0-8.192 8.192-8.192 20.48 0 28.672l223.232
                    245.76c4.096 4.096 10.24 6.144 16.384 6.144 6.144 0 12.288-2.048
                    16.384-6.144l223.232-245.76C800.768 348.16 800.768 335.872 792.576 327.68z"
                />
            </svg>
            <svg viewBox="0 0 1024 1024" width="16" height="16" style="fill: #fff;cursor: pointer"
                 @click="closeDropdown" v-if="showDrop">
                <path
                    d="M696 285.6L285.8 695.8c-11.7 11.7-11.7 30.8 0 42.4 11.7 11.7 30.8 11.7 42.4 0L738.4 328c11.7-11.7 11.7-30.8 0-42.4-11.6-11.7-30.7-11.7-42.4 0z"
                />
                <path
                    d="M328.2 285.6l410.2 410.2c11.7 11.7 11.7 30.8 0 42.4-11.7 11.7-30.8 11.7-42.4 0L285.8 328c-11.7-11.7-11.7-30.8 0-42.4 11.6-11.7 30.7-11.7 42.4 0z"
                />
            </svg>
        </div>
        <div class="dropdown" v-if="showDrop" :style="dropWidth">
            <div class="form-wrapper">
                <div class="form-item">Types</div>
                <cus-select class="form-item" :types="types" :clazz="currentType" @change="chooseType"/>
            </div>
            <div class="form-wrapper">
                <div class="form-item">Steps</div>
                <div class="form-item">
                    <div class="num-input">
                        <input class="dropdown-label" type="number" :readonly="steps" @change="changeStep"
                               :value="step"/>
                    </div>
                </div>
            </div>
            <div class="form-wrapper">
                <div class="form-item">Reversed</div>
                <div class="form-item">
                    <div class="selector-check" @click="reverseColor">
                        <label :class="reverse?'check':'un-check'"></label>
                    </div>
                </div>
            </div>
            <div class="form-wrapper">
                <div class="form-item">Custom</div>
                <div class="form-item">
                    <div class="selector-check" @click="showCustom">
                        <label :class="showCus?'check':'un-check'"></label>
                    </div>
                </div>
            </div>
            <div class="color-palette__group" v-if="!showCus">
                <div class="color-palette__outer" v-for="item in matchColorSets" :key="item.name"
                     @click="choosePalette(item)">
                    <color-palette :colors="item.colors"/>
                </div>
            </div>
            <div class="color-custom__group" v-if="showCus&&selectPalette">
                <color-palette :colors="selectPalette.colors" @click.native="showDropdown"/>
                <palette-edit :palette="selectPalette" @change="editChange"/>
            </div>
        </div>
    </div>
</template>

<script>
import ColorPalette from "./ColorPalette";
import {colorScheme} from "./colorSchemas";
import CusSelect from "./CusSelect";
import PaletteEdit from "./paletteEdit";
import {Clickoutside} from './domUtil'
import {hexToRgb, rgbaToArr, rgbToArr, rgbToHex} from "./utils";

export default {
    name: "ColorRangeSelector",
    directives: {Clickoutside},
    components: {PaletteEdit, CusSelect, ColorPalette},
    props: ['steps', 'value', 'mode'],
    data() {
        return {
            currentType: 'sequential',
            selectPalette: null,
            showDrop: false,
            showCus: false,
            reverse: false,
            modes: 'HEX',
            step: 3
        }
    },
    mounted() {
        if (this.steps && !isNaN(this.steps)) {
            this.step = parseInt(this.steps);
        }
        if (this.mode) {
            this.modes = this.mode;
        }
        if (!this.init()) {
            this.selectPalette = this.matchColorSets[0];
        }
    },
    watch: {
        value: {
            handler: function (val) {
                if (val) {
                    this.init();
                }
            },
            deep: true
        },
    },
    computed: {
        dropWidth() {
            return {
                width: this.$refs.dom ? (this.$refs.dom.offsetWidth + "px") : '100%'
            }
        },
        types: function () {
            let t = new Set();
            colorScheme.forEach(item => {
                t.add(item.type)
            })
            return Array.from(t);
        },
        matchColorSets: function () {
            let sets = [];
            let cloneSets = JSON.parse(JSON.stringify(colorScheme))
            cloneSets.forEach(item => {
                if (this.currentType !== '' && item.type !== this.currentType) {
                    return;
                }
                if (this.step === item.colors.length) {
                    item.alphas = new Array(item.colors.length).fill(1)
                    if (this.reverse) {
                        item.colors.reverse()
                    }
                    if (this.selectPalette && item.name === this.selectPalette.name) {
                        if (JSON.stringify(this.selectPalette) !== JSON.stringify(item)) {
                            this.selectPalette = JSON.parse(JSON.stringify(item));
                        }
                    }
                    sets.push(item)
                }
            })
            return sets;
        }
    }, methods: {
        changeStep(e) {
            this.step = e.target.valueAsNumber
        },
        init() {
            if (this.value && this.value.length > 0) {
                this.selectPalette = {
                    name: 'custom',
                    type: 'custom',
                    category: 'custom',
                    colors: [],
                    alphas: []
                }
                for (let i = 0; i < this.value.length; i++) {
                    if (this.value[i].indexOf('#') !== -1) {
                        this.selectPalette.colors.push(this.value[i])
                        this.selectPalette.alphas.push(1)
                    } else if (this.value[i].indexOf('rgba(') !== -1) {
                        let rgba = rgbaToArr(this.value[i])
                        this.selectPalette.colors.push(rgbToHex(rgba.r, rgba.g, rgba.b))
                        this.selectPalette.alphas.push(rgba.a)
                    } else if (this.value[i].indexOf('rgb(') !== -1) {
                        let rgba = rgbToArr(this.value[i])
                        this.selectPalette.colors.push(rgbToHex(rgba.r, rgba.g, rgba.b))
                        this.selectPalette.alphas.push(1)
                    }
                }
                return true
            }
            return false;
        },
        emitVal() {
            if (!this.selectPalette || this.selectPalette.colors.length === 0) {
                return;
            }
            let tc = [];
            if (!this.modes) {
                this.modes = 'HEX';
            }
            switch (this.modes.toUpperCase()) {
                default:
                case"HEX":
                    this.$emit('change', JSON.parse(JSON.stringify(this.selectPalette.colors)))
                    break;
                case"RGB":
                    for (let i = 0; i < this.selectPalette.colors.length; i++) {
                        let rgb = hexToRgb(this.selectPalette.colors[i])
                        tc.push(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
                    }
                    this.$emit('change', tc)
                    break;
                case"RGBA":
                    for (let i = 0; i < this.selectPalette.colors.length; i++) {
                        let rgb = hexToRgb(this.selectPalette.colors[i])
                        tc.push(`rgba(${rgb.r},${rgb.g},${rgb.b},${this.selectPalette.alphas[i]})`)
                    }
                    this.$emit('change', tc)
                    break;
            }
        },
        choosePalette(e) {
            this.$set(this, 'selectPalette', e);
        },
        chooseType(type) {
            this.currentType = type;
            this.showCus = false
        },
        showDropdown() {
            this.showDrop = true;
        },
        closeDropdown() {
            this.emitVal()
            this.showDrop = false;
        },
        showCustom() {
            this.showCus = !this.showCus
        },
        reverseColor() {
            this.reverse = !this.reverse
        },
        editChange(palette) {
            this.showCus = false;
            if (palette && palette.colors.length > 0) {
                palette.name = "custom"
                this.selectPalette = palette;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.input-box {
    display: flex;
    justify-content: space-between;
}

.selector {
    background-color: #29323C;
    border: 1px solid #D3D8E0;
    border-radius: 2px;
    caret-color: #D3D8E0;
    color: #A0A7B4;
    font-size: 11px;
    font-weight: 500;
    font-family: ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif;
    height: 34px;
    outline: none;
    text-overflow: ellipsis;
    transition: all .4s ease;
    white-space: nowrap;
    min-width: 200px;
    word-wrap: normal;
    pointer-events: all;
    opacity: 1;
    box-shadow: none;

    .dropdown-label {
        color: #A0A7B4;
        margin-left: 10px;
        font-size: 11px;
        line-height: 20px;
    }

    .selector-input {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 8px;
        cursor: pointer;
        box-sizing: border-box;
    }

    .selector-check {
        display: flex;
        min-height: 12px;
        margin-left: 12px;
        justify-content: flex-end;

        input {
            position: absolute;
            display: none;
        }

        .un-check {
            user-select: none;
            cursor: pointer;
            line-height: 12px;
            font-weight: 500;
            font-size: 12px;
            color: #6A7485;
            position: relative;
            display: inline-block;
            padding: 0 0 0 24px;

            &:before {
                position: absolute;
                top: 0;
                left: -12px;
                content: '';
                display: block;
                width: 24px;
                height: 12px;
                border-radius: 1px;
                background: #242730;
            }

            &:after {
                transition: all .4s ease;
                position: absolute;
                top: 0px;
                left: -12px;
                content: '';
                display: block;
                height: 12px;
                width: 12px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.40);
                border-radius: 0;
                background: #3A414C;
            }
        }

        .check {
            user-select: none;
            cursor: pointer;
            line-height: 12px;
            font-weight: 500;
            font-size: 12px;
            color: #6A7485;
            position: relative;
            display: inline-block;
            padding: 0 0 0 24px;

            &:before {
                background: #1FBAD6;
                position: absolute;
                top: 0;
                left: -12px;
                content: '';
                display: block;
                width: 24px;
                height: 12px;
                border-radius: 1px;
            }

            &:after {
                transition: all .4s ease;
                position: absolute;
                top: 0;
                left: 0;
                content: '';
                display: block;
                height: 12px;
                width: 12px;
                background: #D3D8E0;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.40);
                border-radius: 0;
            }
        }
    }

    .selector-input:hover {
        cursor: pointer;
        background-color: #3A414C;
        border-color: #D3D8E0;
    }

    .dropdown {
        background-color: #29323C;
        border: 0;
        max-height: 400px;
        min-height: 150px;
        overflow-y: auto;
        overflow-x: hidden;
        width: 100%;
        left: 0;
        z-index: 100;
        position: relative;
        bottom: auto;
        margin-top: 4px;
        margin-bottom: auto;
        box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);

        .color-palette__group {
            .color-palette__outer {
                padding: 0 8px;

                &:hover {
                    background-color: #39423C;
                    cursor: pointer;
                }
            }
        }

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
    }

    .form-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 5px 10px;

        .form-item {
            line-height: 32px;
            flex: 1;
            box-sizing: border-box;
            position: relative;
        }
    }

    .num-input {
        background-color: #3A414C;
        border-color: #D3D8E0;
        box-shadow: none;
        width: 100%;
        box-sizing: border-box;
        line-height: 28px;
        color: #A0A7B4;
        overflow: hidden;

        input {
            width: 100%;
            background: transparent;
            border: none;
            outline: none;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
        }

        input[type="number"] {
            -moz-appearance: textfield;
        }
    }

}
</style>