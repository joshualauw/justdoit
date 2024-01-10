<template>
    <Html :data-theme="theme">
        <div class="bg-gradient-to-br" :class="theme == 'light' ? 'from-gray-1 to-pink-1' : 'from-gray-2 to-pink-1'">
            <Header />
            <div class="px-8 pt-24 pb-16 text-content1">
                <slot />
            </div>
            <Footer class="mb-8" />
        </div>
    </Html>
</template>

<script setup lang="ts">
const theme = useTheme();
// bg-gradient-to-br" :class="theme == 'light' ? 'from-gray-1 to-gray-2' : 'from-gray-2 to-gray-3'
</script>
