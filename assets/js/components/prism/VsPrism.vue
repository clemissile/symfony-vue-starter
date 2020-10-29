<template>
    <prism :language="codeLanguage">
        <slot></slot>
    </prism>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
    name : 'VsPrism',
    
    components: {
        Prism
    },

    props: {
        codeLanguage: {
            default: "markup",
            type: String
        }
    }
}
</script>
