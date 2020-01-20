<template>
    <section class="background--yellow" id="stylelint">
        <div class="container content" v-html="documentation"></div>
    </section>
</template>
<script>
import Documentation from 'html-loader!markdown-loader?modules!@/assets/data/documentation.md'

export default {
    data: () => ({
        documentation: Documentation,
    }),
}
</script>

<style lang="scss">
pre {
    background-color: color(_YellowLight);
    color: color(_Black);
    code {
        display: block;
        line-height: 1.5;
        padding: 1rem;
    }
}
</style>
