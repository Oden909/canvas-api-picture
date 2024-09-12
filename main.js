const canvas = document.querySelector('canvas')
const $ = canvas.getContext('2d')

$.setLineDash([4, 1]); 
$.beginPath()
$.moveTo(150, 50);
$.lineTo(185, 125);
$.lineTo(260, 125);
$.lineTo(200, 175);
$.lineTo(225, 250);
$.lineTo(150, 200);
$.lineTo(75, 250);
$.lineTo(100, 175);
$.lineTo(40, 125);
$.lineTo(115, 125);
$.closePath();
$.lineWidth = 4
$.strokeStyle = '#334'
$.stroke()



