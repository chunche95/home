function getCookie(e){var n,t=document.cookie,o=t.indexOf(" "+e+"=");return-1==o&&(o=t.indexOf(e+"=")),t=-1==o?null:(o=t.indexOf("=",o)+1,-1==(n=t.indexOf(";",o))&&(n=t.length),unescape(t.substring(o,n)))}function setCookie(e,n,t){var o=new Date;o.setDate(o.getDate()+t);var i=escape(n)+(null==t?"":"; expires="+o.toUTCString());document.cookie=e+"="+i}function PonerCookie(){setCookie("tiendaaviso","1",365),document.getElementById("barraaceptacion").style.display="none"}"1"!=getCookie("tiendaaviso")&&(document.getElementById("barraaceptacion").style.display="block");