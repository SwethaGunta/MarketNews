import {Alert} from 'react-native';
const API_KEY = "a4ad16933d12431d9e072c79c84a7a3a";
const crypto_url = "https://api.coinmarketcap.com/v1/ticker/";
const crypto_news_url = "https://newsapi.org/v2/everything?"+"q=crypto currency";

const networkErrorObj = {
    status: 503
  }

  export async function get_cryptoData()
  {
    console.log('Getting latest crypto trends')
    let requestOptions = {
        "method": "GET",
      "headers":{
        "Content-Type":"application/json"
      }
    };
    try {
        let resp = await fetch(crypto_url, requestOptions);
        return resp; 
      }
      catch(e) {
        console.log("Request Failed: " + e);
        return networkErrorObj;
      }
    }
    export async function  get_crypto_news_data()
    {
      console.log('Getting latest crypto News')
      let requestOptions = {
        "method": "GET",
      "headers":{
        "Content-Type":"application/json",
        "X-Api-Key": API_KEY,
        "pageSize": 30,
        "page": 1,
        "sources": "cnn,crypto-coins-news,bloomberg,business-insider,cnbc,fox-news,financial-times,the-hindu,the-new-york-times"
      }
    };

    try {
        let resp = await fetch(crypto_news_url, requestOptions);
       console.log(resp);
        return resp; 
      }
      catch(e) {
        console.log("Request Failed: " + e);
        return networkErrorObj;
      }
    }

