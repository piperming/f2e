/**
 * @param name 元素id或class
 * @param MaxWidth 最大压缩宽度
 * @param MaxHeight 最大压缩高度
 */
function showImage (name, MaxWidth, MaxHeight) {
	$(name).mouseover(function(){
        var thumbWidth = $(this).width();
        var thumbHeight = $(this).height();
		var tmpImg = new Image();
		tmpImg.src = $(this).attr('src');
        //原图尺寸
		var imgWidth = tmpImg.width;
		var imgHeight = tmpImg.height;
		if(imgWidth > MaxWidth){
			imgHeight = Math.round(imgHeight/imgWidth*MaxWidth);
			imgWidth = MaxWidth;
		}
		if(imgHeight > MaxHeight){
			imgWidth = Math.round(imgWidth/imgHeight*MaxHeight);
			imgHeight = MaxHeight;
		}
		//定位图片位置
		var offsetLeft = this.offsetLeft;
		var offsetTop = this.offsetTop;
		//向上偏移高度
		var offsetY = imgHeight + 15;
		var scrollTop = $(document).scrollTop(); 
		//小图距离上下窗口位置
		var upY = offsetTop - scrollTop
		var downY = $(window).height() - upY;
		//left定位位置
		var positionX = offsetLeft - 14;
        var arrowLeft = 12;
		//向下展示
		if(upY < offsetY && downY > offsetY){
			//top定位位置
			positionY = offsetTop + thumbHeight + 5;
			var arrowTop = -8;
			var arrow_class = 'arrow-up';
		}else{
		//向上展示
			//top定位位置
			positionY = offsetTop - offsetY;
			var arrowTop = imgHeight;
			var arrow_class = 'arrow-down';
		}
		var tpl = 
			'<div id="big-pic" style="left:'+positionX+'px; top:'+positionY+'px;"">'+
			'<div class="big-pic-box"><img src="' + tmpImg.src + '" "width='+imgWidth+' height='+imgHeight+'"/><em class="'+arrow_class+'" style="left:'+arrowLeft+'px; top:'+arrowTop+'px;"></em></div></div>';
		$(this).after(tpl);
	});
	$(name).mouseleave(function(){
		$('#big-pic').remove();
	});
}
