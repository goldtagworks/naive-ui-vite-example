<template>
    <div>
        <div>vue / vite / naive ui test</div>
        <a href="https://vitejs.dev/" target="_blank">
            <img src="../assets/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <div class="flex-center">
        <n-space vertical style="max-width: 360px">
            <n-button>Naive UI SSR</n-button>
            <n-cascader :options="cascaderOptions" />
            <n-select :options="selectOptions" />
            <n-input-number />
        </n-space>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NButton, NSpace, NInputNumber, NCascader, NSelect } from 'naive-ui';

defineOptions({
    name: 'IndexPage'
});

const cascaderOptions = ref([
    {
        label: '0',
        value: '0',
        children: [
            {
                label: '0-0',
                value: '0-0'
            },
            {
                label: '0-1',
                value: '0-1'
            }
        ]
    }
]);
const selectOptions = ref([
    {
        label: '0',
        value: '0'
    },
    {
        label: '1',
        value: '1'
    }
]);
</script>

<style>
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo.electron:hover {
    filter: drop-shadow(0 0 2em #9feaf9);
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
