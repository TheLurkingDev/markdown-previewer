<template>
    <v-container align-center>
        <v-layout row>
            <v-flex mx-4>
                <v-textarea v-model="markdown" solo no-resize px-4 height="300" counter></v-textarea>
            </v-flex>            
        </v-layout>
        <v-layout row>
            <v-flex>
                <div v-markdown class="editor-textarea">{{ markdown }}</div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            markdown: '# Testing this'
        }
    }
}
</script>

<style scoped>
    .editor-textarea {
        width: 100%;
        height: 300px;                      
        padding: 30px;
    }
</style>
