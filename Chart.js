export default class Chart {
    constructor(data) {
        this.data = this._prepareData(data);
    }

    drawChart() {
        const { data } = this;
        const canvas = document.querySelector('.telegram-charts__canvas');
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = canvas.clientHeight;
        const xStep = canvasWidth / (data.x.length - 1);
        
        if (canvas.getContext){
            var canvasCtx = canvas.getContext('2d');
            this.drawChartLine(canvasCtx, {x: data.x, y: data.y0}, canvasHeight, xStep, '#f33');
            this.drawChartLine(canvasCtx, {x: data.x, y: data.y1}, canvasHeight, xStep, '#33f');
          }
    }

    /**
     * Prepare data for chart
     * 
     * @returns {x: number[], y0: number[], y1: number[]}
     */
    _prepareData(data) {
        const preparedData = {};
        
        data.columns.forEach(column => {
            column.forEach((item, index) => {
                if (index === 0) {
                    preparedData[column[0]] = [];
                } else {
                    preparedData[column[0]].push(item);
                }
            });  
        });

        return preparedData;
    }

    /**
     * Draw line on passed canvas
     * @param {*} canvasCtx 
     * @param {*} chartData 
     * @param {*} canvasHeight 
     * @param {*} xStep 
     * @param {*} lineColor 
     */
    _drawChartLine(canvasCtx, chartData, canvasHeight, xStep, lineColor) {
        let xPosition = 0;

        canvasCtx.beginPath();
        canvasCtx.moveTo(0, canvasHeight - chartData.y[0]);
            
        chartData.x.forEach((date, index) => {
            canvasCtx.lineTo(xPosition, canvasHeight - chartData.y[index]);
            xPosition += xStep;        
        });
        canvasCtx.strokeStyle = lineColor;  
        canvasCtx.stroke();
    }
}