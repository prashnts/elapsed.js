/* Elapsed.JS v1.0 | (c) 2014 Prashant Sinha <firstname,lastname>@outlook.com, <firstname>@ducic.ac.in | MIT license */
var Elapsed={ClassHook:"elapsedJS",DataHook:"data-elapseJS",ActionToggle:false,RoutineInterval:1e3,ElapsedDEBUG:false,action:function(){if(Elapsed.ActionToggle){Elapsed.debugMsg("ElapsedJS action is Locked.");return}Elapsed.ActionToggle=true;Elapsed.debugMsg("Locked ElapsedJS action.");Elapses=document.getElementsByClassName(Elapsed.ClassHook);for(var e=0;e<Elapses.length;e++){var t=Elapses[e];try{var n=parseInt(t.getAttribute(Elapsed.DataHook));var r=new Date(n*1e3);var i=new Date;var s=parseInt(i.getTime()/1e3);var o=s-n;putTime=function(e){t.innerHTML=e};if(o<60)putTime("just now");else if(o<120)putTime("a few minutes ago");else if(o<3570)putTime(parseInt(o/60)+" minutes ago");else if(o<86400)putTime("today, at "+Elapsed.formatDate(r,"h:mmTT"));else if(o<172800)putTime("yesterday, at "+Elapsed.formatDate(r,"h:mmTT"));else putTime(Elapsed.formatDate(r,"h:mmTT, d MMMM yyyy"))}catch(u){Elapsed.debugMsg(u.message)}}Elapsed.ActionToggle=false;Elapsed.debugMsg("Unlocked ElapsedJS action.")},formatDate:function(e,t,n){function u(e,t){var n=e+"";t=t||2;while(n.length<t)n="0"+n;return n}var r=["\0","January","February","March","April","May","June","July","August","September","October","November","December"];var i=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var s=["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var o=["","Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var a=n?e.getUTCFullYear():e.getFullYear();t=t.replace(/(^|[^\\])yyyy+/g,"$1"+a);t=t.replace(/(^|[^\\])yy/g,"$1"+a.toString().substr(2,2));t=t.replace(/(^|[^\\])y/g,"$1"+a);var f=(n?e.getUTCMonth():e.getMonth())+1;t=t.replace(/(^|[^\\])MMMM+/g,"$1"+r[0]);t=t.replace(/(^|[^\\])MMM/g,"$1"+i[0]);t=t.replace(/(^|[^\\])MM/g,"$1"+u(f));t=t.replace(/(^|[^\\])M/g,"$1"+f);var l=n?e.getUTCDate():e.getDate();t=t.replace(/(^|[^\\])dddd+/g,"$1"+s[0]);t=t.replace(/(^|[^\\])ddd/g,"$1"+o[0]);t=t.replace(/(^|[^\\])dd/g,"$1"+u(l));t=t.replace(/(^|[^\\])d/g,"$1"+l);var c=n?e.getUTCHours():e.getHours();t=t.replace(/(^|[^\\])HH+/g,"$1"+u(c));t=t.replace(/(^|[^\\])H/g,"$1"+c);var h=c>12?c-12:c==0?12:c;t=t.replace(/(^|[^\\])hh+/g,"$1"+u(h));t=t.replace(/(^|[^\\])h/g,"$1"+h);var p=n?e.getUTCMinutes():e.getMinutes();t=t.replace(/(^|[^\\])mm+/g,"$1"+u(p));t=t.replace(/(^|[^\\])m/g,"$1"+p);var d=n?e.getUTCSeconds():e.getSeconds();t=t.replace(/(^|[^\\])ss+/g,"$1"+u(d));t=t.replace(/(^|[^\\])s/g,"$1"+d);var v=n?e.getUTCMilliseconds():e.getMilliseconds();t=t.replace(/(^|[^\\])fff+/g,"$1"+u(v,3));v=Math.round(v/10);t=t.replace(/(^|[^\\])ff/g,"$1"+u(v));v=Math.round(v/10);t=t.replace(/(^|[^\\])f/g,"$1"+v);var m=c<12?"AM":"PM";t=t.replace(/(^|[^\\])TT+/g,"$1"+m);t=t.replace(/(^|[^\\])T/g,"$1"+m.charAt(0));var g=m.toLowerCase();t=t.replace(/(^|[^\\])tt+/g,"$1"+g);t=t.replace(/(^|[^\\])t/g,"$1"+g.charAt(0));var y=-e.getTimezoneOffset();var b=n||!y?"Z":y>0?"+":"-";if(!n){y=Math.abs(y);var w=Math.floor(y/60);var E=y%60;b+=u(w)+":"+u(E)}t=t.replace(/(^|[^\\])K/g,"$1"+b);var S=(n?e.getUTCDay():e.getDay())+1;t=t.replace(new RegExp(s[0],"g"),s[S]);t=t.replace(new RegExp(o[0],"g"),o[S]);t=t.replace(new RegExp(r[0],"g"),r[f]);t=t.replace(new RegExp(i[0],"g"),i[f]);t=t.replace(/\\(.)/g,"$1");return t},debugMsg:function(e){if(Elapsed.ElapsedDEBUG){console.log("ElapsedJS DEBUG: "+e)}},init:function(){Elapsed.action();Elapsed.routine();Elapsed.debugMsg("Initialized ElapsedJS.")},routine:function(){window.setInterval(function(){Elapsed.debugMsg("Routine Called.");Elapsed.action()},Elapsed.RoutineInterval)}}