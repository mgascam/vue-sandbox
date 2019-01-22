<template>
    <p>This one is parent</p>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Parent',
    props: ['items'],
    created: function() {
        console.log(this.items);
    }

}
</script>

<style>

</style>
