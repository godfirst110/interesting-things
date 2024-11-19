var tu = document.getElementsByClassName("p"); //获取所有图片元素
var an = document.getElementsByClassName("dot"); //获取所有按钮元素
var bl = document.querySelector(".bl"); //获取单个left元素
var br = document.querySelector(".br"); //获取right按钮元素
var index = 0; //图片索引
var tim=null; //定时器
function background(){ 
    if(index<=4){
     document.body.style.backgroundImage = `url(pictures/${index+2}.gif)`; //设置背景图片
}
else{
    document.body.style.backgroundImage = `url(pictures/6.gif)`; //设置背景图片
}
}
// 遍历初始化，都设置为p类
function chushihua() {
    for (var i = 0; i < tu.length; i++) {
        tu[i].className = "p"; 
    }
    for (var i = 0; i < an.length; i++) {
        an[i].className = "dot";
    }
    tu[index].className = "p pp1";
    an[index].className = "dot dd";
}
// 设置pp1、pp2、pp3类
function xuanzhong(){
    chushihua()
    background()
    tu[index].className = "p pp1";
    tu[index+1].className = "p pp2";
    tu[index+2].className = "p pp3";
    an[index].className = "dot dd";
    
}
// 右箭头点击事件，结束定时器，重新开始计时，index+1，执行xuanzhong()函数
bl.onclick = function(){
    clearInterval(tim)
    //clearInterval(timerId);timerId：由 setInterval() 方法返回的定时器标识符。
    tb()
    if(index==0){
        index=tu.length-1;
    }else{
        index--;
    }
    xuanzhong()
}
br.onclick = function(){
    clearInterval(tim)
    tb()
    if(index<tu.length-1){
        index++;
    }else{
        index=0;
    }
    xuanzhong();
   
}
// 自动轮播，注意开头结尾的判断
function tb(){
    tim=setInterval(function(){
        //id在前面写着
        if(index<tu.length-1){
            index++;
        }else{
            index=0;
        }
        xuanzhong()
    },4000);
    }
    // 按钮点击事件
    for(var i=0;i<an.length;i++){
        an[i].onclick=function(){
            clearInterval(tim)
            tb()
            var y=this.getAttribute("id");
            index=y-1;
            //字符串减数字，字符串自动转数字
           // index=parseInt(y)-1;
           //this傻傻分不清
            xuanzhong()
        }
    }
    // 页面加载完成后执行
    window.onload = function(){
        chushihua()
        tb()
        xuanzhong()
       background()
    }
    

