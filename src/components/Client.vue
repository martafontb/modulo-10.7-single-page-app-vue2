<template>
    <div>
        <b-button class="mt-5" @click="back">back</b-button>
        <p class="mt-5">Nom: {{ $route.params.name }}</p>
    </div>
</template>

<script>


export default {
    name:'Client',
    props: [
        'id',
        'name'
    ],
    methods: {
        back(){
            this.$router.go(-1)
        },
    }
}
</script>