$(function () {
    siderIMchatWidgetsetGoTop();
    $(window).scroll(function () { siderIMchatWidgetsetGoTop(); });
    function siderIMchatWidgetsetGoTop() {
        $('#serviceOnlineDiv').animate({ top: $(document).scrollTop() + 100 }, 10);
    }
    



});

function openOnlineCustomWin() {
    $("#serviceOnlineDiv .max").show()
    $("#serviceOnlineDiv").css("width", "117px");
    $("#serviceOnlineDiv .min").hide()
}
function hideOnlineCustomWin() {
    $("#serviceOnlineDiv .max").hide()
    $("#serviceOnlineDiv").css("width","28px");
    $("#serviceOnlineDiv .min").show()
 }
$(function() {
	$("#calleeAddress").bind('focus', function(){
			$("div.tip-box").html('<div class="content">固话输入格式如：0571-2755258<br/>手机号码是11位数</div>');
			$("div.tip-box").show();
		});
		$("#calleeAddress").bind('blur', function(){
		$('div.tip-box').hide();
		});
});
function validateNumber(data){
		var num = data;
			if(!num || !/^[0-9,-]{11,}$/.test(num)){
				$("div.tip-box").html('<h4>号码格式有误，请重新输入！</h4><div class="content">固话请加区号，手机号码是11位数</div>');
				$("div.tip-box").show();
				return false;
			}else{
				$('div.tip-box').hide();
			}
		return true;
	}
	function call_smart(){
	var _client_tel = $("#calleeAddress").val();
		if(!validateNumber(_client_tel))
		{
			return;
		}
		$.ajax({
		  url: "http://222.73.11.169/smart400.php",
		  data: {num400: ""+_smart_num+"",tel:""+_client_tel.replace('-','')+""},
		  dataType: "html",
		  type:"POST",
		  error: function(data){ 
			$("div.tip-box").html('<h4>'+data+'<h4>');
			$("div.tip-box").show();
			}, 
		  success: function(data){
		  
			$("div.tip-box").html('<h4>'+data+'<h4>');
			$("div.tip-box").show();
			}
		});
	}