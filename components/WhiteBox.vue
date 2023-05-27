<template>
    <div class="white-box">
      <slot></slot>
    </div>
</template>

<style scoped>
    .white-box{
        justify-content: left;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        background-color: var(--white-color);
        border-radius: 0px var(--big-round);
        padding: 5%;
        width: 100%;
        height: 100%;
        color: var(--primary-color);
        text-align: left;
    }

</style>