window.onload = function(){
	(function(){
	var oDhBox = document.getElementById("DongHuaBox");
		var aLi = oDhBox.getElementsByTagName("li");
		var oHashArry = ["Case","Item","Team"];
		var Now = 0;
		var json = null;
				
		var oSearch = window.location.search;
		switch(oSearch)
		{
			case '':window.location.search = "?Case";
			break;
			
			case '?Case':
				  json = Case;
			break;
			
			case '?Item':
				json = Item;
			break;
			
			case '?Team':
				json = Team;
			break
			
		}
		
		
		/*渲染翻页*/
		var oPageBox = document.getElementById("pageBox");/*翻页最外围容器*/
		var oPage = document.getElementById("pages");/*翻页数字*/
		var Page = Math.ceil(json.length/6);/*json的长度除以默认显示个数等于页数*/
		var CaseBox = document.getElementById("CaseBox");/*内容区*/
		for(var i=0;i<Page;i++)
		{
			var aSpan = document.createElement("span");
			aSpan.innerHTML = i+1;
			oPage.appendChild(aSpan);
		}
		/*点击翻页*/
		var aBtn = oPage.getElementsByTagName('span');
		for(var i=0;i<aBtn.length;i++)
		{
			(function(index){
				aBtn[i].onclick = function(){
					window.location.hash ="Page="+(index+1);
					for(var i=0;i<aBtn.length;i++)
					{
						aBtn[i].className = "";
					}
					this.className = "cur";
					Data(index);
				}
			})(i)
		}
		
		/*默认数据*/
		for(var i=0;i<6;i++)
		{
			var oDL = document.createElement("dl");
			oDL.innerHTML = '<dt><a href="#" class="Img"><img src='+json[i].ContImg+' alt="" title="" /></a></dt>';
			oDL.innerHTML +='<dd><div class="InforMain"><p class="Txt"><a href="#">'+json[i].title+'</a><img src='+json[i].Icon1+' alt="" title="" /><img src='+json[i].Icon2+' alt="" title="" /></p><p class="NeiR">'+json[i].Txt+'</p><a href="#" class="More">'+json[i].More+'</a></div></dd>'
			CaseBox.appendChild(oDL);
		}
		
		var oHash = window.location.hash;
		oHash=oHash?oHash:'page=1';
		var num = oHash.split('=')[1];/*获取hash第几页*/
		window.location.hash = oHash/*一开始默认的hash*/
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className = '';
		}
		aBtn[num-1].className = 'cur';
		Data(num-1)
		/*标题切换效果*/
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].index = i;
			aLi[i].onclick = function(){
				for(var i=0;i<aLi.length;i++)
				{
					aLi[i].className = '';
				}
				this.className = "cur";
				window.location.search = oHashArry[this.index];
			}
		}
		
		/*数据结构渲染*/
		function Data(index){
			CaseBox.innerHTML="";
			for(var i=index*6;i<index*6+6;i++)
			{
				var oDL = document.createElement("dl");
				if(json[i])
				{
					oDL.innerHTML = '<dt><a href="#" class="Img"><img src='+json[i].ContImg+' alt="" title="" /></a></dt>';
					oDL.innerHTML +='<dd><div class="InforMain"><p class="Txt"><a href="#">'+json[i].title+'</a><img src='+json[i].Icon1+' alt="" title="" /><img src='+json[i].Icon2+' alt="" title="" /></p><p class="NeiR">'+json[i].Txt+'</p><a href="#" class="More">'+json[i].More+'</a></div></dd>'
					CaseBox.appendChild(oDL);
				}
			}
		}
		
		/*点击往下切换*/
		var aNext = document.getElementById("next");
		aNext.onclick = function(){
			Now++;
			if(Now>aBtn.length-1)
			{
				Now = aBtn.length-1;
			}
			NameCur();
			window.location.hash ="Page="+(Now+1);
			Data(Now);
		}
		/*往上点击切换*/
		var aPrev = document.getElementById("prev");
		aPrev.onclick = function(){
			Now--;
			if(Now<0)
			{
				Now = 0;
			}
			NameCur();/*切换当前样式*/
			window.location.hash ="Page="+(Now+1);
			Data(Now);
		}
		/*当前翻页切换样式*/
		function NameCur(){
			for(var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className = '';
			}
			aBtn[Now].className = "cur";
		}
})()	
}

