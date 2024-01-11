<template>
    <div class="w-full sm:w-[90%] lg:w-[1000px] xl:w-[1250px] mx-auto space-y-8">
        <div>
            <h1 class="text-xl md:text-2xl font-bold mb-8">Joined Challenges</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                <ChallengeCard v-for="i in 4" />
            </div>
        </div>
        <div>
            <h1 class="text-xl md:text-2xl font-bold mb-8 flex flex-col md:flex-row">
                My Challenges (0/3)
                <span class="md:ml-3">
                    <button class="btn btn-xs md:btn-sm btn-solid-secondary">Subscribe for More +</button>
                </span>
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                <ChallengeCard v-for="i in 2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "My Challenges",
});
</script>
