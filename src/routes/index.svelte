<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
    import Counter from '$lib/Counter.svelte';
    import MultiplicationRosette from "../lib/MultiplicationRosette.svelte";
    let n = 10,m = 2;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
    <div class='row'>
        <div class='column'>
            <Counter bind:count={n}/>
            <Counter bind:count={m}/>
        </div>
        <div class='column'>
            <MultiplicationRosette n={n} m="{m}"/>
        </div>
    </div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }

    .column {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
    }

</style>
