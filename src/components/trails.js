import React from "react"

class Trails extends React.Component {
    componentDidMount() {
        //initial
        const c = this.refs.canvas
        const bg = this.refs.bg
        const ctx = c.getContext('2d')
        const bgCtx = bg.getContext('2d')
        var oldDate = Date.now()

        //parameters
        const numTrails = 8
        const speed = .5
        const size = 10
        const maxLife = 200

        var trails = []

        const repaintColor = 'rgba(0, 0, 0, 1)'

        bgCtx.fillStyle = repaintColor;
        resize();

        function Particle() {
            this.x = 0;
            this.y = 0;
            this.flip = false;
            this.direction = false;
            this.life = 0;
            this.alive = false;
        }

        // Create trails
        for (var i = 0; i < numTrails; i++) {
            trails.push(new Particle());
            setTimeout(spawn, i * 200, i);
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', resizeCanvas, false);

        function anim() {
            window.requestAnimationFrame(anim);

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (var i = 0; i < trails.length; i++) {

                if (trails[i].alive) {
                    if (trails[i].life > 0) {
                        if (i < numTrails)
                            ctx.fillStyle = 'hsla(263, 61%, 29%,' + (
                            trails[i].life / maxLife) + ')';
                        else
                            ctx.fillStyle = 'hsla(30, 70%, 30%,' + (
                            trails[i].life / maxLife) + ')';
                        if (Math.random() < 0.004)
                            trails[i].direction = !trails[i].direction;

                        var dirFlip = trails[i].flip === true
                            ? dirFlip = 1
                            : dirFlip = -1;

                        if (trails[i].direction === false) {
                            trails[i].x += dirFlip * speed;
                            ctx.fillRect(trails[i].x, trails[i].y, size, size);
                        } else {
                            trails[i].y += dirFlip * speed;
                            ctx.fillRect(trails[i].x, trails[i].y, size, size);
                        }
                        trails[i].life--;
                    }

                    if (trails[i].life <= 0) {
                        if (i < numTrails) {
                            spawn(i);
                        } else if (i === trails.length - 1) {
                            trails.pop()
                        }
                    }
                }
            }
        }

        function spawn(i) {
            trails[i].x = (3 * window.innerWidth / 8) + (Math.random() * (1 * window.innerWidth / 4));
            trails[i].y = (3 * window.innerHeight / 8) + (Math.random() * (1 * window.innerHeight / 4));
            trails[i].flip = Math.random() >= 0.5;
            trails[i].life = (maxLife / 2) + (Math.random() * maxLife);
            trails[i].alive = true;
        }

        function spawnAtMouse(x, y) {
            var p = new Particle();
            p.x = x;
            p.y = y;
            p.flip = Math.random() >= 0.5;
            p.life = (maxLife / 2) + (Math.random() * maxLife);
            p.alive = true
            trails.push(p)
        }

        function handleMouseMove(event) {
            if (Date.now() - oldDate > 100) {
                spawnAtMouse(event.clientX, event.clientY);
                oldDate = Date.now()
            }
        }

        function resize() {
            c.width = bg.width = window.innerWidth;
            c.height = bg.height = window.innerHeight;
            bgCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        }

        function resizeCanvas(event) {
            resize()
        }

        anim();
    }
    render() {
        return (
          <div>
            <canvas ref="bg"></canvas>
            <canvas ref="canvas"></canvas>
        </div>
      )
    }
}
export default Trails
