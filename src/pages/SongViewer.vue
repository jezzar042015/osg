<template>
    <div>

        <div @click="gotoMenu" class="back">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" :style="{ '--fill-color': fillColor }">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path :fill="fillColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
                    <path :fill="fillColor"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z">
                    </path>
                </g>
            </svg>
            <span> Original Songs </span>
        </div>
        <div class="title">{{ title }}</div>
        <div>
            <div v-for="lyric in lyrics" :key="lyric.line">
                <p v-if="lyric.type == 'line'">
                    <template v-for="chunck in lyric.chuncks" :key="chunck.c">
                        <span v-if="chunck.class" :class="chunck.class">
                            {{ " " }}
                        </span>

                        <span v-else class="chunk" v-bind:data-chord='chunck[key]'>
                            {{ chunck.chunck }}
                        </span>
                    </template>
                </p>
                <p v-else-if="lyric.type == 'label'">
                    <span class="label">{{ lyric.label }}</span>
                </p>
            </div>

        </div>
        <div class="footer"></div>
    </div>
</template>

<script lang="ts">
import { lib } from '@/library/menu'

export default {
    async mounted() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setFillColor(prefersDark);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.handleColorSchemeChange);

        const songId = this.$route.params.id;
        const song = await lib.song(songId);
        this.title = song.title
        this.lyrics = song.lyrics
    },
    data() {
        return {
            title: null,
            lyrics: null,
            key: 'chord',
            fillColor: ''
        }
    },
    methods: {
        gotoMenu() {
            this.$router.push('/')
        },
        setFillColor(isDarkMode: boolean) {
            // this.fillColor = isDarkMode ? 'var(--dark-fill-color)' : 'var(--light-fill-color)';
            this.fillColor = isDarkMode ? '#ffffff' : '#000000';

        },
        handleColorSchemeChange(e) {
            this.setFillColor(e.matches);
        },
    }
}
</script>

<style scoped>
p
{
    margin-top: 36px;
}

span.chunk
{
    position: relative;
}

span.chunk:before
{
    content: attr(data-chord);
    position: absolute;
    top: -22px;
    color: #e6b04e;
    font-weight: 700
}

.title
{
    font-weight: 700;
    font-size: 1.5rem;
    padding-top: 4px;
    color: #e6b04e;
}

.label
{
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #e6b04e;
}

.footer
{
    height: 30px;
}

.w-5
{
    width: 30px;
    display: inline-block;
}

.back
{
    display: flex;
    gap: 5px;
    align-items: center;
    margin-bottom: 15px;
}

.back svg
{
    height: 16px;
}

.back:hover
{
    /* color: white; */
    cursor: pointer;
}
</style>

<style scoped>
:root
{
    --light-fill-color: #000000;
    --dark-fill-color: #d4cbcba3;
}
</style>