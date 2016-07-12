var React = require('react')

module.exports=React.createClass({
        componentDidMount:function() {
            this.updateCanvas();
        },
        updateCanvas:function() {

            const ctx = this.refs.canvas.getContext('2d');
            var img=new Image();
            img.onload = function() {
                ctx.drawImage(img, 20, 0);
            };
            img.src="/images/h5/shuju.png";
            ctx.font = '15px arial';
            ctx.fillStyle = '#ff6633';
            ctx.fillText('累计投资', 0,70);

            //const ctx = this.refs.canvas.getContext('2d');
            //ctx.fillRect(0,0, 100, 100);            

        },
        render:function() {
            return (
                <canvas ref="canvas" width={310} height={450}/>
        )
        }
    })