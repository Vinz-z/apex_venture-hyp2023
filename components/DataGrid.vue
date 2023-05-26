<template>
    <div class="mega.container">
        <div class="grid">
            <div class="top-left-square">
                <div class="data">
                    {{ dataTopLeft }}
                </div>
                <div class="caption">
                    {{ captionTopLeft }}
                </div>
            </div>
            <div class="top-right-square">
                <div class="data">
                    {{ dataTopRight }}
                </div>
                <div class="caption">
                    {{ captionTopRight }}
                </div>
            </div>
            <div class="bottom-left-square">
                <div class="data">
                    {{ dataBottomLeft }}
                </div>
                <div class="caption">
                    {{ captionBottomLeft }}
                </div>
            </div>
            <div class="bottom-right-square">
                <div class="data">
                    {{ dataBottomRight }}
                </div>
                <div class="caption">
                    {{ captionBottomRight }}
                </div>
            </div>
        </div>
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
    width: 300px;
    height: 300px;
}

.grid{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 0;
}

</style>