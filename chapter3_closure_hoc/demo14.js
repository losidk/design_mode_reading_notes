/*
* 3.2.3 高阶函数实现AOP
AOP（面向切面编程）的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些
跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后，
再通过“动态织入”的方式掺入业务逻辑模块中。这样做的好处首先是可以保持业务逻辑模块的
纯净和高内聚性，其次是可以很方便地复用日志统计等功能模块。
在 Java 语言中，可以通过反射和动态代理机制来实现 AOP 技术。而在 JavaScript 这种动态
语言中，AOP 的实现更加简单，这是 JavaScript 与生俱来的能力。
通常，在 JavaScript 中实现 AOP，都是指把一个函数“动态织入”到另外一个函数之中，具
体的实现技术有很多，本节我们通过扩展 Function.prototype 来做到这一点。代码如下
* */

/*
* Function.prototype.before = function( beforefn ){
 var __self = this; // 保存原函数的引用
 return function(){ // 返回包含了原函数和新函数的"代理"函数
 beforefn.apply( this, arguments ); // 执行新函数，修正 this
 return __self.apply( this, arguments ); // 执行原函数
 }
};
Function.prototype.after = function( afterfn ){
 var __self = this;
 return function(){
 var ret = __self.apply( this, arguments );
 afterfn.apply( this, arguments );
 return ret;
 }
};
var func = function(){
 console.log( 2 );
};
func = func.before(function(){
 console.log( 1 );
}).after(function(){
 console.log( 3 );
});
func();*/


/*
* Function.prototype.before = function (beforeFn) {
  var __self = this
  return function () {
    beforeFn.apply(this, arguments);
    return __self.apply(this, arguments)
  }
}


Function.prototype.after = function (afterFn) {
  var __self = this;
  var res
  return function () {
    res = __self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return res
  }
}


var func = function () {
  console.log(2);
}
func = func.before(function () {
  console.log(1);
}).after(function () {
  console.log(3);
})

func()*/


/*
*
* 我们把负责打印数字 1 和打印数字 3 的两个函数通过 AOP 的方式动态植入 func 函数。通过
执行上面的代码，我们看到控制台顺利地返回了执行结果 1、2、3
* */

/*
*
* 这种使用 AOP 的方式来给函数添加职责，也是 JavaScript 语言中一种非常特别和巧妙的装饰
者模式实现。这种装饰者模式在实际开发中非常有用，我们将在第 15 章进行详细的讲解。有兴
趣的读者可以提前翻阅第 15 章进行了解。
* */















