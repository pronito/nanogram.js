/**
*
* nanogram.js
*
* @version 1.0.0
* @author webistomin
* @email: webistomin@gmail.com
* @license: MIT
*
**/

"use strict";function t(t,r,e,n){return new(e||(e=Promise))((function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){var r;t.done?o(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(a,u)}s((n=n.apply(t,r||[])).next())}))}function r(t,r){var e,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(t,a)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(){this.INSTAGRAM_HOSTNAME="https://www.instagram.com/",this.SHARED_DATA_TEG_EXP=/^[\w\W]*<script type="text\/javascript">window._sharedData = ({[\w\W]*});<\/script>[\w\W]*$/g}return e.prototype.buildUrl=function(t){return""+this.INSTAGRAM_HOSTNAME+t},e.prototype.parseJSON=function(t){try{var r=t.replace(this.SHARED_DATA_TEG_EXP,"$1");return JSON.parse(r)}catch(t){console.error("Nanogram: failure during parsing JSON.\nError message: "+t.message)}},e.prototype.HTTP=function(e){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:return[4,fetch(e,{method:"GET",redirect:"follow"}).then((function(t){if(t.ok)return t.text();console.error("Nanogram: error during request.\nProbably making too many requests to the Instagram application.\nAlso check method parameters.")}))];case 1:return(t=r.sent())?[2,this.parseJSON(t)]:[2]}}))}))},e.prototype.getMediaByUsername=function(e){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){return e?(t=this.buildUrl(e),[2,this.HTTP(t)]):(console.error("Nanogram: please provide a valid username"),[2])}))}))},e.prototype.getMediaByTag=function(e){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){return e?(t=this.buildUrl("explore/tags/"+e),[2,this.HTTP(t)]):(console.error("Nanogram: please provide a valid tag"),[2])}))}))},e.prototype.getMediaByLocation=function(e,n){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){return e&&n?(t=this.buildUrl("explore/locations/"+e+"/"+n),[2,this.HTTP(t)]):(console.error("Nanogram: please provide a valid location id and place name"),[2])}))}))},e.prototype.getAllLocations=function(){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){return t=this.buildUrl("explore/locations/"),[2,this.HTTP(t)]}))}))},e.prototype.getCitiesByCountryId=function(e){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){return e?(t=this.buildUrl("explore/locations/"+e),[2,this.HTTP(t)]):(console.error("Nanogram: please provide a valid country id"),[2])}))}))},e.prototype.getPlacesByCityId=function(e){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){return e?(t=this.buildUrl("explore/locations/"+e),[2,this.HTTP(t)]):(console.error("Nanogram: please provide a valid city id"),[2])}))}))},e.prototype.getMediaByPlaceId=function(e){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){return e?(t=this.buildUrl("explore/locations/"+e),[2,this.HTTP(t)]):(console.error("Nanogram: please provide a valid place id"),[2])}))}))},e.prototype.getMediaBySearchQuery=function(e){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){return e?(t=this.buildUrl("web/search/topsearch/?context=blended&query="+e+"&include_reel=true"),[2,this.HTTP(t)]):(console.error("Nanogram: please provide a search query"),[2])}))}))},e}();exports.default=e;