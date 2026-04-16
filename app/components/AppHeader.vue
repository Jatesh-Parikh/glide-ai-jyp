<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps<{ settings?: Content.SettingsDocument }>();

const isOpen = ref(false);
</script>

<template>
    <header class="p-4 md:p-6">
        <nav
            class="mx-auto flex max-w-6xl flex-col justify-between py-2 md:flex-row md:items-center font-medium text-white"
            aria-label="Main"
        >
            <div class="flex items-center justify-between">
                
            </div>
        </nav>
    </header>
</template>