/*
PieceLabel.prototype.fillText = function (text, position, fontColor) {
    var ctx = this.ctx;
    if (typeof text === 'object') {
      ctx.drawImage(text, position.x - text.width / 2, position.y - text.height / 2, text.width, text.height);
    } else {
      ctx.fillStyle = fontColor;
      ctx.textBaseline = 'top';
      ctx.textAlign = 'center';
      var split_string = text.split('\n');
      for(var i=0;i<split_string.length;i++){
        var new_pos = {
          x: position.x,
          y: (position.y - this.fontSize / 2) + (i*this.fontSize)
        };
        ctx.fillText(split_string[i], new_pos.x, new_pos.y);
      }
    }
};*/

$(document).ready(function(){
  
});