<template>
    <section class="toolbar">
        <div class="container">
            <div class="search">
                <div class="input-search">
                    <input
                        type="search"
                        placeholder="Search properties..."
                        v-model="search"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        search: {
            get() {
                return this.$store.getters['UI/searchTerm']
            },
            set(val) {
                this.$store.dispatch('UI/setSearchTerm', val)
            },
        },
    },
}
</script>

<style lang="scss">
.toolbar {
	background-color: color(_Yellow);
	padding: grid(1);
	.input-search {
		border-radius: $base-border-radius;
		background-color: color(_YellowDark);
		input {
			width: 100%;
			height: 100%;
			border: none;
			border-radius: $base-border-radius;
			background-color: transparent;
			font-size: 1rem;
			line-height: 1rem;
			padding: 1rem;
			&::placeholder {
				color: rgba(0, 0, 0, 0.5);
			}
			&:focus {
				outline: none;
				background-color: color(_PlumDark);
				color: white;
			}
		}
	}
}
</style>
