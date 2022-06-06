(()=>{"use strict";const e=document.querySelector("#results-container"),t=document.querySelector("#favorites-container"),a=(e,t)=>{e.classList.remove("hide"),t.classList.add("hide")},s=(s,r)=>{var n;"results"===s&&(a(e,t),r.forEach((t=>{const a=`\n      <div class="image-container">\n        <img src="${t.url}" alt="Cat Image" class="image">\n        <a class="like-btn"></a>\n      </div>\n    `;e.insertAdjacentHTML("beforeend",a)}))),"favorites"===s&&(a(t,e),n=r,t.textContent="",Object.values(n).forEach((e=>{const a=`\n      <div class="image-container">\n        <img src="${e}" alt="Cat Image" class="image">\n        <a class="like-btn liked"></a>\n      </div>\n    `;t.insertAdjacentHTML("beforeend",a)})))},r=document.querySelector(".nav-container"),n=e=>{const t=t=>t===e?"is-active":"";r.innerHTML=`\n    <ul class="nav-items">\n      <li class="nav-link ${t("results")}" id="results">All cats</li>\n      <li class="nav-link ${t("favorites")}" id="favorites">Favorite cats</li>\n    </ul>\n  `},i={headers:{"x-api-key":"041355a5-6f53-45d5-b984-900a93bf2514"}},o=document.getElementById("img-loader");function c(){o.classList.add("hide")}o.insertAdjacentHTML("beforeend",'\n  <img src="img/loader/cat.gif" alt="Loading">\n  <p>... loading more cats ...</p>\n');const l={resultsArray:[],favorites:localStorage.getItem("catsFavorites")?JSON.parse(localStorage.getItem("catsFavorites")):{},currentPage:"results",imagesLoaded:0,totalImages:0,readyToFetch:!1};async function d(){window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3&&l.readyToFetch&&(l.readyToFetch=!1,u("results"))}async function u(e){"results"===e&&(n(l.currentPage),g(),o.classList.remove("hide"),l.resultsArray=await async function(){try{return await(await fetch("https://api.thecatapi.com/v1/images/search?limit=15",i)).json()}catch(e){}}(),l.imagesLoaded=0,l.totalImages=l.resultsArray.length,s(e,l.resultsArray)),"favorites"===e&&(c(),n(l.currentPage),g(),s(e,l.favorites)),function(){function e(){l.imagesLoaded++,l.imagesLoaded===l.totalImages&&(l.readyToFetch=!0,c())}document.querySelectorAll(".image").forEach((t=>t.addEventListener("load",e)))}(),document.querySelectorAll(".like-btn").forEach((e=>{e.getAttribute("listener")||(e.setAttribute("listener","true"),e.addEventListener("click",(e=>{const t=e.target,a=t.previousElementSibling.currentSrc;t.classList.toggle("liked"),l.favorites[a]?function(e){delete l.favorites[e],localStorage.setItem("catsFavorites",JSON.stringify(l.favorites)),"favorites"===l.currentPage&&u(l.currentPage)}(a):function(e){l.favorites[e]=e,localStorage.setItem("catsFavorites",JSON.stringify(l.favorites))}(a)})))}))}function g(){const e=document.getElementById("favorites"),t=document.getElementById("results");e.addEventListener("click",m("favorites")),t.addEventListener("click",m("results"))}window.addEventListener("scroll",d);const m=e=>()=>{"favorites"===e?window.removeEventListener("scroll",d):window.addEventListener("scroll",d),l.currentPage=e,u(l.currentPage)};u("results")})();