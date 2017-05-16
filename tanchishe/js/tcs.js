$(function(){
	const kuangzi=$('.kuangzi')[0];
	const zuigaofen=$('.zuigaofen span')[0];
	const defen=$('.defen span')[0];
	const pause=$('.pause')[0];
	const yibeisu=$('.yibeisu')[0];
	const yidianwu=$('.yidianwu')[0];
	const er=$('.er')[0];
	let tcs1=new tcs(kuangzi,zuigaofen,defen,pause,yibeisu,yidianwu,er);
})
class tcs{
	constructor(kuangzi,zuigaofen,defen,pause,yi,ydw,er){
		this.biaoge=kuangzi;
		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		this.shefx='right';
		this.flag=true;
		this.zuigaofen=zuigaofen;
		this.defen=defen;
		this.fenshu=0;
		this.pausea=pause;
		this.statu=true;
		this.yi=yi;
		this.ydw=ydw;
		this.er=er;
		this.play();
	}
	play(){
		this.creatgezi();
		this.creatshe();
		this.kzshe();
		this.creatfood();
		this.biansu1();
		this.biansu2();
		
		this.shemove();
		this.pause();
		// this.biansu1();
		// this.biansu2();
		if(Number(localStorage.zuigaofen)){
			this.zuigaofen.innerHTML=localStorage.zuigaofen;
			this.maxfen=localStorage.zuigaofen;
		}
		else{
			this.maxfen=0;
			this.zuigaofen.innerHTML=this.maxfen;
		}
	}
	changefenshu(){
		this.defen.innerHTML=this.fenshu;
		if(this.maxfen<this.fenshu){
            this.maxfen=this.fenshu;
		}
		
	}
	creatgezi(){
		for(let i=0;i<20;i++){
			for(let j=0;j<20;j++){
				let gezi=$('<div>');
				gezi.id=`${i}+${j}`;
				gezi.classList.add('gezi');
				this.biaoge.appendChild(gezi);
			}
		}
	}

	creatshe(){
		let that=this;
		for(let i=0;i<that.she.length;i++){
			that.getElement(that.she[i]).classList.add('she');
			if(i==that.she.length-1){
				that.getElement(that.she[i]).classList.add('shet');
			}
			if(i==that.she.length-2){
				that.getElement(that.she[i]).classList.remove('shet');
			}

		}
	}
	getElement(zuobiao){
        let id=zuobiao.x +'+'+ zuobiao.y;
        return document.getElementById(id);
	}
	shemove(){
		let that=this;
		
			clearInterval(that.t1);
			clearInterval(that.t2);
		    that.t=setInterval(function(){
			that.flag=false;
			let shetou;
			if(that.shefx=='right'){
              shetou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1};

			}
			if(that.shefx=='top'){
              shetou={x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y};
			}
			if(that.shefx=='left'){
              shetou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1};
			}
			if(that.shefx=='bottom'){
              shetou={x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y};
			}

			if(shetou.x>19||shetou.x<0||shetou.y>19||shetou.y<0){
		    	that.tzshijian();
		    	alert('                                          gameover');
		    	confirm('再来一局');
		    	return;
		    }
		    for(let i=0;i<that.she.length;i++){
		    	if(shetou.x==that.she[i].x&&shetou.y==that.she[i].y){
		    		alert('                                           gameover');
		    		confirm('再来一局');
		    		that.tzshijian();
		    		return;
		    	}
		    }
		    
		    
		    if(shetou.x==that.foods.x&&shetou.y==that.foods.y){
		    	that.getElement(that.foods).classList.remove('food');
		    	that.creatfood();
		    	that.fenshu++;
		    	that.changefenshu();
		    	if(that.foods.x&&that.foods.y==shetou.y){
		    		that.getElement(that.foods).classList.remove('food');
		    		that.creatfood();
		    	}
		    }
		    else{
		    	let shewei=that.she.shift(that.she[0]);
		        that.removeshe(shewei);
		    }
            that.she.push(shetou);
		    that.creatshe();
		    that.flag=true;
		    },300);
	}
	biansu2(){
		let that=this;
		
			clearInterval(that.t);
			clearInterval(that.t1);
			that.t2=setInterval(function(){
			that.flag=false;
			let shetou;
			if(that.shefx=='right'){
              shetou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1};
			}
			if(that.shefx=='top'){
              shetou={x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y};
			}
			if(that.shefx=='left'){
              shetou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1};
			}
			if(that.shefx=='bottom'){
              shetou={x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y};
			}

			if(shetou.x>19||shetou.x<0||shetou.y>19||shetou.y<0){
		    	that.tzshijian();
		    	alert('                                          gameover');
		    	return;
		    }
		    for(let i=0;i<that.she.length;i++){
		    	if(shetou.x==that.she[i].x&&shetou.y==that.she[i].y){
		    		alert('                                           gameover');
		    		that.tzshijian();
		    		return;
		    	}
		    }
		    
		    
		    if(shetou.x==that.foods.x&&shetou.y==that.foods.y){
		    	that.getElement(that.foods).classList.remove('food');
		    	that.creatfood();
		    	that.fenshu++;
		    	that.changefenshu();
		    	if(that.foods.x&&that.foods.y==shetou.y){
		    		that.getElement(that.foods).classList.remove('food');
		    		that.creatfood();
		    	}
		    }
		    else{
		    	let shewei=that.she.shift(that.she[0]);
		        that.removeshe(shewei);
		    }
            that.she.push(shetou);
		    that.creatshe();
		    that.flag=true;
		},150);
	}
	biansu1(){
		let that=this;
		
		    clearInterval(that.t);
		    clearInterval(that.t2);
			that.t1=setInterval(function(){
			that.flag=false;
			let shetou;
			if(that.shefx=='right'){
              shetou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1};
			}
			if(that.shefx=='top'){
              shetou={x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y};
			}
			if(that.shefx=='left'){
              shetou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1};
			}
			if(that.shefx=='bottom'){
              shetou={x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y};
			}

			if(shetou.x>19||shetou.x<0||shetou.y>19||shetou.y<0){
		    	that.tzshijian();
		    	that.biaoge.classList.add('heipin');
		    	return;
		    }
		    for(let i=0;i<that.she.length;i++){
		    	if(shetou.x==that.she[i].x&&shetou.y==that.she[i].y){
		    		alert('                                           gameover');
		    		that.tzshijian();
		    		return;
		    	}
		    }
		    
		    
		    if(shetou.x==that.foods.x&&shetou.y==that.foods.y){
		    	that.getElement(that.foods).classList.remove('food');
		    	that.creatfood();
		    	that.fenshu++;
		    	that.changefenshu();
		    	if(that.foods.x&&that.foods.y==shetou.y){
		    		that.getElement(that.foods).classList.remove('food');
		    		that.creatfood();
		    	}
		    }
		    else{
		    	let shewei=that.she.shift(that.she[0]);
		        that.removeshe(shewei);
		    }
            that.she.push(shetou);
		    that.creatshe();
		    that.flag=true;
		},200);
	}
	removeshe(shewei){
		let that=this;
		that.getElement(shewei).classList.remove('she');
	}
	kzshe(){
		let that=this;
		window.onkeydown=function(e){
			if(that.flag){
			if(e.keyCode==97||e.keyCode==65){
                if(that.shefx!='right')                
				that.shefx='left';
			    // that.she[that.she.length-1].style.transform='rotate(90deg)';
			}
			if(e.keyCode==119||e.keyCode==87){
                if(that.shefx!='bottom')
				that.shefx='top';
			}
			if(e.keyCode==100||e.keyCode==68){
                if(that.shefx!='left')
				that.shefx='right';
			}
			if(e.keyCode==115||e.keyCode==83){
                if(that.shefx!='top')
				that.shefx='bottom';
			}
			if(e.keyCode==49){
				that.shemove();
			}
			if(e.keyCode==50){
				that.biansu1();
			}
			if(e.keyCode==51){
				that.biansu2();
			}
			if(e.keyCode==32){
				that.pause();
			}
		}	
        }
        that.pausea.onclick=function(){
		    that.pause();
	    }
		
	}
	creatfood(){
		let that=this;
		that.foods={};
		that.foods.x=Math.floor(Math.random()*20);
		that.foods.y=Math.floor(Math.random()*20);
		that.getElement(that.foods).classList.add('food');
	}
	tzshijian(){
		localStorage.zuigaofen=this.maxfen;
		clearInterval(this.t);
	}
	pause(){
		let that=this;
			if(that.statu){
				that.statu=false;
				clearInterval(that.t);
				clearInterval(that.t1);
				clearInterval(that.t2);
				// 
			}
			else{
				that.statu=true;
				that.shemove();
				// that.biaoge.classList.remove('heipin');
			}
	}
	

}