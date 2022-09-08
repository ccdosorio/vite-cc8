//Definicion variables
var facebook_id =  php_vars.facebook_id;
var google_id =  php_vars.google_id;

/*
* Codigo para tracking facebook
*/

  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

if(facebook_id === undefined || facebook_id === "") {

} else {
  fbq('init', facebook_id);
  fbq('track', 'PageView');
}


/*
 * Codigo para tracking analytics
*/

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', google_id);
