<script>
	let count = 0
	let values = []
	
	function addPara() {
		function delayedAddPara() {
			values.push(count++)
			values = values
		}
		setTimeout(delayedAddPara, 100)
	}
</script>

{#each values as v}
<p class='paragraph'>
	Paragraph {v}
</p>
{/each}

<button on:click={addPara}>Add Para</button>