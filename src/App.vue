<template>
    <n-config-provider :theme="theme">
        <router-view />
    </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import { ref } from 'vue';

defineOptions({
    name: 'App'
});

const theme = ref<any>(darkTheme);
</script>
