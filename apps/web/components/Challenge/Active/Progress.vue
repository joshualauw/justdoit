<template>
    <div class="space-y-6">
        <div class="bg-backgroundPrimary border border-border rounded-lg p-5">
            <ChallengeProgressTracker />
        </div>
        <div class="flex items-center justify-between">
            <h2 class="text-base md:text-lg font-bold">From Jan 11 - Feb 12</h2>
            <div class="dropdown">
                <label class="btn btn-ghost btn-circle" tabindex="0">
                    <Icon name="ri:more-fill" />
                </label>
                <div class="dropdown-menu w-48 bg-backgroundPrimary dropdown-menu-bottom-left">
                    <a @click="$emit('switch', 4)" class="dropdown-item text-sm flex-row items-center">
                        <Icon name="majesticons:keyboard-line" size="20" class="mr-2" />
                        Log History
                    </a>
                </div>
            </div>
        </div>
        <div class="bg-backgroundPrimary border border-border rounded-lg p-5">
            <ChallengeProgressCalendar />
        </div>
        <ProfileMotivationalCard class="w-full" />
        <button class="btn btn-error w-full h-12">
            <label for="log-progress" class="cursor-pointer">
                <Icon name="ic:baseline-log-in" size="20" class="mr-2" /> Check-In
            </label>
            <UIModal id="log-progress" classes="w-[500px]">
                <div>
                    <h3 class="font-semibold text-lg mb-6">Log Progress</h3>
                    <div class="items-center space-x-3">
                        <input type="number" class="input max-w-20 lg:max-w-24" min="0" value="0" />
                        <span class="font-semibold">Minutes</span>
                    </div>
                    <div class="btn btn-error float-right">Submit</div>
                </div>
            </UIModal>
        </button>
    </div>
</template>

<script setup lang="ts">
defineEmits<{ (e: "switch", to: number): void }>();
</script>
