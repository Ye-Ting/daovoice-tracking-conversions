!function(a){var c,d,b=!1;"function"==typeof define&&define.amd&&(define(a),b=!0),"object"==typeof exports&&(module.exports=a(),b=!0),b||(c=window.Cookies,d=window.Cookies=a(),d.noConflict=function(){return window.Cookies=c,d})}(function(){function a(){for(var c,d,a=0,b={};a<arguments.length;a++){c=arguments[a];for(d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g,h,j,k,l,m,n,o,p,q;if("undefined"!=typeof document){if(arguments.length>1){f=a({path:"/"},d.defaults,f),"number"==typeof f.expires&&(h=new Date,h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h),f.expires=f.expires?f.expires.toUTCString():"";try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(i){}e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\(\)]/g,escape),j="";for(k in f)f[k]&&(j+="; "+k,f[k]!==!0&&(j+="="+f[k]));return document.cookie=b+"="+e+j}for(b||(g={}),l=document.cookie?document.cookie.split("; "):[],m=/(%[0-9A-Z]{2})+/g,n=0;n<l.length;n++){o=l[n].split("="),p=o.slice(1).join("="),'"'===p.charAt(0)&&(p=p.slice(1,-1));try{if(q=o[0].replace(m,decodeURIComponent),p=c.read?c.read(p,q):c(p,q)||p.replace(m,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(i){}if(b===q){g=p;break}b||(g[q]=p)}catch(i){}}return g}}return d.set=d,d.get=function(a){return d.call(d,a)},d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b(function(){})});

function getRootDomain(url) {
  if(!url) {
    return null;
  }
  
  var arrs = url.split('.');
  var DArray;
  var rootDomain;

  // 判断 Url 为 localhost 的情况
  if(arrs.length < 2) {
    return null;
  } else {
    var index = 1;

    while(index++) {
      DArray = arrs.slice(-index) 
      rootDomain = DArray.join('.');
      Cookies.set('$checkRootDomain','check',{ domain:rootDomain })
      if('check' === Cookies.get('$checkRootDomain')) {
        Cookies.remove('$checkRootDomain',{ domain:rootDomain })
        break; 
      }
    }
  
    return rootDomain;   
  }
}

Cookies.defaults.expires = 180;
if(getRootDomain(document.domain)) {
 Cookies.defaults.domain = getRootDomain(document.domain);
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var referrer = document.referrer == "" ? "Direct" : document.referrer;
if (Cookies.get('marketing_referrer') == null || Cookies.get('marketing_referrer') == "" || Cookies.get('marketing_referrer') == "Direct") { Cookies.get('marketing_referrer', referrer, { expires: 180 }); }
if (getParameterByName('utm_source') !== "") { Cookies.set('utm_source', getParameterByName('utm_source'), { expires: 180, }); }
if (getParameterByName('utm_medium') !== "") { Cookies.set('utm_medium', getParameterByName('utm_medium'), { expires: 180, }); }
if (getParameterByName('utm_term') !== "") { Cookies.set('utm_term', getParameterByName('utm_term'), { expires: 180, }); }
if (getParameterByName('utm_content') !== "") { Cookies.set('utm_content', getParameterByName('utm_content'), { expires: 180, }); }
if (getParameterByName('utm_campaign') !== "") { Cookies.set('utm_campaign', getParameterByName('utm_campaign'), { expires: 180, }); }

