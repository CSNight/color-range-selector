

export function guid() {
    /**
     * @return {string}
     */
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16)
            .substring(1);
    }
    
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-"
        + S4() + S4() + S4());
}
export function rgb2cmyk(r, g, b) {
    let computedC = 0;
    let computedM = 0;
    let computedY = 0;
    let computedK = 0;
    
    // BLACK
    if (r == 0 && g == 0 && b == 0) {
        computedK = 1;
        return [0, 0, 0, 100];
    }
    
    computedC = 1 - (r / 255);
    computedM = 1 - (g / 255);
    computedY = 1 - (b / 255);
    
    let minCMY = Math.min(computedC, Math.min(computedM, computedY));
    computedC = (computedC - minCMY) / (1 - minCMY);
    computedM = (computedM - minCMY) / (1 - minCMY);
    computedY = (computedY - minCMY) / (1 - minCMY);
    computedK = minCMY;
    
    return [Math.round(computedC * 100), Math.round(computedM * 100), Math.round(computedY * 100), Math.round(computedK * 100)];
}

export function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1).toUpperCase();
}

export function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function rgbaToArr(rgba) {
    if (typeof rgba === 'string') {
        rgba = rgba.replace(/\s+/g, "");
        rgba = (/rgba?\((.*?)\)/.exec(rgba) || ['', '0,0,0,1'])[1].split(',')
        return {
            r: Number(rgba[0]) || 0,
            g: Number(rgba[1]) || 0,
            b: Number(rgba[2]) || 0,
            a: Number(rgba[3] ? rgba[3] : 1) // 避免为0的情况
        }
    } else {
        return rgba
    }
}
export function rgbToArr(rgb) {
    if (typeof rgb === 'string') {
        rgb = rgb.replace(/\s+/g, "");
        rgb = (/rgb?\((.*?)\)/.exec(rgb) || ['', '0,0,0'])[1].split(',')
        return {
            r: Number(rgb[0]) || 0,
            g: Number(rgb[1]) || 0,
            b: Number(rgb[2]) || 0,
        }
    } else {
        return rgb
    }
}