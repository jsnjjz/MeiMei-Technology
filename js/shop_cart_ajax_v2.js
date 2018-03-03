<!--

String.prototype.trim= function()  
{   
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}


function __getgood_to_shopcartss(id,uname)
  {
	var xmlhttp;
	try{
		xmlhttp=new XMLHttpRequest();
		}
	catch(e){
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4){
		if (xmlhttp.status==200){
			var data=xmlhttp.responseText;
			//完成所做的工作
                         if(data==0)
                         {
                           alert("请先登录!");
                           window.location.href="login.php";
                         }else
                         {
			 alert(data);
                         }
			 //window.location.reload();
			}
		else{
	
			 //失败所做的工作！
			 alert("操作失败");
			}
		}
	else{

		//正在发送所做的工作！
		}
	}
	xmlhttp.open("post", "get_good.php", true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xmlhttp.send("shop_id="+id+"&cuname="+uname+"&get_shopcart=get_ok");
  } 


  function __public_getgood_to_shopcart(id,uname,gname,vippice,lang,str)
  {
	var xmlhttp;
	try{
		xmlhttp=new XMLHttpRequest();
		}
	catch(e){
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4){
		if (xmlhttp.status==200){
			var data=xmlhttp.responseText;
			//完成所做的工作
                         if(data==0)
                         {
             if(str!=""){
                   alert(str);
              }else{
                                                  /*没有内容时，提示中文的请先登录*/
                   alert("请先登录!");
                                       }
                           window.location.href="login.php?lang="+lang;
                         }else
                         {
			 alert(data.trim());
                         }
			 //window.location.reload();
			}
		else{
	
			 //失败所做的工作！
			 alert("操作失败");
			}
		}
	else{

		//正在发送所做的工作！
		}
	}
	xmlhttp.open("post", "get_good.php?lang="+lang, true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xmlhttp.send("shop_id="+id+"&cuname="+uname+"&gname="+gname+"&vippice="+vippice+"&get_shopcart=get_ok");
  }
-->
