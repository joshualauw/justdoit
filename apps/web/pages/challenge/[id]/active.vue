<template>
    <div class="w-full lg:w-[900px] xl:w-[1100px] mx-auto">
        <div class="w-full absolute left-0 top-[75px] h-[400px] flex flex-col items-center justify-center">
            <NuxtImg
                src="https://www.washingtonpost.com/resizer/q_Sj-osjhABCigGjPWnL5BfChoo=/arc-anglerfish-washpost-prod-washpost/public/OHBJ2SJ6W5JLRDPQLSOU4233EY.jpg"
                class="absolute top-0 left-0 w-screen h-[400px] bg-center object-cover brightness-50"
            />
            <div class="tabs gap-1 mb-8 absolute left-4 lg:left-8 bottom-0">
                <div
                    v-for="(tab, i) in challengeTabs"
                    @click="activeTab = i"
                    class="cursor-pointer hover:brightness-95 py-1.5 lg:py-2 rounded-lg md:rounded-xl text-gray-50 font-semibold text-base lg:text-lg px-6"
                    :class="{ 'bg-error transition-all duration-150 ease-out': i == activeTab }"
                >
                    {{ tab }}
                </div>
            </div>
        </div>
        <div class="pt-[425px] w-full md:w-[750px] lg:w-[900px] xl:w-[1000px] mx-auto">
            <component :is="tabs[activeTab]"></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { challengeTabs } from "const-variables";
import Leaderboard from "@/components/Challenge/Leaderboard.vue";
import Discussion from "@/components/Challenge/Discussion.vue";
import Progress from "@/components/Challenge/Progress.vue";
import About from "@/components/Challenge/About.vue";

const tabs = [Progress, Discussion, Leaderboard, About];
const activeTab = ref(0);
</script>
