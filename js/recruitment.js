(function(){
	window.onload = function(){
			var leftBox = document.getElementById('leftBox');/*左侧容器*/
			var aBtn = leftBox.getElementsByTagName('a');/*招聘点击按钮*/
			var oH3 = document.getElementsByTagName('h3')[0];/*当前信息显示*/
			var oInfo = document.getElementById('info');/*右侧数据信息*/
			var oPage = document.getElementById('pages');/*分页*/
			var oNext = document.getElementById('next');
			var oPrev = document.getElementById('prev');
			var Now = 0;
			
			/*数据渲染*/
			var oNav = window.location.search/*获取查询信息*/
			var json = null;
			switch(oNav){
				case '':
					 window.location.search = '?world';
				break;
				
				case '?world':
					aBtn[0].className = 'red';
					oH3.innerHTML = '社会招聘';
					json = data;
				break;
				
				case '?school':
					aBtn[1].className = 'red';
					oH3.innerHTML = '校园招聘';
					json = data2;
				break;
			}
			
			
			
			for(var i=0;i<5;i++)
			{
				var oDiv = document.createElement('div');
				oDiv.innerHTML = '<p class="block"><span>'+data[i].num+'</span><span>职位需求：社会招聘</span><span>需求人数：2名</span><span>2014-04-10</span></p><p class="gays">岗位要求：1)helpdesk支持；2)熟悉计算机软、硬件及网络维护；3)有相关工作经验，态度端正；4)有一定的服务意识<a href="javascript:void(0);">【查看详情】</a></p>';
				oInfo.appendChild(oDiv);
			}
			
			/*渲染翻页*/
			var aPage = Math.ceil(json.length/5);
			for(var i=0;i<aPage;i++)
			{
				var aSpan = document.createElement('span');
				aSpan.innerHTML = i+1;
				oPage.appendChild(aSpan);
			}
		
			var aBtn = oPage.getElementsByTagName('span');
			var oHash = window.location.hash;
			oHash=oHash?oHash:'page=1';
			var num = oHash.split('=')[1];/*获取hash第几页*/
			window.location.hash = oHash/*一开始默认的hash*/
			aBtn[0].className = 'actColor'
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className = '';
			}
			aBtn[num-1].className = 'actColor';
			cearDiv(num-1)
			
			for(var i=0;i<aBtn.length;i++)
			{
				(function(index){
					aBtn[i].onclick = function(){
						for(var i=0;i<aBtn.length;i++)
						{
							aBtn[i].className = '';
						}
						this.className = 'actColor';
						window.location.hash = 'page='+(index+1);
						cearDiv(index)
					}
				})(i)
			}	
			
			/*内容切换*/
			function cearDiv(index){
				oInfo.innerHTML = '';
				for(var i=index*5;i<index*5+5;i++)
				{
					var oDiv = document.createElement('div');
					if(json[i])
					{
						oDiv.innerHTML = '<p class="block"><span>'+json[i].num+'</span><span>职位需求：'+json[i].job+'</span><span>需求人数：'+json[i].pNum+'名</span><span>'+json[i].data+'</span></p><p class="gays">'+json[i].ask+'<a href="javascript:void(0);">【查看详情】</a></p>';
						oInfo.appendChild(oDiv);
					}
				}
			}
			
			oNext.onclick = function(){
				Now++;
				if(Now>aBtn.length-1)
				{
					Now = aBtn.length-1;
				}
				for(var i=0;i<aBtn.length;i++){
					aBtn[i].className = '';
				}
				aBtn[Now].className = 'actColor';
				window.location.hash = 'page='+(Now+1);
				cearDiv(Now);	
			}
			
			oPrev.onclick = function(){
				Now--;
				if(Now<0)
				{
					Now = 0;
				}
				for(var i=0;i<aBtn.length;i++){
					aBtn[i].className = '';
				}
				aBtn[Now].className = 'actColor';
				window.location.hash = 'page='+(Now+1);
				cearDiv(Now);	
			}
		}
})()
