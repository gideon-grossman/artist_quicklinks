<template>
    <div>
        <div class="row">
            <div class="col">
                <Avatar class="mb-2" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                {{ name }}</div>
            </div>
        <div class="row subtext">
            <div class="col">
                &#128513 {{ tagline }} 	&#9996
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from './Avatar.vue'

export default {
    name: 'Header',
    components: {
        Avatar
    },
    data() {
        return {
            name: "Gideon Grossman",
            tagline: "Live free. Be kind."
        }
    }
}
</script>

<style scoped>
.subtext {
    font-size: 0.9em;
}
</style>