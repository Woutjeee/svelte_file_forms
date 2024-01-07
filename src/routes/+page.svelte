<script lang="ts">
	let files: FileList;

	$: if (files) {
		// Note that `files` is of type `FileList`, not an Array:
		// https://developer.mozilla.org/en-US/docs/Web/API/FileList
		console.log(files);

		for (const file of files) {
			console.log(`${file.name}: ${file.size} bytes`);
		}
	}
</script>

<h1>This works:</h1>


<label for="avatar">Upload a picture:</label>
<input accept="image/png, image/jpeg" bind:files id="avatar" name="avatar" type="file" />

<label for="many">Upload multiple files of any type:</label>
<input bind:files id="many" multiple type="file" />

{#if files}
	<h2>Selected files:</h2>
	{#each Array.from(files) as file}
		<p>{file.name} ({file.size} bytes)</p>
	{/each}
{/if}


<h1>If i try to use forms however</h1>

<form method="POST">
    <label for="avatar">Avatar</label>
    <input type="file" name="avatar">
    <button type="submit">Submit</button>
</form>