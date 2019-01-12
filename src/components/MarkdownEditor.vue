<template>
    <div>
        <v-textarea v-model="markdown" solo no-resize px-4 height="300" counter></v-textarea>
        <vue-markdown-it :source="markdown" id="some-id" breaks="true" class="my-markdown-class"/>
    </div>    
</template>

<script>
import VueMarkdownIt from 'vue-markdown-it';

export default {
    name: 'MarkdownEditor',
    components: {
        VueMarkdownIt
    },
    data() {
        return {
            markdown: ''
        }
    }
}
</script>

<style scoped>
    @import "~highlight.js/styles/default.css";
</style>
