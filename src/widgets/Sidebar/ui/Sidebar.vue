<template>
    <aside class="sidebar">
        <Logo class="logo" />
        <RouterLink
            :to="route.path"
            class="sidebar__item"
            v-for="route in SIDEBAR_ROUTES"
            :class="{ active: $route.path.includes(route.path) }"
        >
            <img :src="route.icon" alt="" />
            <span>{{ route.title }}</span>
        </RouterLink>
    </aside>
</template>

<script setup lang="ts">
import Logo from '@/shared/ui/Logo.vue';
import { SIDEBAR_ROUTES } from '../constants/sidebar-routes';
</script>

<style scoped lang="scss">
.active {
    background: #fff;
}
.sidebar {
    display: flex;
    flex-direction: column;
    max-width: 220px;
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    padding: 32px 8px 0 0;
    gap: 12px;
    &__item {
        display: flex;
        align-items: center;
        padding: 4px 24px;
        gap: 16px;
        border-radius: 0 8px 8px 0;
        span {
            font-size: 16px;
        }

        &:last-child {
            margin-top: 64px;
            color: #e08181;
        }
    }
}
.logo {
    align-self: center;
}
</style>
