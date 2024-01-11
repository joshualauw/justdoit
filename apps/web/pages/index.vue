<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
        <h1 class="text-5xl md:text-6xl font-extrabold">JUST<span class="text-error">DO</span>IT!</h1>
        <p class="text-lg md:text-xl text-content2 mt-2">Challenge yourself to the new limit</p>
        <button @click="navigateTo('/challenge')" class="btn btn-secondary btn-md md:btn-lg mt-5 md:mt-8">
            Get Started 🚀
        </button>
        <div class="mt-20 hidden lg:flex w-[900px] xl:w-[1000px] mx-auto h-[200px]">
            <div
                v-for="(card, i) in landingCards"
                :class="{ 'self-end': i % 2 == 0 }"
                class="flex flex-col cursor-pointer text-center rounded-lg p-2 hover:scale-105"
            >
                <Icon :name="card.icon" size="42" class="self-center" />
                <p class="font-semibold mt-3 text-lg">{{ card.text }}</p>
                <p class="text-content2 mt-2 text-sm">{{ card.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { landingCards } from "const-variables";

definePageMeta({
    layout: "landing",
});
</script>
