<template>
    <div>
        <div>Original Songs</div>
        <div>
            <div v-for="song in menu" :key="song.id" class="item" @click="view(song.src)">
                {{ song.title }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { menu } from '../library/menu'

export default {
    data() {
        return {
            menu,
        }
    },
    methods: {
        view(src: string) {
            this.$router.push(`song/${src}`)
        }
    }
}
</script>

<style scoped>
.item
{
    cursor: pointer;
    padding: 8px 15px;
    border-bottom: 1px dotted gray;
}

.item:hover
{
    background: black;
}

.item:first-child
{
    border-top: 1px dotted gray;
}
</style>