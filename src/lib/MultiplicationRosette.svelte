<script lang="ts">
    import { onMount } from 'svelte';
    let canvas;
    export let n;
    export let m;
    onMount(() => {
        let frame = requestAnimationFrame(loop);
        function loop(t) {
            frame = requestAnimationFrame(loop);
            drawCircle(canvas, n, m)
        }

        return () => {
            cancelAnimationFrame(frame);
        };
    });

    const drawCircle = function (canvas, n, m) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, 800, 800); // clear canvas
        ctx.imageSmoothingEnabled = true;
        const radius = 250;
        const centerX = 300;
        const centerY = 300;

        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        if (n < 40) {
            ctx.translate(centerX, centerY);
            for (let i = 0; i < n; i++) {
                const ang = 2 * i * Math.PI / n;
                ctx.rotate(ang);
                ctx.translate(0, -radius * 1.10);
                ctx.rotate(-ang);
                ctx.fillText(i.toString(), 0, 0);
                ctx.rotate(ang);
                ctx.translate(0, radius * 1.10);
                ctx.rotate(-ang);
            }
            ctx.resetTransform()
        }

        for (let i = 0; i < n; i++) {
            const ang = i * 2 * Math.PI / n;

            const x1 = centerX + Math.sin(ang) * radius
            const y1 = centerY - Math.cos(ang) * radius

            const x2 = centerX + Math.sin(ang * m) * radius
            const y2 = centerY - Math.cos(ang * m) * radius


            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }

</script>

<canvas
        bind:this={canvas}
        width={600}
        height={600}
></canvas>

<style>
    canvas {
        width: 100%;
    }
</style>
