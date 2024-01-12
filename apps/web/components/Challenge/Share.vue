<template>
    <div class="flex justify-center items-center space-x-2">
        <button v-for="link in shareLinkIcons" @click="link.callback" class="btn btn-sm btn-circle btn-ghost">
            <Icon :name="link.icon" :size="link.size" :class="link.class" />
        </button>
    </div>
</template>

<script setup lang="ts">
const shareLinkIcons = [
    {
        icon: "ic:baseline-whatsapp",
        size: "28",
        class: "text-green-500",
        callback: () => {},
    },
    {
        icon: "ic:baseline-facebook",
        size: "28",
        class: "text-blue-500",
        callback: () => {},
    },
    {
        icon: "skill-icons:instagram",
        size: "26",
        class: "",
        callback: () => {},
    },
    {
        icon: "simple-icons:x",
        size: "24",
        class: "",
        callback: () => {},
    },
];
</script>
