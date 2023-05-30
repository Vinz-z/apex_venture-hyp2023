<template>
  <div>
    <canvas ref="histogram" width="500" height="400">
      Get a newer browser!
    </canvas><br><br>
    <button @click="drawHistogram">Animate Graph</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      barWidth: null,
      linesToDraw: null,
      id: null,
      textBuffer: 20,
      block: 30,
      margin: 10,
      colors: ['#900', '#090', '#009', '#990', '#099', '#909'],
      data: [
        [3, 'cats'],
        [2, 'dogs'],
        [9, 'birds'],
        [4.5, 'dinosaurs'],
        [12, 'monkeys'],
        [1.5, 'giraffes']
      ]
    };
  },
  methods: {
    init() {
      this.canvas = this.$refs.histogram;
      this.ctx = this.canvas.getContext('2d');
      this.barWidth = (this.canvas.width / this.data.length) - this.margin;
  
      this.drawHistogram();
    },
    drawHistogram() {
      cancelAnimationFrame(this.id);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawAxisLabels();
      this.linesToDraw = this.block * 12;
  
      this.id = requestAnimationFrame(this.drawBars);
    },
    drawBars() {
      this.ctx.save();
      this.ctx.translate(20, this.canvas.height - 20);
  
      for (let j = 0; j < this.data.length; j++) {
        let currentLine = 360 - this.linesToDraw;
        this.ctx.fillStyle = this.colors[j];
        if (this.block * this.data[j][0] >= currentLine)
          this.ctx.fillRect(
            this.barWidth * j + this.margin * j,
            0,
            this.barWidth,
            -currentLine
          );
      }
  
      this.linesToDraw--;
  
      if (this.linesToDraw > 0) {
        this.id = requestAnimationFrame(this.drawBars);
      }
  
      this.ctx.restore();
    },
    drawAxisLabels() {
      this.ctx.save();
      this.ctx.translate(20, this.canvas.height - 20);
  
      for (let i = 0; i < this.data.length; i++) {
        this.ctx.fillStyle = this.colors[i];
        this.ctx.fillText(
          this.data[i][1],
          this.barWidth * i + this.margin * i + 5,
          15
        );
      }
  
      for (let j = 0; j <= 12; j++) {
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(j, -this.textBuffer, -j * this.block);
      }
  
      this.ctx.restore();
    }
  }
};
</script>