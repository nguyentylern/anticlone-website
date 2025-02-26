<script lang="ts">
    import { page } from '$app/state';
</script>

<style>
    .wrap {
        width: 100vw;
        min-height: 100svh;
        display: grid;
        place-content: center;
    }
</style>

<div class="wrap">
    <h1>{page.status} {page.error.message}</h1>
</div>