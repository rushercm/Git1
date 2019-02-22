js:0.1+0.2 ！== 0.3 精度问题

Number.EPSILON=(function(){     //解决兼容性问题
                return Number.EPSILON?Number.EPSILON:Math.pow(2,-52);
            })();


//上面是一个自调用函数，当JS文件刚加载到内存中，就会去判断并返回一个结果，相比if(!Number.EPSILON){
   //     Number.EPSILON=Math.pow(2,-52);
    //}这种代码更节约性能，也更美观。



function numbersequal(a,b){  
        return Math.abs(a-b)<Number.EPSILON;
    }


浏览器是如何工作的：https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/
