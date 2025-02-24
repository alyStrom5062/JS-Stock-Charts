// cae475904ead4ecaadba3d23de18695b

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const {GME, MSFT, DIS, BNTX } = mockData

    const stocks = [GME, MSFT, DIS, BNTX];

    // Determine Chart Colors
    function getColor(stock){

        if(stock === "GME"){
            return "rgba(61, 161, 61, 0.7)"
        }
        if(stock === "GME"){
            return "rgba(209, 4, 25, 0.7)"
        }
        if(stock === "GME"){
            return "rgba(18, 4, 209, 0.7)"
        }
        if(stock === "BNTX"){
            return "rgba(166, 43, 158, 0.7)"
        }

    }

    stocks.forEach ( stock => stock.values.reverse())

    // Stock Price over Time
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map ( stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: (stock.meta.symbol),
            }))
        }
    });

    console.log(stocks[0].values)        



    // Highest Stock Price
    new Chart(highestPriceChartCanvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map ( stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: (stock.meta.symbol),
            }))
        }
    });

    console.log(stocks[0].values)     
    
    

    // Average Stock Price
    new Chart(averagePriceChartCanvas.getContext('2d'), {
        type: 'pie',
        data: {
            labels: stocks[0].values.map(value => value.symbol),
            datasets: stocks.map ( stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: (stock.meta.symbol),
            }))
        }
    });

    console.log(stocks[0].values)                                                  

}

main()