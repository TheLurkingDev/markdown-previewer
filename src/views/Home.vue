<template>
  <div class="home">    
    <markdown-editor />
  </div>
</template>

<script>
// @ is an alias to /src
import MarkdownEditor from '../components/MarkdownEditor';

export default {
  name: 'home',
  components: {
    MarkdownEditor
  }
}
</script>
