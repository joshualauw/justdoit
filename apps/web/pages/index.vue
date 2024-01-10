<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
        <h1 class="text-5xl md:text-6xl font-extrabold">JUST<span class="text-error">DO</span>IT!</h1>
        <p class="text-lg md:text-xl text-content2 mt-2">Challenge yourself to the new limit</p>
        <button @click="navigateTo('/challenge')" class="btn btn-secondary btn-md md:btn-lg mt-5 md:mt-8">
            Get Started 🚀
        </button>
        <div class="mt-16 md:grid grid-cols-2 xl:grid-cols-3 gap-8 w-1/2 hidden">
            <div
                v-for="card in landingCards"
                class="flex flex-col cursor-pointer text-center p-4 rounded-lg hover:scale-105"
            >
                <Icon :name="card.icon" size="56" class="self-center" />
                <p class="font-semibold mt-3 text-xl">{{ card.text }}</p>
                <p class="text-content2 mt-2">{{ card.description }}</p>
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
