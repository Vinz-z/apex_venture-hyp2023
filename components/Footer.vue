<!--
    Footer of the page
-->

<template>
    <footer class="flex items-center">
        <div>
            <img src="~/assets/logos/tssqlogo.png" alt="tssq-logo" class="w-16 h-auto"/>
        </div>
        <div class="md:flex w-full justify-center flex space-x-20 text-l">
            <p class="text-[var(--white-color)]">Politecnico di Milano</p>
            <p class="text-[var(--white-color)]">Hypermedia Applications</p>
        </div>
    </footer>
</template>

<style>
    footer
    {
        background-color: var(--primary-color);
        flex-shrink: 0;
        text-align: center;
        margin-top: auto;
        padding: 10px;
        min-height: 1vh;
        z-index: 1;
    }

    p{
       word-break: break-word;
    }
</style>