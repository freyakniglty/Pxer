/**
 * Automatic generated by "user.build.js"
 * */
// ==UserScript==
// @name          Pxer
// @version       7
// @namespace     https://github.com/pea3nut/Pxer
// @author        花生PeA
// @description   可能是目前最好用的P站收图工具
// @grant         none
// @noframes
// @include       https://www.pixiv.net*
// @include       http://www.pixiv.net*
// ==/UserScript==
javascript:void((function() {
    // 环境变量
    window['PXER_URL'] =/**/"https://pxer-app.pea3nut.org/";//*/'';
    window['PXER_MODE'] ='master';

    // 引入入口文件
    document.documentElement.appendChild(
        document.createElement('script')
    ).src=window['PXER_URL']+'jsonp.js?'+(+new Date);

})());