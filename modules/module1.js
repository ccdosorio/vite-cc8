const module = {
    name: "module 1"
}

window.addEventListener('mouseover', initLandbot, { once: true });
window.addEventListener('touchstart', initLandbot, { once: true });
var myLandbot;
export function initLandbot() {
    console.log('execute');
    if (!myLandbot) {
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
        s.addEventListener('load', function () {
            var myLandbot = new Landbot.Livechat({
                configUrl: 'https://storage.googleapis.com/landbot.site/v3/H-1286877-5NSS8NJMHL2HJUPC/index.json',
            });
        });
        s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }
}

export default module;