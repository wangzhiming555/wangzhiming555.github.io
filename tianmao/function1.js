
	// 选项卡   btn选项卡按钮  con选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	// 遮罩  btn是底下的块，con是遮罩的块
	function zhezhao(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
				// animate(con[i],{display:'block'},500);
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			     // animate(con[i],{display:'none'},500);
			}
		}
	}
	//函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			// window.onload=function(){
			// 	select();
			// }
			window.addEventListener('load',select,false);
		}else if(typeof select=="string"){
			// alert(/^<\w+>$/.test(select));
			if(/^<\w+>$/.test(select)){
              return  document.createElement(select.slice(1,-1))
			}else{
				return obj.querySelectorAll(select);
			}
		}
	}
	//层级轮波
	//pic轮波图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮波点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮波点普通颜色；
	// bannertushuliang,banner图的数量-1；
	// type不传值时默认层级轮波，type==1时透明轮波
	function Zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang,type=0){
	   if(type==0){	
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lis);
		const color=colorArr;
		tupian[0].style.zIndex=tuactiveZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					li[i].style.background=lisColor;
				}
			tupian[j].style.zIndex=tuactiveZ;
			li[j].style.background=liactivebgColor;
			banner.style.background=color[j];
			num=j;
			}
			}
    
			function move(){
			num++;
			if(num>bannertushuliang){
				num=0;
			}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuactiveZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
	}
		else if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			tupian[0].style.opacity=tuactiveZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					clearInterval(t);
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.opacity=tuZ;
						li[i].style.background=lisColor;
					}
				tupian[j].style.opacity=tuactiveZ;
				animate(tupian[j],{opacity:1},500);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
				}
				function move(){

				num++;
				if(num>bannertushuliang){
					num=0;
				}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[num].style.opacity=tuactiveZ;
				animate(tupian[num],{opacity:1},500);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
			}
	}
}
    function sobj(){
    	var scrollobj=document.body?document.body:document.documentElement;
    	let body=document.body;
        let html=document.documentElement;
        body.scrollTop=1;
        html.scrollTop=1;
        let obj;
        if(body.scrollTop==1){
            obj=body;
        }
        else{
            obj=html;
        }
       return obj;
    }
    //点击事件触发一次
    //obj 事件源
    //type 事件
    //fn 事件处理程序
    function one(obj,type,fn){
   	   	  	//第一次执行事件
   	   	  	obj.addEventListener('type',fn,false);
   	   	  	//第二次执行事件,调用函数clear清除第一次点击事件和第二次(本次)事件
   	   	  	obj.addEventListener('type',clear,false);
   	   	  	function clear(){
   	   	  	    //清除第一次事件
   	   	  		obj.removeEventListener('type',fn,false);
   	   	  		//清除第二次事件
   	   	  		obj.removeEventListener('type',clear,false);
   	   	  	}
   	   	  }
function louceng(left1,left,section,xy,colorArr){
	const btn=$(left1);
    const bt=$(left)[0];
	const sec=$(section);
	const sob=sobj();//获取当前页
    const nav=$(xy)[0];
    const color=$(colorArr);
    const CH=document.documentElement.clientHeight;
    var flagx=true;
    var flagy=false;
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(sob,{scrollTop:sec[i].offsetTop},500);
		}
	}
    window.onscroll=function(){

        if(sob.scrollTop>=800){
            if(flagx){
                flagx=false;
                flagy=true;
                animate(nav,{top:0},500,function(){
                    flagx=true;
                });
            }
            bt.style.display='block';
            }
        else{
            if(flagy){
                flagy=false;
                flagx=true;
                animate(nav,{top:-50},500,function(){
                    flagy=true;
                });
            }
            bt.style.display='none';
        }
        for(let i=0;i<sec.length;i++){
            if(sob.scrollTop+0.5*CH>=sec[i].offsetTop){
                for(let j=0;j<btn.length;j++){
                    btn[j].style.background='#ccc';
                }
                btn[i].style.background=color;
            }
            if(sob.scrollTop+CH>=sec[i].offsetTop){
                let img=$('img',sec[i]);
                for(let j=0;j<img.length;j++){
                    img[j].src=img[j].getAttribute('imgURL');
                }
            }
        }
    }
    setTimeout(function(){
        animate(nav,{top:-50},500,function(){
            flagy=true;
        });
    },1000);
    }
    //拖拽
    //drag(拖拽对象，可以是多个)
    function drag(box1){
    const box=$(box1);
    for(let i=0;i<box.length;i++){
   	  const Wid=document.documentElement.clientWidth;
   	  const Hei=document.documentElement.clientHeight;
   	  let boxX;
   	  let boxY;
   	  let X;
   	  let Y;
   	  box[i].addEventListener('mousedown',down,false);
   	  function down(e){
   		X=e.clientX;
   		Y=e.clientY;
   		boxX=box[i].offsetLeft;
   		boxY=box[i].offsetTop;
   		window.addEventListener('mousemove',move,false);
   		window.addEventListener('mouseup',up,false);
   	  }
   	  function move(e){
        let XX=e.clientX;
        let YY=e.clientY;
        let chax=XX-X;
        let chay=YY-Y;
        let lefts=boxX+chax;
        let tops=boxY+chay;
        let boxw=box[i].offsetWidth;
        let boxh=box[i].offsetHeight;
        if(tops>Hei-boxh){
        	tops=Hei-boxh;
        }
        if(lefts>Wid-boxw){
            lefts=Wid-boxw;
        }
        if(lefts<0){
        	lefts=0;
        }
        if(tops<0){
        	tops=0;
        }
        box[i].style.left=lefts+'px';
        box[i].style.top=tops+'px';
   	  }
   	  function  up(){
   	  	window.removeEventListener('mousemove',move,false);
   	  }
      }
    }