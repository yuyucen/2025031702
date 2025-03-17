let angle = 0;
let seaweedCount = 40;
let seaweedLengths = [];
let seaweedColors = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas-container'); // 將畫布附加到指定的 div 中
  for (let i = 0; i < seaweedCount; i++) {
    seaweedLengths.push((width / 8) * (0.5 + Math.random())); // 設定每條海草的長度為原本的0.5到1.5倍
    seaweedColors.push(color(random(255), random(255), random(255))); // 設定每條海草的顏色為隨機鮮艷顏色
  }
}

function draw() {
  clear(); // 清除畫布，使背景透明
  strokeWeight(30); // 設定波浪線的粗細
  noFill(); // 不填充波浪線內部

  for (let i = 0; i < seaweedCount; i++) {
    let seaweedLength = seaweedLengths[i];
    let xOffset = (i + 0.5) * (width / seaweedCount); // 計算每條海草的 x 座標，使其均勻分佈
    stroke(seaweedColors[i]); // 使用預先設定的顏色
    beginShape();
    for (let y = height - seaweedLength; y <= height; y += 10) {
      let x = xOffset + sin(angle + y * 0.1) * 5; // 減少振幅，使波浪線的擺動幅度變得更小
      vertex(x, y); // 繪製波浪線的頂點
    }
    endShape();
  }

  angle += 0.05; // 增加角度，使波浪線持續擺動
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  seaweedLengths = [];
  seaweedColors = [];
  for (let i = 0; i < seaweedCount; i++) {
    seaweedLengths.push((width / 8) * (0.5 + Math.random())); // 重新設定每條海草的長度
    seaweedColors.push(color(random(255), random(255), random(255))); // 重新設定每條海草的顏色
  }
}
