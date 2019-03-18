/* --------------- */
// Helpers
/* --------------- */
const Helpers = {
    wrapElement: function (wrapperOptions = {}, element) {
        const wrapper = document.createElement(wrapperOptions.tag || 'div');
        wrapper.className = wrapperOptions.className || 'wrapper';
        element.parentNode.insertBefore(wrapper, element);
        element.parentNode.removeChild(element);
        wrapper.appendChild(element);

        return wrapper;
    },

    isCollision: function(element1, element2) {
        let element1ClientRect = element1.getBoundingClientRect();
        let element2ClientRect = element2.getBoundingClientRect();

        var x1 = element1ClientRect.left;
        var y1 = element1ClientRect.top;
        var h1 = element1ClientRect.height;
        var w1 = element1ClientRect.width;
        var b1 = y1 + h1;
        var r1 = x1 + w1;

        var x2 = element2ClientRect.left;
        var y2 = element2ClientRect.top;
        var h2 = element2ClientRect.height;
        var w2 = element2ClientRect.width;
        var b2 = y2 + h2;
        var r2 = x2 + w2;
  
        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
      }
}


/* --------------- */
// Data
/* --------------- */
const chartsData = {
    "columns":
    [
        [
            "x",
            1542412800000,
            1542499200000,
            1542585600000,
            1542672000000,
            1542758400000,
            1542844800000,
            1542931200000,
            1543017600000,
            1543104000000,
            1543190400000,
            1543276800000,
            1543363200000,
            1543449600000,
            1543536000000,
            1543622400000,
            1543708800000,
            1543795200000,
            1543881600000,
            1543968000000,
            1544054400000,
            1544140800000,
            1544227200000,
            1544313600000,
            1544400000000,
            1544486400000,
            1544572800000,
            1544659200000,
            1544745600000,
            1544832000000,
            1544918400000,
            1545004800000,
            1545091200000,
            1545177600000,
            1545264000000,
            1545350400000,
            1545436800000,
            1545523200000,
            1545609600000,
            1545696000000,
            1545782400000,
            1545868800000,
            1545955200000,
            1546041600000,
            1546128000000,
            1546214400000,
            1546300800000,
            1546387200000,
            1546473600000,
            1546560000000,
            1546646400000,
            1546732800000,
            1546819200000,
            1546905600000,
            1546992000000,
            1547078400000,
            1547164800000,
            1547251200000,
            1547337600000,
            1547424000000,
            1547510400000,
            1547596800000,
            1547683200000,
            1547769600000,
            1547856000000,
            1547942400000,
            1548028800000,
            1548115200000,
            1548201600000,
            1548288000000,
            1548374400000,
            1548460800000,
            1548547200000,
            1548633600000,
            1548720000000,
            1548806400000,
            1548892800000,
            1548979200000,
            1549065600000,
            1549152000000,
            1549238400000,
            1549324800000,
            1549411200000,
            1549497600000,
            1549584000000,
            1549670400000,
            1549756800000,
            1549843200000,
            1549929600000,
            1550016000000,
            1550102400000,
            1550188800000,
            1550275200000,
            1550361600000,
            1550448000000,
            1550534400000,
            1550620800000,
            1550707200000,
            1550793600000,
            1550880000000,
            1550966400000,
            1551052800000,
            1551139200000,
            1551225600000,
            1551312000000,
            1551398400000,
            1551484800000,
            1551571200000,
            1551657600000,
            1551744000000,
            1551830400000,
            1551916800000,
            1552003200000
        ],
        [
            "y0",
            37,
            20,
            32,
            39,
            32,
            35,
            19,
            65,
            36,
            62,
            113,
            69,
            120,
            60,
            51,
            49,
            71,
            122,
            149,
            69,
            57,
            21,
            33,
            55,
            92,
            62,
            47,
            50,
            56,
            116,
            63,
            60,
            55,
            65,
            76,
            33,
            45,
            64,
            54,
            81,
            180,
            123,
            106,
            37,
            60,
            70,
            46,
            68,
            46,
            51,
            33,
            57,
            75,
            70,
            95,
            70,
            50,
            68,
            63,
            66,
            53,
            38,
            52,
            109,
            121,
            53,
            36,
            71,
            96,
            55,
            58,
            29,
            31,
            55,
            52,
            44,
            126,
            191,
            73,
            87,
            255,
            278,
            219,
            170,
            129,
            125,
            126,
            84,
            65,
            53,
            154,
            57,
            71,
            64,
            75,
            72,
            39,
            47,
            52,
            73,
            89,
            156,
            86,
            105,
            88,
            45,
            33,
            56,
            142,
            124,
            114,
            64
        ],
        [
            "y1",
            22,
            12,
            30,
            40,
            33,
            23,
            18,
            41,
            45,
            69,
            57,
            61,
            70,
            47,
            31,
            34,
            40,
            55,
            27,
            57,
            48,
            32,
            40,
            49,
            54,
            49,
            34,
            51,
            51,
            51,
            66,
            51,
            94,
            60,
            64,
            28,
            44,
            96,
            49,
            73,
            30,
            88,
            63,
            42,
            56,
            67,
            52,
            67,
            35,
            61,
            40,
            55,
            63,
            61,
            105,
            59,
            51,
            76,
            63,
            57,
            47,
            56,
            51,
            98,
            103,
            62,
            54,
            104,
            48,
            41,
            41,
            37,
            30,
            28,
            26,
            37,
            65,
            86,
            70,
            81,
            54,
            74,
            70,
            50,
            74,
            79,
            85,
            62,
            36,
            46,
            68,
            43,
            66,
            50,
            28,
            66,
            39,
            23,
            63,
            74,
            83,
            66,
            40,
            60,
            29,
            36,
            27,
            54,
            89,
            50,
            73,
            52
        ]
    ],
    "types":
    {
        "y0": "line",
        "y1": "line",
        "x": "x"
    },
    "names":
    {
        "y0": "#0",
        "y1": "#1"
    },
    "colors":
    {
        "y0": "#3DC23F",
        "y1": "#F34C44"
    }
};

class Chart {
    constructor({ data, canvas, isAutoRender = true }) {
        this.data = this._prepareData(data);
        this.canvas = canvas;
        this.state = { controls: {} };
        this.canvasWidth = canvas.clientWidth;
        this.canvasHeight = canvas.clientHeight;
        this.xStep = this.canvasWidth / (this.data.lines.x.length - 1);
        
        if (canvas.getContext) {
            this.canvasCtx = canvas.getContext('2d');
        } else {
            throw new Error('Your browser doesn\'t support canvas.');
        }

        for (let key in this.data.lines) {
            if (key !== 'x') {
                this.state.controls[key] = { isVisible: true };
            } 
        }

        this.wrapper = Helpers.wrapElement({className: 'canvas-wrapper'}, this.canvas);

        
        
        if (isAutoRender) {
            this.render(
                { offsetLeft: 50, offsetRight: 0 }
            );
        }

        this._createChartMeta(this.canvasCtx);
        this._createControls();
    }

    render(options) {
        const {offsetLeft, offsetRight} = options;

        const { state,
                data, 
                canvasCtx, 
                canvasWidth, 
                canvasHeight, 
                xStep } = this;

        canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
        for (let key in state.controls) {
            if (state.controls[key].isVisible) {
                const sliceLeft = offsetLeft ? data.lines[key].length / 100 * offsetLeft : 0;
                const sliceRight = offsetRight ? data.lines[key].length - (data.lines[key].length / 100 * offsetRight) : data.lines[key].length;
                this.xStep = this.canvasWidth / (data.lines.x.slice(sliceLeft, sliceRight).length - 1);
                console.log(data.lines.x.slice(sliceLeft, sliceRight).length);
                this._drawChartLine(canvasCtx, 
                    {
                        x: data.lines.x.slice(sliceLeft, sliceRight), 
                        y: data.lines[key].slice(sliceLeft, sliceRight)
                    }, 
                    canvasHeight, this.xStep, data.colors[key]
                );
            } 
        }
           
    }

    /**
     * Prepare data for chart
     * 
     * @returns {lines: {x: number[], y0: number[], y1: number[]}
     */
    _prepareData(data) {
        let preparedData = { lines: {} };

        data.columns.forEach(column => {
            column.forEach((item, index) => {
                if (index === 0) {
                    preparedData.lines[column[0]] = [];
                } else {
                    preparedData.lines[column[0]].push(item);
                }
            });  
        });

        preparedData.colors = data.colors;

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

    /**
     * Create controls
     */
    _createControls() {
        const controls = document.createElement('div');
        controls.classList.add('controls');
        
        for (let key in this.state.controls) {
            const controlItem = document.createElement('div');
            const label = document.createElement('label');
            const control = document.createElement('input')

            controlItem.classList.add('controls__item');
            label.innerText = key;
            label.setAttribute('for', key);
            control.setAttribute('type', 'checkbox');
            control.setAttribute('checked', 'checked');
            control.setAttribute('name', key);

            control.addEventListener('change', this._toggleLine.bind(this, {name: key}))

            controlItem.appendChild(label);
            controlItem.appendChild(control);
            controls.appendChild(controlItem);
        }

        this.wrapper.appendChild(controls);
    }

    /**
     * Toggle line
     */
    _toggleLine({name}) {
        if (name in this.state.controls) {
            this.state.controls[name].isVisible = !this.state.controls[name].isVisible;
            this.render();
        }
    }

    /**
     * Create meta information for charts
     * X and Y
     */
    _createChartMeta(canvasCtx) {
        this._createXAxisLabels(canvasCtx);

    }

    _createXAxisLabels() {
        let xPosition = 0;
        let prevLabel;

        this.data.lines.x.forEach((dateString) => {
            const dateObject =  new Date(dateString);
            const dayNumber = dateObject.getDate();
            const monthName = dateObject.toLocaleString('en-us', { month: 'short' });
           
            const label = document.createElement('div');
            label.classList.add('label_x');
            label.textContent = `${dayNumber} ${monthName}`;
            label.style.cssText = `
                position: absolute;
                bottom: -28px;
                left: ${xPosition}px;
                min-width: 100px;
            `;

            this.wrapper.appendChild(label);

            xPosition += this.xStep;

            if (prevLabel) {
               if (Helpers.isCollision(prevLabel, label)) {
                    label.style.display = 'none';
               } else {
                    prevLabel = label;
               }
            } else {
                prevLabel = label;
            } 
        });
    }
}

////////////////////////////////////////

const chart1Canvas = document.querySelector('.telegram-charts__canvas');
const chart1 = new Chart({ data: chartsData, canvas: chart1Canvas });

// Settings
// data
// canvas
// isAutorender


// public methods
// render

















