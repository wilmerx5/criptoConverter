<script setup>
</script>
<template>

    <div class="alert">
        <slot></slot>
    </div>

</template>

<style scoped>
.alert {
    text-align: center;
    margin-top: 1rem;
    color: red;
    border-left: .5rem solid red;
    background-color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.4rem;
    padding: 2rem;
    margin-bottom: 1rem;
}
</style>