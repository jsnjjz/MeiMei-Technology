(function(){
		Move('div','div1')
		function Move(obj1,obj2){
			var oBox = document.getElementById(obj1);
			var oDiv = document.getElementById(obj2);
			var iL = oBox.offsetLeft;
			var iT = oBox.offsetTop;		
			document.onmousemove = function(ev){
				var ev = ev || window.event;
				var l = ev.clientX - iL;
				var t = ev.clientY - iT;
				
				if(l < oDiv.offsetWidth/2){
					l = oDiv.offsetWidth/2;
				}else if(l > oBox.clientWidth - oDiv.offsetWidth/2){
					l = oBox.clientWidth - oDiv.offsetWidth/2;
				}
				
				if(t < oDiv.offsetHeight/2+10){
					t = oDiv.offsetHeight/2+10;
				}else if(t > oBox.clientHeight - oDiv.offsetHeight/2){
					t = oBox.clientHeight - oDiv.offsetHeight/2;
				}
				
				
				//document.title = l +'|'+ t;
				oDiv.style.left = l - oDiv.offsetWidth/2-10 + 'px';
				oDiv.style.top = t - oDiv.offsetHeight/2-10 + 'px';
				
			}
		}
})()
