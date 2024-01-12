<template>
    <div class="space-y-6">
        <h2 class="text-lg md:text-xl font-bold">30-Days Running Challenge</h2>
        <div class="bg-backgroundPrimary border border-border rounded-lg p-4 flex items-center justify-between">
            <div class="flex items-center">
                <div
                    @click="navigateTo(`/profile/c9kbshv2lm`)"
                    class="avatar avatar-ring avatar-sm md:avatar-md border cursor-pointer mr-3"
                >
                    <NuxtImg src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                </div>
                <div>
                    <p class="font-semibold text-sm md:text-base">Joshua William</p>
                    <p class="text-content2 text-xs md:text-sm">~updated 12 days ago</p>
                </div>
            </div>
            <div class="dropdown">
                <label class="btn btn-ghost btn-circle" tabindex="0">
                    <Icon name="ri:more-fill" />
                </label>
                <div class="dropdown-menu w-48 bg-backgroundPrimary dropdown-menu-top-left">
                    <a class="dropdown-item text-sm">Edit Challenge</a>
                    <a tabindex="-1" class="dropdown-item text-sm">Manage Members</a>
                    <a tabindex="-1" class="dropdown-item text-sm text-red-500 flex-row items-center">
                        <Icon name="mdi:trash" size="16" />
                        <span class="ml-2">Delete Challenge</span>
                    </a>
                </div>
            </div>
        </div>
        <p class="text-content2 text-sm md:text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat ex sit aspernatur, magnam
            voluptatem quod minima, consequuntur est itaque amet vitae cupiditate! Reprehenderit obcaecati quia at?
            Vitae, impedit temporibus. Velit quam culpa esse nisi adipisci! Excepturi sit accusamus fugiat reiciendis
            harum, veritatis consectetur consequatur totam saepe incidunt quia nemo optio iusto minima! Expedita odio
            cumque explicabo corporis quidem numquam?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto odio eius repellat iste nulla
            asperiores natus voluptatum vero dolorem, delectus quos ipsum sequi molestiae. Qui eum maxime cupiditate at
            explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia ratione quam ex unde
            sequi autem facilis asperiores praesentium.
        </p>
        <span class="float-end text-sm text-sky-700 hover:underline font-semibold cursor-pointer"> Read More </span>
        <div class="w-full">
            <h2 class="text-lg md:text-xl font-bold mb-6">Challenge Rules</h2>
            <div class="space-y-2 mb-8">
                <div v-for="rule in challengeRules" class="flex justify-start items-center space-x-3 p-2">
                    <Icon :name="rule.icon" :size="rule.size" />
                    <div class="flex flex-col">
                        <p class="font-semibold text-base md:text-lg">{{ rule.title }}</p>
                        <p class="text-content2 text-sm md:text-base">{{ rule.content }}</p>
                    </div>
                </div>
            </div>
            <ChallengeCountdown />
            <p class="text-content2 mt-6 text-lg font-semibold mb-2 text-center">Share with your friends</p>
            <ChallengeShare />
        </div>
    </div>
</template>

<script setup lang="ts">
const challengeRules = [
    {
        icon: "fe:target",
        size: "36",
        title: "Target",
        content: "20 minutes everyday",
    },
    {
        icon: "ic:baseline-loop",
        size: "36",
        title: "Repeat On",
        content: "daily",
    },
    {
        icon: "mingcute:calendar-fill",
        size: "36",
        title: "Duration",
        content: "11 January 2024 - 12 February 2024",
    },
];
</script>
