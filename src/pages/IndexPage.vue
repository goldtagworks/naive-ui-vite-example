<template>
    <n-config-provider :theme="theme">
        <n-card>
            <n-space>
                <n-button @click="theme = darkTheme">Dark</n-button>
                <n-button @click="theme = null">Light</n-button>
            </n-space>
        </n-card>
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
