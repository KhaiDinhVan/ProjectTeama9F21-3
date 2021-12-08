let requestURL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=H9NKV8K1H74UWJFD"
ButtonBTC.onclick=function(){
    callAPI(requestURL)
}

//console.log(pm.response.json()["Realtime Currency Exchange Rate"]["8. Bid Price"])
function callAPI(requestURL) {
    var xhttp = new XMLHttpRequest()

    xhttp.open('GET',requestURL)

    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


function onXHRLoad() {
    let message = ""

    let pm = JSON.parse(this.responseText)
    
    Lblexchange.value =  parseInt(pm["Realtime Currency Exchange Rate"]["5. Exchange Rate"])

}