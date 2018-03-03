function coinfo_Login (){

	this.sServerURL ="http://member.shilian.net/PassPort/login.aspx";
	//this.sServerURL = "http://192.168.0.229/IH.REPROT.WEB/server/jcoinfo.aspx";
	//Mozilla & MSIE7
	if (window.XMLHttpRequest)
		this.oXMLHttp = new XMLHttpRequest();
	else
	//MSIE 6
	if(!navigator.__ice_version && window.ActiveXObject)
		this.oXMLHttp = new ActiveXObject('Microsoft.XMLHTTP');
};

coinfo_Login.prototype.response = function(sInput){

	var xOutput = null;
	try {
		xOutput = new ActiveXObject('Microsoft.XMLDOM');
		xOutput.async = false;
		xOutput.resolveExternals = false;
    	xOutput.validateOnParse = false;
		xOutput.loadXML(sInput);

		if (xOutput.parseError.errorCode)
			alert(	"Error code: "+ xOutput.parseError.errorCode +
                    "\nLine: " + xOutput.parseError.line + ':'+ xOutput.parseError.linePos +
					"\nReason: "+ xOutput.parseError.reason +
					"\n" + xOutput.parseError.srcText);
	}
	catch (e) {
		var xParser = new DOMParser();
		xOutput = xParser.parseFromString(sInput, 'text/xml');
	}
	
	this.oXMLHttp.open('POST', this.sServerURL, false);
	this.oXMLHttp.send(xOutput);

	return this.oXMLHttp.responseText;
};

coinfo_Login.prototype.login = function(user,pass,card){
    if (!this.oXMLHttp || !user || !pass||!card) return;
	var tmp;
	try{
	
		//SET LOGIN info
		var postddd = {user:user,pwd:pass,card:card};
		$.ajax({
		   //type:'GET',
        dataType: 'jsonp', 
        data:postddd,
        url:this.sServerURL,
        async:false,
        cache:false,
        complete:function(){},
        error:function(){alert('error');},
        success: function (responseObj) {
        if(responseObj.isSucess==0)
        {
          //this.redirect(responseObj.Redirect);
          var logContainer=document.getElementById("LoginContainer");
          if(logContainer!=null)
          {
            var strloginHtml="<a href='"+responseObj.Redirect+"' target='_self'>使用企业信息港系统</a>";
            logContainer.innerHTML=strloginHtml;
            //this.setCookie("coinfologin",strloginHtml);
             //setCookie("coinfologin",strloginHtml);
             c_Login.setCookie("coinfologin",strloginHtml);
          }else
          {
            alert('Error - 登录区代码不正确!');
          }
        }else
        {
        alert('Error - 用户名或密码无效');
        }
        }
        });

	}
	catch(e){
		alert('Error - 用户名或密码无效'+e);
	}
};

coinfo_Login.prototype.redirect = function(sUrl){
	document.location.href = sUrl;
};
coinfo_Login.prototype.load=function()
{
         var logContainer=document.getElementById("LoginContainer");
          if(logContainer!=null)
          {
            var strloginHtml=this.getCookie("coinfologin");
            //if(strloginHtml!=null)
            //logContainer.innerHTML=strloginHtml;
          }else
          {
            alert('Error - 登录区代码不正确!');
          }
}

coinfo_Login.prototype.setCookie=function(strKey,strValue)
{
    var Days = 30; 
    var exp  = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = strKey + "="+ escape (strValue) + ";expires=" + exp.toGMTString();
}

coinfo_Login.prototype.getCookie=function(strKey)
{
   var arr = document.cookie.match(new RegExp("(^| )"+strKey+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;
}
c_Login = new coinfo_Login();
//document.onLoad=c_Login.load();


