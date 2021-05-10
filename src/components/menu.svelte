<div class="top">
	<div>
		<a href="/">Home</a>
	</div>
	<div>
		<a href="/test">Test</a>
	</div>
</div>

<style lang="postcss">
	.top {
		@apply flex w-full border-b border-gray-200 px-2 py-1 font-extralight;
	}

	.top div {
		@apply mx-4;
	}

	a {
		@apply text-green-1 hover:text-green-600;
	}
</style>
