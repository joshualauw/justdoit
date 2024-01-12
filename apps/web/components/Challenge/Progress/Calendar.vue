<template>
    <div class="space-y-2 lg:space-y-4">
        <div class="flex items-center justify-between">
            <div class="text-left p-2">
                <p class="text-sm text-content2">Total</p>
                <p class="font-semibold">6 days</p>
            </div>
            <div class="text-center p-2">
                <p class="text-sm text-content2">Success</p>
                <p class="font-semibold">5 days</p>
            </div>
            <div class="text-right p-2">
                <p class="text-sm text-content2">Failed</p>
                <p class="font-semibold">1 day</p>
            </div>
        </div>
        <div class="w-full">
            <div
                v-for="i in 31"
                class="bg-border w-5 h-5 lg:w-8 lg:h-8 inline-flex mr-1 rounded-sm"
                :class="{ 'bg-success': Math.random() >= 0.5 }"
            ></div>
        </div>
    </div>
</template>
