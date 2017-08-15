function ImgExercise(Parent, Label, i, Direction, Range, s) {
				var Object = Parent.getElementsByTagName(Label)[i];
				Object.style[Direction] = Range + 'px';
				Object.style.opacity = '1';
				Object.style.transition = s;
			}
			window.onload = window.onresize = window.onscroll = function(){
				var oCrystal = document.getElementById('YouXiBox1');
				var oCrysta2 = document.getElementById('GameAppY');
				var oScroll = document.body.scrollTop || document.documentElement.scrollTop;
				if (oScroll >=0) {
					ImgExercise(oCrystal, 'img', 0, 'top', 0, '1.5s');
					ImgExercise(oCrystal, 'img', 0, 'left', 0, '1.5s');
					ImgExercise(oCrystal, 'img', 1, 'top', 0, '1.5s');
					ImgExercise(oCrystal, 'img', 1, 'right', 0, '1.5s');
					ImgExercise(oCrystal, 'p', 0, 'left', 0, '1.5s');
					setTimeout(function(){
						ImgExercise(oCrystal, 'img', 2, 'top', 0, '1.5s');
						ImgExercise(oCrystal, 'img', 2, 'right', 0, '1.5s');
					},300)
				}
				
				if(oScroll>300)
				{
					ImgExercise(oCrystal, 'img', 3, 'top', 0, '1.5s');
					ImgExercise(oCrystal, 'img', 3, 'left', 0, '1.5s');
					ImgExercise(oCrystal, 'img', 4, 'top', 0, '1.5s');
					ImgExercise(oCrystal, 'img', 4, 'left', 0, '1.5s');
				}
				if(oScroll>830)
				{
					ImgExercise(oCrysta2, 'img', 0, 'bottom', 0, '1.5s');
					ImgExercise(oCrysta2, 'img', 0, 'right', 0, '1.5s');
				}
				
				/*游戏分类鼠标移上去效果*/
				var YouXiBox = document.getElementById('GameItem');
				var YouXiDL = YouXiBox.getElementsByTagName('dl');
				
				function Clean(){
					for(var i=0;i<YouXiDL.length;i++)
					{
						var oDt = YouXiDL[i].getElementsByTagName('dt')[0].getElementsByTagName('img')[0];
						oDt.onmouseover = function(){
							this.style.width = '187px';
						}
						oDt.onmouseout = function(){
							this.style.width = '176px';
						}
					}
				}
				 Clean()
				/*游戏分类*/
				var oImg1 = document.getElementById('DL_1');
				var oImg2 = document.getElementById('Img2');
				var oImg3 = document.getElementById('Img3');
				var oImg4 = document.getElementById('Img4');
				var oImg5 = document.getElementById('Img5');
				if(oScroll>1000)
				{
					ImgExercise(oImg1, 'img', 0, 'width', 176, '1s');
					ImgExercise(oImg2, 'img', 0, 'width', 176, '1.5s');
					ImgExercise(oImg3, 'img', 0, 'width', 176, '2s');
					ImgExercise(oImg4, 'img', 0, 'width', 176, '2.5s');
					ImgExercise(oImg5, 'img', 0, 'width', 176, '3s');
				}
				
				/*快乐生活 快乐游戏*/
				var oHappBox = document.getElementById('HappyContBox');
				if(oScroll>=1480)
				{
					ImgExercise(oHappBox, 'img', 1, 'left', 0, '2s');
					setTimeout(function(){
						ImgExercise(oHappBox, 'img', 2, 'left', 300, '3s');
					},100)
					
					ImgExercise(oHappBox, 'img', 3, 'left', 0, '3s');
					ImgExercise(oHappBox, 'img', 4, 'top', 0, '2s');
					ImgExercise(oHappBox, 'img', 5, 'left', 0, '5s');
					ImgExercise(oHappBox, 'img', 6, 'top', 0, '6s');
					
				}
				
				
				
			}