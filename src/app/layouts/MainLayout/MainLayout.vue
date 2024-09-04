<template>
    <div class="layout">
        <Sidebar />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import Sidebar from '@/widgets/Sidebar/ui/Sidebar.vue';
</script>

<style scoped lang="scss">
.layout {
    display: flex;
    width: 100%;
    height: 100%;
}
</style>
