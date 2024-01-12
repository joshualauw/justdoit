<template>
    <div class="space-y-2 lg:space-y-4">
        <div class="flex items-center justify-between">
            <div class="text-left p-2">
                <p class="text-sm text-content2">Today's Goal</p>
                <p class="text-primary font-semibold">12 / 20 minutes</p>
            </div>
            <div class="text-right p-2">
                <p class="text-sm text-content2">Current Streak</p>
                <p class="text-error font-semibold">
                    <Icon name="solar:fire-bold" size="20" />
                    <span class="ml-1">1 day</span>
                </p>
            </div>
        </div>
        <div class="w-full relative">
            <div
                v-for="i in 3"
                class="z-50 absolute top-0 border-r-2 lg:border-r-4 h-6 lg:h-8 border-white"
                :style="`left: ${25 * i}%`"
            ></div>
            <progress class="progress progress-flat-secondary w-full h-6 lg:h-8" value="65" max="100"></progress>
        </div>
    </div>
</template>
