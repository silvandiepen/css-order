<template>
    <div id="app">
        <Intro></Intro>
        <Toolbar></Toolbar>
        <Overview></Overview>
        <Documentation></Documentation>
    </div>
</template>

<script>
import Overview from '@/components/Overview.vue'
import Toolbar from '@/components/Toolbar.vue'
import Intro from '@/components/Intro.vue'
import Documentation from '@/components/Documentation.vue'
export default {
    name: 'app',
    components: {
        Intro,
        Toolbar,
        Overview,
        Documentation,
    },
}
</script>

<style lang="scss" src="@/assets/scss/app.scss" />
