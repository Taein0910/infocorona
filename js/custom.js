window.onload=function(){var e=new Array("사회적 거리두기에<br>동참해주세요.","증상 발생 시,<br>1339로 전화하세요!","올바른 손씻기는<br>비누로 30초 이상!","예방 수칙 준수로<br>이겨낼 수 있습니다.","기침할 땐,<br>옷소매로 가리고 해주세요.","열심히 일하시는<br>의료진분들께 박수!","확진자 더 이상<br>안 늘게 해주세요...☹","예배, 집회, 모임 등은<br>자제해주세요!");document.getElementById("suggestText").innerHTML=randomItem(e),$.getJSON("https://www.ipinfo.io/json",function(e){var r="전국";switch(e.region){case"Gyeonggi-do":r="경기";break;case"Seoul":r="서울";break;case"Busan":r="부산";break;case"Daegu":r="대구";break;case"Incheon":r="인천";break;case"Gwangju":r="광주";break;case"Daejeon":r="대전";break;case"Ulsan":r="울산";break;case"Sejong":r="세종시";break;case"Gangwon-do":r="강원";break;case"Chungbuk-do":r="충청북도";break;case"Chungnam-do":r="충청남도";break;case"Jeollabuk-do":r="전라북도";break;case"Jeollanam-do":r="전라남도";break;case"Gyeongbuk-do":r="경상북도";break;case"Gyeongnam-do":r="경상남도"}$(".myRegion").html(r)})};var audioFile=new Audio("voice.mp3");function randomItem(e){return e[Math.floor(Math.random()*e.length)]}var track=document.getElementById("track"),controlBtn=document.getElementById("play-pause");function playPause(){track.paused?(track.play(),controlBtn.className="pause"):(track.pause(),controlBtn.className="play")}controlBtn.addEventListener("click",playPause),track.addEventListener("ended",function(){controlBtn.className="play"}),new Vue({el:"#scraper",data:()=>({scraperRunning:!1,url:"m.news.naver.com/covid19/index.nhn",response:null}),methods:{runScraper:function(){this.scraperRunning=!0,this.url.includes("http"),this.url="https://cors-anywhere.herokuapp.com/http://m.news.naver.com/covid19/index.nhn",this.$http.get(this.url).then(e=>{this.scraperRunning=!1,document.createElement("div").innerHTML=e.body;var r=e.body,a=r.indexOf("확진환자</em>"),n=r.substr(a,78).replace("확진환자</em>","").replace(/(\s*)/g,"").replace(/\"/gi,"").replace("spanclass=info_count","").replace("<","").replace(">","");document.getElementById("confirmed").innerHTML=n+"명";var t=r.indexOf("격리해제</em>"),c=r.substr(t,78).replace("격리해제</em>","").replace(/(\s*)/g,"").replace(/\"/gi,"").replace("spanclass=info_count","").replace("<","").replace(">","");document.getElementById("cure").innerHTML=c+"명";var s=r.indexOf("사망자</em>"),l=r.substr(s,78).replace("사망자</em>","").replace(/(\s*)/g,"").replace(/\"/gi,"").replace("spanclass=info_count","").replace("<","").replace("/a","").replace(">","");document.getElementById("death").innerHTML=l+"명";var p=r.indexOf("topStateLayer"),o=r.substr(p,78).replace("topStateLayer","").replace(/\"/gi,"").replace("spanclass=info_count","").replace("<","").replace("/button>","").replace(">","");document.getElementById("whenUpdate").innerHTML=o+"";var i=r.indexOf("info_variation"),u=r.substr(i,94).replace("info_variation","").replace(/\"/gi,"").replace("<spanclass=","").replace("<","").replace("/button>","").replace(">","").replace(" ","");document.getElementById("confirmedPM").innerHTML="확진자 (+ "+u+")";var d=r.indexOf("item_clear")+160,h=r.substr(d,94).replace("info_variation","").replace(/\"/gi,"").replace("<spanclass=","").replace("<","").replace("/button>","").replace(">","").replace("o_variation","").replace("sp","").replace(/[a-z]/gi,"").replace(" ","");document.getElementById("curePM").innerHTML="격리해제자 (+ "+h+")";var m=r.indexOf("item_death")+160,b=r.substr(m,93).replace("info_variation","").replace(/\"/gi,"").replace("<spanclass=","").replace("<","").replace("/button>","").replace(">","").replace("o_variation","").replace("sp","").replace(/[a-z]/gi,"").replace(" ","").trim();document.getElementById("deathPM").innerHTML="사망자 (+ "+b+")"})},runScraperGlobe:function(){this.scraperRunning=!0,this.url.includes("http"),this.url="https://cors-anywhere.herokuapp.com/http://www.worldometers.info/coronavirus/",this.$http.get(this.url).then(e=>{this.scraperRunning=!1,document.createElement("div").innerHTML=e.body;var r=(n=e.body).indexOf("<h1>Coronavirus Cases:</h1>"),a=n.substr(r,123).replace("<h1>Coronavirus Cases:</h1>","").replace(/(\s*)/g,"").replace(/\"/gi,"").replace("divclass=maincounter-number","").replace("<","").replace(">","");document.getElementById("globeConfirmed").innerHTML=a+"<span>명</span>";var n,t=(n=e.body).indexOf("<h1>Deaths:</h1>"),c=n.substr(t,123).replace("<<h1>Deaths:</h1>","").replace(/(\s*)/g,"").replace(/\"/gi,"").replace("h1Deaths:<>","").replace("h1Deaths:","").replace(">","");document.getElementById("globeDeath").innerHTML=c+"<span>명</span>"})},runScraperTableByCountry:function(){this.scraperRunning=!0,this.url.includes("http"),this.url="https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/countries-where-coronavirus-has-spread/",this.$http.get(this.url).then(e=>{this.scraperRunning=!1,document.createElement("div").innerHTML=e.body;var r=e.body,a=r.indexOf("table-responsive"),n=r.substr(a+19,6e3).replace("Country","국가").replace("Cases","확진자").replace("Deaths","사망자").replace("Region","대륙").replace("United States","미국").replace("Italy","이탈리아").replace("Spain","스페인").replace("China","중국").replace("Germany","독일").replace("France","프랑스").replace("Iran","이란").replace("United Kingdom","영국").replace("Switzerland","스위스").replace("Turkey","터키").replace("Belgium","벨기에").replace("Netherlands","네덜란드").replace("Austria","호주").replace("South Korea","대한민국").replace("Canada","캐나다").replace("Portugal","________");document.getElementById("tableByCountry").innerHTML=n.substr(0,5400)})},runScraperCBS:function(){this.scraperRunning=!0,this.url.includes("http")?(setTimeout(function(){$(".myRegion").html()},2e3),this.url="https://cors-anywhere.herokuapp.com/https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&query=경기%20사회안전 재난문자"):this.url="https://cors-anywhere.herokuapp.com/https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&query="+regionKR+"%20사회안전 재난문자",this.$http.get(this.url).then(e=>{this.scraperRunning=!1,document.createElement("div").innerHTML=e.body;var r=(n=e.body).indexOf("area_name"),a=n.substr(r,123).replace("area_name","").replace(/\"/gi,"").replace("<button","").replace("<","").replace("/em>","").replace(">","");document.getElementById("cbs_from1").innerHTML=a;var n,t=(n=e.body).indexOf("dsc _text"),c=n.substr(t,213).replace("dsc _text","").replace(/\"/gi,"").replace("펼쳐보기","").replace("h1Deaths:","").replace(">","");document.getElementById("cbs_ct1").innerHTML=c;var s=(p=e.body.substr(r+213,800)).indexOf("area_name"),l=p.substr(s,123).replace("area_name","").replace(/\"/gi,"").replace("<button","").replace("<","").replace("/em>","").replace(">","");document.getElementById("cbs_from2").innerHTML=l+"<br>";var p,o=(p=e.body.substr(r+500,1e3)).indexOf("dsc _text"),i=p.substr(o,213).replace("dsc _text","").replace(/\"/gi,"").replace("펼쳐보기","").replace("h1Deaths:","").replace(">","");document.getElementById("cbs_ct2").innerHTML=i})}},beforeMount(){this.runScraper(),this.runScraperGlobe(),this.runScraperCBS(),this.runScraperTableByCountry()}});


angular.module("myApp", ['ngRoute'])

.controller('mainCtrl', function($scope, getCoronaNewsArticles){
  
  getCoronaNewsArticles.getNewsArticles(function(response){
    $scope.articles = response.data.articles;   
  });  
})

.service('getCoronaNewsArticles', function($http){
   this.getNewsArticles = function(callback){
  $http.get('https://newsapi.org/v2/everything?q=코로나19&apiKey=d60ec4ccad4e46678ce633f1b4dfa2b1&pageSize=15&sortBy=publishedAt')
     .then(callback);
     
   };
})
