<template>
    <div class="w-full sm:w-[90%] lg:w-[900px] xl:w-[1050px] mx-auto">
        <div class="flex items-center justify-between">
            <div class="hidden xl:flex items-center space-x-4">
                <div class="flex items-center">
                    <Icon name="ic:baseline-search" size="24" class="mr-1.5" />
                    <input type="text" class="input w-64" placeholder="Search here..." />
                </div>
                <div class="divider divider-vertical h-8"></div>
                <div class="flex items-center">
                    <Icon name="material-symbols:not-started-outline" size="24" class="mr-1.5" />
                    <select class="select w-48">
                        <option>All</option>
                        <option>Ongoing</option>
                        <option>Not Started</option>
                    </select>
                </div>
                <div class="divider divider-vertical h-8"></div>
                <button class="btn btn-error">Apply</button>
            </div>
            <div class="flex items-center text-xl font-semibold">14 Challenges Found</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 mt-8">
            <ChallengeCard v-for="i in 8" />
        </div>
    </div>
</template>

<script setup lang="ts"></script>
