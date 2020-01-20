<template>
    <section id="intro">
        <div class="container background--plumdark content">
            <h1>Css Order</h1>
            <p>
                To make sure everyone uses the same order in CSS, we've created
                a logical order which everyone agreed with.
            </p>
            <p>
                All properties are separated by type and grouped by related
                properties.
            </p>
            <p>
                There is also a stylelint plugin to enforce this order and give
                errors when the erros arent set.
                <a href="#stylelint">Read more about this</a>.
            </p>
        </div>
    </section>
</template>

<style lang="scss">
.content {
    a:not([class]) {
        color: color(Skyblue);
    }
}
</style>
