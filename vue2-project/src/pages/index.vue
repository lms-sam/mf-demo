<template>
    <div>
        <h1>home</h1>
        <router-link to="/demo">过去微前端页面</router-link>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    }
}
</script>