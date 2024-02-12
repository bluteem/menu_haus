<template>
    <div>
        <Datatable :columns="columns" :rows="rows" />
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { Datatable } from 'tw-elements';

export default {
    name: 'DataTable',
    props: {
        columns: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        }
    },
    components: {
        Datatable
    }
};
</script>
  
<style scoped>
/* Add any component-specific styles here */
</style>
  