<template>
    <div
        class="bg-backgroundPrimary border border-border rounded-lg p-8 text-content2 flex flex-col items-center justify-center text-center"
    >
        <span class="text-xl md:text-2xl font-bold">Challenge Not Started</span>
        <span class="text-sm">You will be notified after join this challenge</span>
        <div class="flex items-center space-x-2 mt-6">
            <div v-for="count in countdown" class="btn btn-no-animation bg-border rounded-md w-12 text-lg">
                {{ count }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const countdown = ["1d", "40h", "29m", "18s"];
</script>
