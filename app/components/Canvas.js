var React = require('react')

module.exports=React.createClass({
        componentDidMount:function() {
            console.log(this.props.annualizedRate);
            var annualizedRate=this.props.annualizedRate;
            var progress=this.props.progress;
            this.updateCanvas(annualizedRate);
        },

        componentWillReceiveProps: function(nextProps) {
          this.updateCanvas(nextProps.annualizedRate)
        },
        updateCanvas:function(annualizedRate,progress) {

            const ctx = this.refs.canvas.getContext('2d');
            //ctx.fillRect(0,0, 100, 100);

            //开始一个新的绘制路径
            ctx.beginPath();
            ctx.lineWidth = 5;
            //设置弧线的颜色为蓝色
            ctx.strokeStyle = "#ededed";
            var circle = {
                x : 160,    //圆心的x轴坐标值
                y : 100,    //圆心的y轴坐标值
                r : 90      //圆的半径
            };
            //沿着坐标点(100,100)为圆心、半径为50px的圆的顺时针方向绘制弧线
            ctx.arc(circle.x, circle.y, circle.r, 0.75*Math.PI, 0.25*Math.PI , false);
            //按照指定的路径绘制弧线
            ctx.stroke();


            //开始一个新的绘制路径
            ctx.beginPath();
            //设置弧线的颜色为蓝色
            ctx.strokeStyle = "#ff6633";
            var circle = {
                x : 160,    //圆心的x轴坐标值
                y : 100,    //圆心的y轴坐标值
                r : 90      //圆的半径
            };
            progress=progress||10;
            var rate=((2.7*progress)+135)/180;
            rate=parseFloat(rate);
            console.log(rate);
            //沿着坐标点(100,100)为圆心、半径为50px的圆的顺时针方向绘制弧线
            //ctx.arc(circle.x, circle.y, circle.r, 0.75*Math.PI, 1.25*Math.PI , false);

            ctx.arc(circle.x, circle.y, circle.r, 0.75*Math.PI, rate*Math.PI , false);

            //按照指定的路径绘制弧线
            ctx.stroke();

            //ctx.textBaseline = 'top';
            //ctx.strokeStyle = '#DF5326';
            //ctx.strokeText('Hello', 100, 100);
            ctx.font = '45px arial';
            ctx.fillStyle = '#ff6633';
            ctx.fillText(annualizedRate, 115,100);

            ctx.font = '25px arial';
            ctx.fillStyle = '#868b90';
            ctx.fillText('预期年化', 115,150,80);

        },
        render:function() {
            return (
                <canvas ref="canvas" width={300} height={300}/>
        )
        }
    })