<template>
    <Html :data-theme="theme">
        <div class="bg-gradient-to-br from-gray-1 via-pink-1 to-gray-1">
            <Header :add-border="addBorder" />
            <div class="px-6 md:px-8 pt-24 pb-16 text-content1">
                <slot />
            </div>
            <Footer class="mb-8" />
        </div>
        <UIScrollTop :show="addScrollToTop" />
    </Html>
</template>

<script setup lang="ts">
const theme = useTheme();

const addBorder = ref(false);
const addScrollToTop = ref(false);

if (process.client) {
    document.addEventListener("scroll", (e) => {
        addBorder.value = window.scrollY >= 75;
        addScrollToTop.value = window.scrollY >= 500;
    });
}
</script>
