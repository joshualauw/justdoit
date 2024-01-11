<template>
    <Html :data-theme="theme">
        <div class="bg-gradient-to-br from-gray-1 via-pink-1 to-gray-1">
            <Header />
            <div class="px-6 md:px-8 pt-24 pb-16 text-content1">
                <slot />
            </div>
            <Footer class="mb-8" />
        </div>
    </Html>
</template>

<script setup lang="ts">
const theme = useTheme();
</script>
