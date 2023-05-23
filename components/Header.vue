<!--
    Header of the page
-->
<template>
    <header>
        <h1>Apex Venture</h1>
        <nav>
            <NuxtLink to = "/">HOME</NuxtLink>
            <NuxtLink to = "/ourTeam">Team</NuxtLink>
            <NuxtLink to = "/contacts">Contacts</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header
    {
        background-color: #00524C;
    }

    header
    {
        padding: 0px 20px 0px 20px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>