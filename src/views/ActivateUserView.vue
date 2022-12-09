<template>
    <div class="container">
        <a href="https://lapuertamarilla.es" rel="noopener noreferrer">
            <img src="https://lapuertamarilla.es/images/logo.png" />
        </a>
        <h1 class="title mt-3">Activación de usuario</h1>
        <div v-if="loading" class="mt-3">
            <h2 class="subtitle">
                Estamos validando la activación de su cuenta de usuario...
            </h2>
            <progress
                v-if="loading"
                class="progress is-small is-primary"
                max="100"
            >
                15%
            </progress>
        </div>
        <div
            v-if="resp.type"
            class="notification"
            :class="{
                'is-danger': resp.type === 'error',
                'is-primary': resp.type === 'success',
            }"
        >
            {{ resp.message }}
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
//   import HelloWorld from "@/components/HelloWorld.vue";
import axios from '@/helpers/axios'

export default {
    name: 'ActivateUserView',
    // components: {
    //   HelloWorld,
    // },
    data() {
        return {
            loading: false,
            resp: {
                type: null,
                message: '',
            },
        }
    },

    mounted() {
        const { hash } = this.$route.params
        console.log(hash)
        this.loading = true
        this.resp.type = null
        axios
            .patch(`/users/${hash}/activate`)
            .then((res) => {
                console.log(res)
                this.loading = false
                this.resp.type = 'success'
                this.resp.message = 'Usuario actualizado con éxito'
            })
            .catch((res) => {
                this.loading = false
                this.resp.type = 'error'
                this.resp.message = 'Se ha producido un error'
            })
    },
}
</script>
