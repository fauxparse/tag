!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e,t){if(c(t))e.appendChild(t);else{var n=document.createElement("div");for(n.innerHTML=t||"";n.firstChild;)e.appendChild(n.firstChild)}}function r(e){return function(){var t=document.createElement(e),r=a(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:{},o=2===arguments.length?arguments.length<=1?void 0:arguments[1]:arguments.length<=0?void 0:arguments[0];return Object.keys(r).forEach(function(e){return t.setAttribute(e,r[e])}),f(o)&&o.forEach(function(e){return n(t,e)}),l(o)&&!d(e.toLowerCase())&&n(t,o),t}}function o(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];var o=t[0],i=t.slice(1);if(!l(o))throw new Error("first argument must be String and can not be empty");return r(o).apply(null,i)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.tag=o;var u=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],f=function(e){return"[object Array]"==={}.toString.call(e)},c=function(e){return!(!e||!e.nodeType)},a=function(e){return null!==e&&"object"===("undefined"==typeof e?"undefined":i(e))&&!f(e)},l=function(e){return"string"==typeof e},d=function(e){return u.indexOf(e)>=0}}])});