<template>
    <div class="w-full lg:w-[1000px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div class="w-full lg:w-3/5">
            <ChallengeImageUpload />
            <div class="mt-8 w-full">
                <div class="flex flex-col space-y-3 mb-6 w-full">
                    <label class="font-semibold">Challenge Name</label>
                    <input class="input max-w-full" placeholder="Ex. 30-Day No Sugar Challenge" />
                </div>
                <div class="flex flex-col space-y-3 mb-6 w-full">
                    <label class="font-semibold">Challenge Description</label>
                    <textarea
                        class="textarea resize-none max-w-full h-[300px]"
                        placeholder="Ex. Reduce sugary amount for your blood!"
                    />
                </div>
            </div>
        </div>
        <div class="w-full lg:w-2/5">
            <div class="w-full">
                <div class="flex flex-col space-y-3 mb-8 w-full">
                    <label class="font-semibold">Challenge Date</label>
                    <div>
                        <input type="date" class="input max-w-full" />
                        <div class="divider divider-horizontal">-to-</div>
                        <input type="date" class="input max-w-full" />
                    </div>
                </div>
                <div class="flex flex-col space-y-4 mb-8 w-full">
                    <label class="font-semibold">Challenge Rules</label>
                    <div class="space-y-3">
                        <p>Repeat Every:</p>
                        <div v-for="day in shortenedDays" class="inline-flex flex-col items-center mr-5">
                            <input type="checkbox" class="checkbox checkbox-xl" />
                            <span class="text-content2 text-sm mt-1">{{ day }}</span>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <p>How Many Times:</p>
                        <div class="flex items-center space-x-2">
                            <input type="number" class="input w-20" placeholder="0" min="0" />
                            <input type="text" class="input max-w-56" placeholder="Unit Type: Ex. times, steps" />
                            <span class="hidden lg:block">per day</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col space-y-4 mb-8 w-full">
                    <label class="font-semibold">Challenge Publicity</label>
                    <div class="flex justify-start items-center space-x-3 p-2">
                        <input type="radio" class="radio" name="publicity" />
                        <Icon name="ion:globe-outline" size="36" />
                        <div class="flex flex-col">
                            <p class="font-semibold">Public Challenge</p>
                            <p class="text-sm text-content2">
                                Anyone can join this challenge. Your challenge will appear in browse challenges.
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center space-x-3 p-2">
                        <input type="radio" class="radio" name="publicity" />
                        <Icon name="material-symbols:lock" size="40" />
                        <div class="flex flex-col">
                            <p class="font-semibold">Private Challenge</p>
                            <p class="text-sm text-content2">
                                Only people invited by you can join this challenge. Invitation can sent via inbox.
                            </p>
                        </div>
                    </div>
                </div>
                <button class="btn btn-rounded btn-error w-full">Submit Challenge</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { shortenedDays } from "const-variables";

definePageMeta({
    title: "New Challenge",
});
</script>
