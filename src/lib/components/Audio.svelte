<script lang="ts">
	let { src, title } = $props();

	let time = $state(0);
	let duration = $state(0);
	let paused = $state(true);

	function format(time: number) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
    
    function playPause() {
        paused = !paused;
    }
</script>

<div class={['player', { paused }]}>
	<audio
		{src}
		bind:currentTime={time}
		bind:duration
		bind:paused
		onended={() => {
			time = 0;
		}}
	></audio>

	<div class="info">
		<div class="description">
			<span>{title}</span>
		</div>

		<div class="time">
			<span>{format(time)}</span>
			<div
				class="slider"
				onpointerdown={e => {
					const div = e.currentTarget;

					function seek(e: PointerEvent) {
						const { left, width } = div.getBoundingClientRect();

						let p = (e.clientX - left) / width;
						if (p < 0) p = 0;
						if (p > 1) p = 1;

						time = p * duration;
					}

					seek(e);

					window.addEventListener('pointermove', seek);

					window.addEventListener('pointerup', () => {
						window.removeEventListener('pointermove', seek);
					}, {
						once: true
					});
				}}
			>
				<div class="progress" style="--progress: {time / duration}%"></div>
			</div>
			<span>{duration ? format(duration) : '--:--'}</span>
		</div>
	</div>

    <button
        type="button"
		class="play"
		aria-label={paused ? 'play' : 'pause'}
		onclick={() => paused = !paused}
	>
        {paused ? 'Play' : 'Pause'}
    </button>
</div>

<style>
	.player {
		padding: 0.75rem;
		border-radius: 0.5rem;
        border: 1px solid #dee2e6;
		color: var(--clr-foreground);
		user-select: none;
	}

    .player > * {
        display: block;
    }

	button {
        width: 100%;
        background-color: var(--clr-foreground);
        color: var(--clr-background);
        border: 0;
        padding: 0.75rem;
		border-radius: 0.5rem;
        margin-top: 0.75rem;
	}

	.info {
		overflow: hidden;
	}

	.description {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1;
	}

	.time {
		display: flex;
		align-items: center;
		gap: 0.5rem;
        margin-top: 0.75rem;
	}

	.time span {
		font-size: 0.75em;
	}

	.slider {
		flex: 1;
		height: 0.5rem;
		background: #dee2e6;
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.progress {
		width: calc(100 * var(--progress));
		height: 100%;
		background: var(--clr-foreground);
	}
</style>