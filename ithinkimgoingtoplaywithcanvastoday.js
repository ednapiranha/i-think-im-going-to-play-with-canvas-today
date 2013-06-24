'use strict';

var Yada = function () {
  this.canvas = document.getElementById('ithinkimgoingtoplaywithcanvastoday');
  this.ctx = canvas.getContext('2d');
  this.image = new Image();
  this.start = window.mozAnimationStartTime || new Date().getTime();
  this.fps = 35;
  this.imageSize = 450;
};

Yada.prototype.yada = function () {
  var self = this;

  this.image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUVGNkRBMTQ0RDZEMTFFMjlFNkVFQ0RDQUUxQ0E4RkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk3NTE3QzY0RDkxMTFFMjlFNkVFQ0RDQUUxQ0E4RkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RUY2REExMjRENkQxMUUyOUU2RUVDRENBRTFDQThGQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RUY2REExMzRENkQxMUUyOUU2RUVDRENBRTFDQThGQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrUlBkwAAAHtSURBVHja7NIBDQAACMMwwL/n4wNaCcs6ScEPIwF2B7uD3cHuYHewO9gd7A52B7uD3bE72B3sDnYHu4Pdwe5gd7A72B3sjt3B7mB3sDvYHewOdge7g93B7mB37A52B7uD3cHuYHewO9gd7A52B7tjd7A72B3sDnYHu4Pdwe5gd7A72B3sjt3B7mB3sDvYHewOdge7g93B7mB37A52B7uD3cHuYHewO9gd7A52B7tjd7A72B3sDnYHu4Pdwe5gd7A72B27g93B7mB3sDvYHewOdge7g93B7tgd7A52B7uD3cHuYHewO9gd7A52B7tjd7A72B3sDnYHu4Pdwe5gd7A72B27g93B7mB3sDvYHewOdge7g93B7tgd7A52B7uD3cHuYHewO9gd7A52x+5gd7A72B3sDnYHu4Pdwe5gd7A72B27g93B7mB3sDvYHewOdge7g93B7tgd7A52B7uD3cHuYHewO9gd7A52x+5gd7A72B3sDnYHu4Pdwe5gd7A7dge7g93B7mB3sDvYHewOdge7g92xO9gd7A52B7uD3cHuYHewO9gd7A52x+5gd7A72B3sDnYHu4Pdwe5gd7A7dge7g93B7mB3sDvYHewOdge7g92xO9gd7A52B7uD3cHuYHewO9gd7I7dwe5wywowAFFnBPHcoukqAAAAAElFTkSuQmCC';
  this.image.width = this.image.height = this.imageSize;
  this.image.onload = function () {
    self.ctx.drawImage(self.image, 0, 0);

    self.imageData = self.ctx.getImageData(0, 0, self.imageSize, self.imageSize);
    self.imageDataNew = self.ctx.getImageData(0, 0, self.imageSize, self.imageSize);
    self.pixels = self.imageData.data;
    self.pixelsNew = self.imageDataNew.data;
    self.generate(self.start);
  };
};

Yada.prototype.generate = function (timestamp) {
  var pSwitch = Math.floor(Math.random() * 3);
  var progress = timestamp - this.start;
  var self = this;

  var imageArea = this.imageSize * this.imageSize * 4;

  for (var i = 0; i < imageArea; i ++) {
    if (this.imageData.data[i] < 128) {
      if (pSwitch === 2) {
        this.pixelsNew[i] = Math.floor(Math.random() * 165);
      } else if (pSwitch === 1) {
        this.pixelsNew[i] = Math.floor(Math.random() * 115);
      } else {
        this.pixelsNew[i] = Math.floor(Math.random() * 145);
      }
    } else {
      this.pixelsNew[i] = Math.floor(Math.random() * 255);
    }
  }

  this.ctx.putImageData(this.imageDataNew, 0, 0);

  if (progress < 20000) {
    setTimeout(function() {
      requestAnimationFrame(self.generate.bind(self));
    }, 1000 / self.fps);
  }
};
