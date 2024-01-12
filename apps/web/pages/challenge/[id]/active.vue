<template>
    <div class="w-full lg:w-[900px] xl:w-[1100px] mx-auto">
        <div class="w-full absolute left-0 top-[75px] h-[350px] flex flex-col items-center justify-center">
            <NuxtImg
                src="https://www.washingtonpost.com/resizer/q_Sj-osjhABCigGjPWnL5BfChoo=/arc-anglerfish-washpost-prod-washpost/public/OHBJ2SJ6W5JLRDPQLSOU4233EY.jpg"
                class="absolute top-0 left-0 w-screen h-[350px] bg-center object-cover brightness-50"
            />
            <div class="tabs gap-2 mb-8 absolute left-4 lg:left-8 bottom-0">
                <div
                    v-for="(tab, i) in challengeTabs"
                    v-show="tab.show"
                    @click="activeTab = i"
                    class="cursor-pointer hover:brightness-95 py-1.5 lg:py-2 rounded-lg md:rounded-xl text-gray-50 font-semibold text-base lg:text-lg px-6"
                    :class="{ 'bg-error transition-all duration-150 ease-out': i == activeTab }"
                >
                    {{ tab.name }}
                </div>
            </div>
        </div>
        <div class="pt-[375px] w-full md:w-[750px] lg:w-[850px] mx-auto">
            <div>
                <h2 class="text-xl md:text-2xl font-bold mb-6 text-error">{{ challengeTabs[activeTab].name }}</h2>
                <div class="divider divider-horizontal"></div>
                <component @switch="handleSwitch" :is="tabs[activeTab]"></component>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { challengeTabs } from "const-variables";
import Leaderboard from "@/components/Challenge/Active/Leaderboard.vue";
import Discussion from "@/components/Challenge/Active/Discussion.vue";
import Progress from "@/components/Challenge/Active/Progress.vue";
import About from "@/components/Challenge/Active/About.vue";
import History from "@/components/Challenge/Active/History.vue";

const tabs = [Progress, Discussion, Leaderboard, About, History];
const activeTab = ref(0);

function handleSwitch(...args: unknown[]) {
    activeTab.value = args[0] as number;
}
</script>
