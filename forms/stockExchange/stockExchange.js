btnseestock.onclick=function(){
 let response = ""
 const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "yh-finance.p.rapidapi.com",
		"x-rapidapi-key": "63ea4c552cmsha20fcff9524a508p13ba34jsn5005d84272b1"
	}
}

$.ajax(settings).done(function (response) {
let message = ""
   for (let i = 0; i < response.news.length; i++) 
    message += response.news[i].title 
      
     txtstockinfo.value = message;
    console.log(response)
    console.log( response.quotes[0].exchDisp)
})
}
btnseeexchangeinfo.onclick=function(){
  let response = ""
 const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "yh-finance.p.rapidapi.com",
		"x-rapidapi-key": "63ea4c552cmsha20fcff9524a508p13ba34jsn5005d84272b1"
	}
}

$.ajax(settings).done(function (response) {
let message1 = ""
   for (let i = 0; i < response.quotes[0].exchDisp; i++) 
    message1 += response.quotes[0].exchDisp
     
      
        txtexchange.value = (response.quotes[0].exchDisp);
      //console.log(response)
      console.log(response.quotes[0].exchDisp)
})
}
