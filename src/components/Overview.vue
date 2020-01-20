<template>
    <section class="selectors__overview">
        <div
            class="selectors"
            :class="[
                {
                    'selectors--searching': search && search.length,
                },
                {
                    'selectors--has-properties':
                        value && value.value && value.value.length,
                },
            ]"
            v-for="(value, index) in filteredCSS"
            :key="index"
        >
            <h4
                class="selectors__title"
                :class="{ 'is-inactive': value && value.value }"
            >
                {{ value.key }}
            </h4>
            <ol class="selectors__list" v-if="value && value.value">
                <li
                    class="selectors__item"
                    v-for="(selector, index) in value.value"
                    :key="index"
                >
                    {{ selector }}
                </li>
            </ol>
        </div>
    </section>
</template>

<script>
import Order from '@/assets/data/properties.json'
export default {
    name: 'app',
    components: {},
    data() {
        return {
            order: Order,
        }
    },

    computed: {
        search: {
            get() {
                return this.$store.getters['UI/searchTerm']
            },
        },
        filteredCSS() {
            if (this.search) return this.filterCSS(this.order.order)
            else return this.order.order
        },
    },
    methods: {
        filterCSS(values) {
            const newValues = values.map(props => {
                if (this.search.includes('+')) {
                    let terms = this.search.replace(' ', '').split('+')
                    props.value = props.value.filter(function(item) {
                        for (var key in terms) {
                            if (
                                item[key] === undefined ||
                                item[key] != terms[key]
                            ) {
                                return false
                            }
                        }
                        return true
                    })

                    return {
                        key: props.key,
                        value: props.value,
                    }
                } else {
                    return {
                        key: props.key,
                        value: props.value.filter(val =>
                            val.includes(this.search)
                        ),
                    }
                }
            })
            return newValues
        },
    },
}
</script>

<style lang="scss">
body {
    counter-reset: selectors;
}
.selectors {
    display: flex;
    flex-direction: row;
    color: white;
    transition: opacity $base-transition;
    &--searching {
        opacity: 0.25;
        &.selectors--has-properties {
            opacity: 1;
        }
    }

    &__overview {
        padding: 2rem;
        background-color: color(Plum);
    }
    &__title {
        display: block;
        width: grid(5);
        font-size: 0.8rem;
        line-height: 1rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 0;
        padding: 0.5em;
    }
    &__list {
        padding: 0;
        margin: 0;
    }
    &__item {
        display: block;
        line-height: 1rem;
        counter-increment: selectors;
        padding: 0.5em;
        &::before {
            content: counter(selectors);
            display: inline-block;
            width: 2rem;
            opacity: 0.25;
        }
    }
}
</style>
