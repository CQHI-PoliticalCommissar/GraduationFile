// script.js
function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        alert("请旋转设备以进入横屏模式");
        // 可以在这里添加横屏提示样式
    }
}

// 在窗口加载时检查方向
window.addEventListener("load", checkOrientation);

// 监听方向变化
window.addEventListener("orientationchange", checkOrientation);