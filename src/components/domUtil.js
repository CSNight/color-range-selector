const nodeList = [];
const ctx = '@@clickoutsideContext';

let startClick;
let seed = 0;
const on = function () {
    if (document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
}();
on(document, 'mousedown', e => (startClick = e));

on(document, 'mouseup', e => {
    nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
});


function createDocumentHandler(el, binding, vnode) {
    return function (mouseup = {}, mousedown = {}) {
        if (!vnode ||
            !vnode.context ||
            !mouseup.target ||
            !mousedown.target ||
            el.contains(mouseup.target) ||
            el.contains(mousedown.target) ||
            el === mouseup.target ||
            (vnode.context.popperElm &&
                (vnode.context.popperElm.contains(mouseup.target) ||
                    vnode.context.popperElm.contains(mousedown.target)))) return;
        
        if (binding.expression &&
            el[ctx].methodName &&
            vnode.context[el[ctx].methodName]) {
            vnode.context[el[ctx].methodName]();
        } else {
            el[ctx].bindingFn && el[ctx].bindingFn();
        }
    };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export const Clickoutside= {
    bind(el, binding, vnode) {
        nodeList.push(el);
        const id = seed++;
        el[ctx] = {
            id,
            documentHandler: createDocumentHandler(el, binding, vnode),
            methodName: binding.expression,
            bindingFn: binding.value
        };
    },
    
    update(el, binding, vnode) {
        el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
        el[ctx].methodName = binding.expression;
        el[ctx].bindingFn = binding.value;
    },
    
    unbind(el) {
        let len = nodeList.length;
        
        for (let i = 0; i < len; i++) {
            if (nodeList[i][ctx].id === el[ctx].id) {
                nodeList.splice(i, 1);
                break;
            }
        }
        delete el[ctx];
    }
};

let isDragging = false;

export function draggable(element, options) {
    const moveFn = function (event) {
        if (options.drag) {
            options.drag(event);
        }
    };
    const upFn = function (event) {
        document.removeEventListener('mousemove', moveFn);
        document.removeEventListener('mouseup', upFn);
        document.onselectstart = null;
        document.ondragstart = null;
        
        isDragging = false;
        
        if (options.end) {
            options.end(event);
        }
    };
    element.addEventListener('mousedown', function (event) {
        if (isDragging) return;
        document.onselectstart = function () {
            return false;
        };
        document.ondragstart = function () {
            return false;
        };
        
        document.addEventListener('mousemove', moveFn);
        document.addEventListener('mouseup', upFn);
        isDragging = true;
        
        if (options.start) {
            options.start(event);
        }
    });
}
