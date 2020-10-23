<template>
    <div class="color-picker" ref="colorPicker" v-show="show">
        <div class="color-picker-up">
            <div class="color-panel" ref="panelBg" :style="{background:background}" @click="bgClick">
                <div class="panel-bg-white"></div>
                <div class="panel-bg-black"></div>
                <div class="panel-thumb" ref="panelTh" :style="thumbPosition"></div>
            </div>
            <div class="color-sidebar">
                <div class="side-bar-bg" ref="sideBarBg" @mousedown="barSideClick"></div>
                <div class="side-bar-thumb" ref="sideBarTh" :style="stackPosition"></div>
            </div>
        </div>
        <div class="color-opacity">
            <div class="color-opacity-bar" ref="opacityBar" :style="backgroundOpacity"
                 @mousedown="barOpClick"></div>
            <div class="color-opacity-thumb" ref="opacityBarTh" :style="opPosition"></div>
        </div>
        <div class="flexbox-fix" style="display: flex; padding-top: 4px;">
            <div>
                <input spellcheck="false" style="max-width: 50px" v-model="colorToHex"><span>hex</span>
            </div>
            <div>
                <input spellcheck="false" type="number" @change="changeInput($event,'r')"
                       :value="this.showColor.r"/><span>r</span>
            </div>
            <div>
                <input spellcheck="false" type="number" @change="changeInput($event,'g')"
                       :value="this.showColor.g"/><span>g</span>
            </div>
            <div>
                <input spellcheck="false" type="number" @change="changeInput($event,'b')"
                       :value="this.showColor.b"/><span>b</span>
            </div>
            <div>
                <input spellcheck="false" style="max-width: 15px" type="number" @change="changeInput($event,'a')"
                       :value="this.showColor.a"/><span>a</span>
            </div>
        </div>
        <div style="display: flex;justify-content: flex-end;align-items: center">
            <div class="color-confirm" @click="emitVal">save</div>
        </div>
    </div>
</template>

<script>
import {draggable} from "./domUtil";
import {hexToRgb, rgbToHex} from "./utils";

export default {
    name: "ColorPicker",
    props: ['color'],
    data() {
        return {
            show: true,
            stackPosition: {
                top: "0px"
            },
            opBar: {},
            sideBar: {},
            opPosition: {
                left: "0px",
            },
            thumbPosition: {
                left: "0px",
                top: '0px'
            },
            bgColor: {
                r: null, g: null, b: null,
            },
            showColor: {
                r: 0, g: 0, b: 0, a: 0,
            },
        }
    },
    watch: {
        color: {
            handler: function (val) {
                if (val) {
                    Object.assign(this.showColor, val)
                } else {
                    Object.assign(this.showColor, {r: 0, g: 0, b: 0, a: 0,})
                }
            },
            deep: true,
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (this.color) {
                Object.assign(this.showColor, this.color)
            }
            this.calcInfo();
            if (this.showColor) {
                this.calcBg()
            }
            const dragSideConfig = {
                drag: (event) => {
                    this.handleSideDrag(event);
                },
                end: (event) => {
                    this.handleSideDrag(event);
                }
            };
            const dragOpConfig = {
                drag: (event) => {
                    this.handleOpDrag(event);
                },
                end: (event) => {
                    this.handleOpDrag(event);
                }
            }
            const dragPanelConfig = {
                drag: (event) => {
                    this.handlePanelDrag(event);
                },
                end: (event) => {
                    this.handlePanelDrag(event);
                }
            }
            draggable(this.$refs.sideBarTh, dragSideConfig)
            draggable(this.$refs.opacityBarTh, dragOpConfig)
            draggable(this.$refs.panelTh, dragPanelConfig)
        })
    },
    computed: {
        background() {
            let {r, g, b} = this.bgColor;
            return `rgb(${r}, ${g}, ${b})`;
        },
        backgroundOpacity() {
            let {r, g, b} = this.showColor;
            let start = `rgba(${r},${g},${b},0)`;
            let end = `rgba(${r},${g},${b},1)`;
            return {
                background: `linear-gradient(to right, ${start} 0%, ${end} 100%)`
            };
        },
        colorToHex: {
            get: function () {
                let {r, g, b} = this.showColor;
                return rgbToHex(r, g, b);
            },
            set: function (v) {
                let s = hexToRgb(v);
                Object.assign(this.showColor, s);
                this.calcBg();
            }
        },
    },
    methods: {
        emitVal() {
            this.$emit('change', this.showColor);
        },
        changeInput($event, key) {
            this.$set(this.showColor, key, $event.target.valueAsNumber)
            this.calcBg();
        },
        calcInfo() {
            let {left: l, width: w} = this.$refs.opacityBar.getBoundingClientRect();
            let {top: t, height: h} = this.$refs.sideBarBg.getBoundingClientRect();
            let {left, top, width, height} = this.$refs.panelBg.getBoundingClientRect();
            this.opBar = {l: l, w: w, el: this.$refs.opacityBar};
            this.sideBar = {t: t, h: h, el: this.$refs.sideBarBg};
            this.panel = {t: top, h: height, l: left, w: width, el: this.$refs.panelBg}
        },
        calcBg() {
            let {r, g, b} = this.showColor;
            let newColor = [
                {name: "r", value: r},
                {name: "g", value: g},
                {name: "b", value: b}
            ];
            newColor.sort((a, b) => {
                return b.value - a.value;
            });
            let max = newColor[0].value;
            let mid = newColor[1].value;
            let min = newColor[2].value;
            // 计算点像右延长至边界的点的色标
            newColor[1].value = ((min - mid) * max) / (min - max);
            newColor[2].value = 0;

            newColor[0].value = 255;
            newColor[1].value = parseInt((255 * newColor[1].value) / max);

            newColor.forEach(e => {
                this.bgColor[e.name] = e.value;
            });
            this.calcPosition();
        },
        calcPosition() {
            this.opPosition.left = this.opBar.w * this.showColor.a + "px";
            let {r, g, b} = this.bgColor;
            let height = this.sideBar.h;
            let top = 0;
            let total = height / 6;

            if (r === 255 && b === 0) top = (g / 255) * total;
            if (g === 255 && b === 0) top = (r / 255 + 1) * total;
            if (g === 255 && r === 0) top = (b / 255 + 2) * total;
            if (b === 255 && r === 0) top = (g / 255 + 3) * total;
            if (b === 255 && g === 0) top = (r / 255 + 4) * total;
            if (r === 255 && g === 0) top = (b / 255 + 5) * total;

            this.stackPosition.top = top + "px";
            let max = Math.max(this.showColor.r, this.showColor.g, this.showColor.b);
            let min = Math.min(this.showColor.r, this.showColor.g, this.showColor.b);
            if (max === 0) max = 1
            let x = (min / max) * this.panel.w;
            let y = this.panel.h - (max / 255) * this.panel.h;

            this.thumbPosition.left = this.panel.w - x + "px";
            this.thumbPosition.top = y + "px";
        },
        barOpClick($event) {
            this.opPosition.left = $event.offsetX + "px";
            this.showColor.a = Number(($event.offsetX / this.opBar.w).toFixed(2));
            this.handleOpDrag($event);
        },
        handleOpDrag(r) {
            let thumbLeft = r.pageX - this.opBar.l;
            if (thumbLeft >= this.opBar.w) {
                thumbLeft = this.opBar.w;
                this.showColor.a = 1;
            } else if (thumbLeft <= 0) {
                thumbLeft = 0;
                this.showColor.a = 0
            } else {
                this.showColor.a = Number((thumbLeft / this.opBar.w).toFixed(2));
            }
            this.opPosition.left = thumbLeft + "px";
        },
        barSideClick($event) {
            let height = this.sideBar.h;
            let top = $event.offsetY;
            this.changeBgBySide(top, height);
            // 点击背景后，滑块移动到指针处，在未松开鼠标时依然可拖动
            this.handleSideDrag($event);
        },
        changeShowColor() {
            let {w, h} = this.panel;
            let {left, top} = this.thumbPosition;
            left = parseInt(left.substr(0, left.length - 2));
            top = parseInt(top.substr(0, top.length - 2));

            let x = w - left;
            let y = top;

            this.calcWidthColor(x, y, w, h);
        },
        handleSideDrag(r) {
            let top = r.pageY - this.sideBar.t;
            if (top >= this.sideBar.h) top = this.sideBar.h;
            if (top <= 0) top = 0;
            this.changeBgBySide(top, this.sideBar.h);
            this.changeShowColor()
        },
        bgClick($event) {
            // 防止滑块触发背景点击事件
            if ($event.target.className === "panel-thumb") return;
            let {offsetX, offsetY} = $event;
            let {w} = this.panel;
            // 基于点击的位置给滑块定位
            this.thumbPosition = {
                left: offsetX + "px",
                top: offsetY + "px"
            };
            // 因为是基于右上角给推断颜色，所以将颜色的原点设在右上角
            // 所以此处x需要用宽度减去滑块的left
            let x = w - offsetX;
            let y = offsetY;
            this.calcWidthColor(x, y);

            // 点击背景后，滑块移动到指针处，在未松开鼠标时依然可拖动
            this.handlePanelDrag($event);
        },
        handlePanelDrag(res) {
            let {pageX, pageY} = res;
            let left = pageX - this.panel.l;
            let top = pageY - this.panel.t;

            if (left <= 0) left = 0;
            if (left >= this.panel.w) left = this.panel.w;
            if (top <= 0) top = 0;
            if (top >= this.panel.h) top = this.panel.h;

            this.thumbPosition = {
                left: left + "px",
                top: top + "px"
            };
            let x = this.panel.w - left;
            let y = top;
            this.calcWidthColor(x, y);
        },
        getValue(top, total, index) {
            return parseInt(((top - total * index) / total) * 255);
        },
        setColor(r, g, b) {
            this.bgColor.r = r;
            this.bgColor.g = g;
            this.bgColor.b = b;
        },
        changeBgBySide(top, h) {
            // 修改前先将滑块的位置改变
            this.stackPosition.top = top + "px";

            // 侧栏一共分为六个区域，每块区域的长度
            let total = h / 6;
            if (top <= (h * 1) / 6) {
                let g = this.getValue(top, total, 0);
                this.setColor(255, g, 0);
            } else if (top <= (h * 2) / 6) {
                let r = this.getValue(top, total, 1);
                this.setColor(255 - r, 255, 0);
            } else if (top <= (h * 3) / 6) {
                let b = this.getValue(top, total, 2);
                this.setColor(0, 255, b);
            } else if (top <= (h * 4) / 6) {
                let g = this.getValue(top, total, 3);
                this.setColor(0, 255 - g, 255);
            } else if (top < (h * 5) / 6) {
                let r = this.getValue(top, total, 4);
                this.setColor(r, 0, 255);
            } else if (top <= (h * 6) / 6) {
                let b = this.getValue(top, total, 5);
                this.setColor(255, 0, 255 - b);
            }
        },
        calcWidthColor(x, y) {
            let {w, h} = this.panel
            let newColor = JSON.parse(JSON.stringify(this.bgColor));
            delete newColor.a;
            for (let key in newColor) {
                // hue => 色相、三原色
                let hue = newColor[key];
                newColor[key] = ((255 - hue) * x + hue * w) / w;
            }
            this.calcHeightColor(x, y, w, h, newColor);
        },

        // 通过右边界交点计算原点的坐标
        calcHeightColor(x, y, w, h, color) {
            for (let key in color) {
                // hue => 色相、三原色
                let hue = color[key];
                this.showColor[key] = parseInt(((h - y) * hue) / h);
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.color-picker {
    font-size: 13px;
    border: 1px #888 solid;
    padding: 12px;

    .color-opacity {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
        background-size: 14px 14px;
        position: relative;

        .color-opacity-bar {
            width: 100%;
            height: 14px;
        }

        .color-opacity-thumb {
            position: absolute;
            top: -1px;
            left: 0;
            width: 4px;
            height: 100%;
            background: #fff;
            box-sizing: content-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.6);
        }
    }

    .color-picker-up {
        display: flex;
        min-height: 100px;
        margin-bottom: 14px;

        .color-panel {
            position: relative;
            width: 92%;
            margin-right: 14px;

            .panel-bg-white, .panel-bg-black {
                width: 100%;
                height: 100%;
                position: absolute;
            }

            .panel-bg-white {
                background: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
            }

            .panel-bg-black {
                background: linear-gradient(0deg, #000, transparent);
            }

            .panel-thumb {
                position: absolute;
                width: 5px;
                height: 5px;
                box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);
                border-radius: 50%;
                transform: translate(-2px, -2px);
                cursor: pointer;
            }
        }

        .color-sidebar {
            position: relative;
            flex: 1;

            .side-bar-bg {
                width: 10px;
                height: 100%;
                background: linear-gradient(180deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
            }

            .side-bar-thumb {
                position: absolute;
                top: 0;
                left: -1px;
                width: 11px;
                height: 4px;
                background: #fff;
                box-sizing: content-box;
                border: 1px solid #ddd;
                border-radius: 4px;
                cursor: pointer;
                box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.6);
            }
        }
    }

    .color-number {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            text-align: center;
            width: 24px;
            height: 24px;
            padding: 6px 6px;
            border: 1px solid #dddddd;
            outline: none;
            border-radius: 4px;
            color: #777;
            letter-spacing: 1px;
        }
    }

    .flexbox-fix {
        justify-content: space-between;
        div {
            padding-left: 1px;

            span {
                display: block;
                text-align: center;
                font-size: 11px;
                color: #6A7485;
                text-transform: capitalize
            }

            input {
                max-width: 25px;
                border: none;
                font-size: 11px;
                text-align: center;
                color: #A0A7B4 !important;
                border-color: #242730 !important;
                outline: none;
                background-color: #3A414C !important;

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

    .color-confirm {
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
        color: #aaa;
        text-align: center;
        font-size: 8px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;

        &:hover {
            color: #409eff;
            border-color: #409eff;
        }
    }
}

</style>