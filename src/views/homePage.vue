<template>
    <div class="homePage">
        <a-input v-model:value="inputValue" placeholder="请输入" allowClear/>
    </div>
</template>
<script lang="ts" setup>
    import {ref} from 'vue'
    let inputValue = ref('')
    
    const setValue = ()=>{
        inputValue.value='Hello Word'
    }
</script>
<style lang="css" scoped>
    .ant-input-affix-wrapper{
        width: 300px;
    }
</style>