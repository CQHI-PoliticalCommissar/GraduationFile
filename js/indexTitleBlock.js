const createFloatingBox = () => {
    const box = document.createElement('div');
    box.className = 'floating-box';

    // 设置随机颜色
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    box.style.backgroundColor = randomColor;

    // 设置随机位置
    const maxWidth = window.innerWidth - 50; // 减去方块的宽度
    const maxHeight = window.innerHeight - 50; // 减去方块的高度

    box.style.left = Math.random() * maxWidth + 'px';
    box.style.top = Math.random() * maxHeight + 'px';

    document.body.appendChild(box);
};

// 创建多个方块
const numberOfBoxes = 150; // 方块数量
for (let i = 0; i < numberOfBoxes; i++) {
    createFloatingBox();
}