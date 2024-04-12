<template>
    <div>
        <div class="title">
            <span class="app-name"> Original Songs |</span>
            <span class="app-desc"> Chords & Lyrics </span>
        </div>
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

.title
{
    padding: 20px 10px;
    font-size: 1.0rem;
}

.app-name
{
    color: #e6b04e;
    font-size: 1.2rem;
    font-weight: 800;
}

.app-desc
{
    color: #e0b970;
    font-weight: 300;
}
</style>