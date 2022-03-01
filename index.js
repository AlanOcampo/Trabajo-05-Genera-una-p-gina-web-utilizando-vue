window.addEventListener('load', ()=>{
    const vm = new Vue({
        el:'#app',
        data: {
            titulo: 'Precio de un bitcoin ₿ en diferentes monedas',
            actualizacion: 'Ultima fecha de actualizacion: ',
            bitcoinData: {
                time: null,
                priceUSD: null,
                priceEUR: null,
                priceGBP: null,
            }  
        },
        created: function(){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((val)=>{
                this.bitcoinData.time = val.data.time.updated    
                this.bitcoinData.priceUSD = val.data.bpi.USD.rate_float.toFixed(2)
                this.bitcoinData.priceEUR = val.data.bpi.EUR.rate_float.toFixed(2)
                this.bitcoinData.priceGBP = val.data.bpi.GBP.rate_float.toFixed(2)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    })

})

