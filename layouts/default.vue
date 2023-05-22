<!--
    Default layout used by all the page
-->
<template>
    <div class = 'page'>
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script>

</script>

<style>
    body {
        margin: 0;
    }

    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #F3EFF5;
        margin: 0;
    }
</style>