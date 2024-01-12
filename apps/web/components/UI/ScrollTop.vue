<template>
    <div
        @click="scrollToTop"
        class="fixed bottom-4 right-4 btn btn-circle btn-error w-12 h-12 transition-all ease-out duration-300 opacity-0"
        :class="{ 'opacity-100': show }"
    >
        <Icon name="mingcute:up-fill" size="24" />
    </div>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>();

const scrollToTop = () => {
    if (process.client) {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollSpeed = 10;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / scrollSpeed);
        }
    }
};
</script>
