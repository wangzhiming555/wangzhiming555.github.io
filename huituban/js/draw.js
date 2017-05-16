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
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.beginPath();
        var r=(mx-ox)/2>(my-oy)/2?(my-oy)/2:(mx-ox)/2;
        this.cobj.arc(mx>ox?r:-r,my>oy?r:-r,r,0,2*Math.PI);
        this.cobj[this.style]();
        this.cobj.restore;
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