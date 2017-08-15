(function(){
	var oUl = document.getElementById('ul1');
	var aLi = oUl.children;
	var olLi = document.getElementById('ol').children;
	
	var oW = aLi[0].offsetWidth;
	var _index = 0;
	var isOff = true;
	var timer5 = null;
	var num = 0;
	
	for(var i=1;i<aLi.length;i++){
		aLi[i].style.left = oW + 'px';
	}
	
	for(var i=0;i<olLi.length;i++){
		olLi[i].index = i;
		olLi[i].onclick = function(){
			var _this = this
			ImgAuto(_this)
		}
	}
	clearInterval(timer5);
	timer5 = setInterval(function(){
		/*当前li*/
		num++
		if(num>olLi.length-1)
		{
			num = 0;
		}
		var _this = olLi[num]
		ImgAuto(_this);
	},3000)
	
	function ImgAuto(_this){
		if(!isOff){
				return;
			}
			isOff = false;
			
			for(var i=0;i<olLi.length;i++){
				olLi[i].className = '';
			}
			_this.className = 'show';
			
			if(_this.index > _index){ //左边
				aLi[_this.index].style.left = oW + 'px';
				move(aLi[_index],{
					left : -oW
				},500);
			}else if(_this.index < _index){//右边
				aLi[_this.index].style.left = -oW + 'px';
				move(aLi[_index],{
					left : oW
				},500);
			}
			move(aLi[_this.index],{
				left : 0
			},500,'',function(){
				isOff = true;
			});
			_index = _this.index;
	}
	
})()
