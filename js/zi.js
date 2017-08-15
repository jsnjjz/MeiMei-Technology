// JavaScript Document
$(function(){
	$(".Input").focus(function(){
			  if($(this).val() ==this.defaultValue){  
                  $(this).val("");           
			  } 
		}).blur(function(){
			 if ($(this).val() == '') {
                $(this).val(this.defaultValue);
             }
		});
	
	
	$(".LeftTab .Title h3").each(function(y){
		$(this).hover(function(){
			$(".LeftTab .Title h3").removeClass("cur");
			$(".LeftTab .Title h3").eq(y).addClass("cur");
			$(".TabList").hide();
			$(".TabList").eq(y).show();
		},function(){
			$(".LeftTab .Title h3").removeClass("cur");
			$(".LeftTab .Title h3").eq(y).addClass("cur");
			$(".TabList").hide();
			$(".TabList").eq(y).show();
		})
	})
	
	
	$(".BtnDown ul li").each(function(y){
		$(this).hover(function(){
			$(".Img").eq(y).hide();
			$(".WB").hide();
			$(".WB").eq(y).stop(true,true).show();
		},function(){
			$(".Img").stop(true,true).show();
			$(".WB").stop(true,true).hide();
		})
	})
	
	
		$(".HTitle .HCont ul li").each(function(y){
			$(this).hover(function(){
				$(".HTitle .HCont ul li").removeClass("cur");
				$(".HTitle .HCont ul li").eq(y).addClass("cur");
				$(".CaseList").hide();
				$(".CaseList").eq(y).show();
			},function(){
				$(".HTitle .HCont ul li").removeClass("cur");
				$(".HTitle .HCont ul li").eq(y).addClass("cur");
				$(".CaseList").hide();
				$(".CaseList").eq(y).show();
			})
		})
		
		
		$(".PhotoLeft .TitleTab h2").each(function(y){
			$(this).hover(function(){
				$(".PhotoLeft .TitleTab h2").removeClass("cur");
				$(".PhotoLeft .TitleTab h2").eq(y).addClass("cur");
				$(".PhotoLeft .ZBList").hide();	
				$(".PhotoLeft .ZBList").eq(y).show();
			})
		})

		

		
		$(".ZBList ul li").each(function(y){
			$(this).mouseover(function(){
				$(".ZBList ul li").find("p").hide();
				$(".ZBList ul li").eq(y).find("p").show();
			})
		})
		
		
		$(".Popup").find(".Close").click(function(){
			$(".Popup").hide();
		})
		
		$(".SpeciesLIst #DL_1").click(function(){
			$("#Popup1").show();
		})
		$(".SpeciesLIst #DL_2").click(function(){
			$("#Popup2").show();
		})
		$(".SpeciesLIst #DL_3").click(function(){
			$("#Popup3").show();
		})
		$(".SpeciesLIst #DL_4").click(function(){
			$("#Popup4").show();
		})
		$(".SpeciesLIst #DL_5").click(function(){
			$("#Popup5").show();
		})
})