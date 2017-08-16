//共享事件函数
function addloadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload!='function'){
		window.onlanguagechange;
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//分离js与html
function prepareGallery(){
	if(! document.getElementById("imggallery")) return false;//判断是否支持这些方法
	if(! document.getElementsByTagName) return false;
	if(! document.getElementById) return false;
 	var gallary = document.getElementById("imggallery");
	var links = gallary.getElementsByTagName("a");
	for(i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this)?false:true;
		}
	}
}
//主函数 单击a标签显示元素
function showPic(pic){
	if(! document.getElementById("shoPic")) return false;//判断是否支持这些方法
	var getPic=pic.getAttribute("href");
	var shoPic=document.getElementById("shoPic");
//	if(shoPic.nodeName!="img") return false;//判断是否支持这些方法
	shoPic.setAttribute("src",getPic);
	var text=pic.getAttribute("title");
	var dicPic=document.getElementsByClassName("dicPic")[0];
	dicPic.firstChild.nodeValue=text;
	return true;
}
//现有元素后面插入新元素
function insertAfeter(newElement,targetElement){
	var parentElement = targetElement.parentNode;
	if(parentElement.lastChild==targetElement){
		parentElement.appendChild(newElement);
	}else{
		parentElement.insertBefore(newElement,targetElement.nextSibling);
	}
}
//创建placeholder和description的标签
function creatElement(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById("imggallery")) return false;
	var elementImg=document.createElement("img");
	var elementP=document.createElement("p");
	elementImg.setAttribute("id","shoPic");
	elementImg.setAttribute("src","");
	elementImg.setAttribute("alt","my image");
	elementP.setAttribute("class","dicPic");
	var txt = document.createTextNode("");
	elementP.appendChild(txt);
	var gallery = document.getElementById("imggallery");
	insertAfeter(elementImg,gallery);
	insertAfeter(elementP,elementImg);
	
}
addloadEvent(creatElement);
addloadEvent(prepareGallery);
