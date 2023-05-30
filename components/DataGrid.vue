<template>
    <div class="mega-container 
                w-80 
                flex">
        <WhiteBox>
            <div class="grid 
                        grid-cols-2 
                        w-full 
                        h-full 
                        place-content-center">
                <div class="top-left-square 
                            text-center 
                            border-r 
                            border-b 
                            border-zinc-300 
                            border-1
                            h-30 
                            flex 
                            flex-col 
                            justify-center 
                            items-center 
                            p-4">
                    <div class="data 
                                break-word 
                                text-5xl">
                        {{ dataTopLeft }}
                    </div>
                    <div class="caption 
                                break-word 
                                overflow-wrap 
                                text-xs">
                        {{ captionTopLeft }}
                    </div>
                </div>
                <div class="top-right-square 
                            text-center 
                            border-l 
                            border-b 
                            border-zinc-300 
                            h-30 
                            flex 
                            flex-col 
                            justify-center 
                            items-center 
                            p-4">
                    <div class="data 
                                break-word 
                                text-5xl">
                        {{ dataTopRight }}
                    </div>
                    <div class="caption 
                                break-word 
                                overflow-wrap 
                                text-xs">
                        {{ captionTopRight }}
                    </div>
                </div>
                <div class="bottom-left-square 
                            text-center 
                            border-r 
                            border-t 
                            border-zinc-300 
                            h-30 
                            flex 
                            flex-col 
                            justify-center 
                            items-center 
                            p-4">
                    <div class="data 
                                break-word 
                                text-5xl">
                        {{ dataBottomLeft }}
                    </div>
                    <div class="caption 
                                break-word 
                                overflow-wrap 
                                text-xs">
                        {{ captionBottomLeft }}
                    </div>
                </div>
                <div class="bottom-right-square 
                            text-center 
                            border-l 
                            border-t 
                            border-zinc-300
                            h-30 
                            flex 
                            flex-col 
                            justify-center 
                            items-cente 
                            p-4">
                    <div class="data 
                                break-word 
                                text-5xl">
                        {{ dataBottomRight }}
                    </div>
                    <div class="caption 
                                break-word 
                                overflow-wrap 
                                text-xs">
                        {{ captionBottomRight }}
                    </div>
                </div>
            </div>
        </WhiteBox>
    </div>
</template>

<script setup>
    const props = defineProps({
        dataTopLeft: {
            type: String,
            required: true,
        },
        captionTopLeft: {
            type: String,
            required: true,
        },
        dataTopRight: {
            type: String,
            required: true,
        },
        captionTopRight: {
            type: String,
            required: true,
        },
        dataBottomLeft: {
            type: String,
            required: true,
        },
        captionBottomLeft: {
            type: String,
            required: true,
        },
        dataBottomRight: {
            type: String,
            required: true,
        },
        captionBottomRight: {
            type: String,
            required: true,
        },
    })
</script>

<style scoped>

.mega-container {
    align-self: center;
    min-width: 300px;
    min-height: 300px;
}

</style>