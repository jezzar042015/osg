<template>
    <div>
        <div class="back" @click="gotoMenu">
            Original Songs
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
        }
    },
    methods: {
        gotoMenu() {
            this.$router.push('/')
        }
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

.back:hover
{
    color: white;
    cursor: pointer;
}
</style>