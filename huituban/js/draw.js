class Draw{
    constructor(cobj,option){
        this.cobj=cobj;
        this.color=option.color;
        this.width=option.width;
        // this.height=option.height;
        this.style=option.style;
    }
    rect(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.rect(ox,oy,mx-ox,my-oy);
        this.cobj[this.style]();
    }
    line(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox,oy);
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    init(){
        this.cobj.strokeStyle=this.color;
        this.cobj.fillStyle=this.color;
        this.cobj.lineWidth=this.width;
    }
    arc(ox,oy,mx){
        this.init();
        this.cobj.beginPath();
        // if(mx>oy){
        //     this.cobj.moveTo(mx,oy);
        // }
        // else{
        //     this.cobj.moveTo(mx+2*(ox-mx),oy);
        // }
        this.cobj.arc(ox,oy,Math.abs(mx-ox),0,Math.PI*2);
        // this.cobj.stroke();
        this.cobj[this.style]();
    }
    circleout(ox,oy,mx,my){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
        this.cobj.arc((mx-ox)/2,(my-oy)/2,r,0,2*Math.PI);
        this.cobj[this.style]();
        this.cobj.restore();
    }
    circlein(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        //求半径  内切圆  1.鼠标移动的x距离大于y移动的距离  这是圆的半径是y的一半 y可能为负 去绝对值
        //                   2.鼠标移动的y距离大于x移动的距离  这是圆的半径是x的一半 x可能为负 去绝对值
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2;
        //半径可能为负  需要判断
        this.cobj.arc(ox+(mx>ox?r:-r),oy+(my>oy?r:-r),r,0,Math.PI*2);
        this.cobj[this.style]();
    }
    duo(ox,oy,mx,my,side) {
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);//旋转画布  使得多边形的上边是平的
        var angle=Math.PI/side;//旋转的角度
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        var x=r*Math.cos(angle);//根据半径 角度（三角形中）算出x.y  坐标
        var y=r*Math.sin(angle);
//        开始绘制
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);//起始点
//        下一个点 然后旋转画布 继续画线
        for(let i=0;i<side;i++){
            this.cobj.lineTo(x,-y);
            this.cobj.rotate(-angle*2);
        }
        this.cobj[this.style]();
        cobj.restore();
    }
    // duo(s,r)
    // }
     pen(ox,oy,mx,my){
         this.cobj.lineTo(mx,my);
         this.cobj.stroke();
     }
     eraser(ox,oy,mx,my){
         this.cobj.clearRect(mx,my,10,10);
     }

}