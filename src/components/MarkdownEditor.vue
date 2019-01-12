<template>
    <v-container>
        <v-textarea v-model="markdown" box placeholder="Enter markdown" no-resize height="350" counter></v-textarea>
        <vue-markdown-it :source="markdown" id="some-id" breaks="true" class="my-markdown-class"/>
    </v-container>    
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
