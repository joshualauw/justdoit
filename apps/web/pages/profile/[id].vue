<template>
    <div>
        <div class="w-full absolute left-0 top-[75px] h-[350px] flex flex-col items-center justify-center">
            <NuxtImg
                src="https://static.vecteezy.com/system/resources/previews/024/209/350/large_2x/aesthetic-mountain-synthwave-retrowave-wallpaper-with-a-cool-and-vibrant-neon-design-ai-generated-photo.jpg"
                class="absolute top-0 left-0 w-screen h-[350px] bg-center object-cover"
            />
            <div class="z-40 flex flex-col items-center justify-center">
                <div class="w-24 h-24 rounded-full border-2 border-border">
                    <NuxtImg
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        alt="avatar"
                        class="w-full h-full rounded-full"
                    />
                </div>
                <p class="text-gray-200 mt-2 text-xl text-center font-bold tracking-tight">Joshua William</p>
                <p class="text-gray-300 mt-0.5">@joshualauw</p>
            </div>
        </div>
        <div class="pt-[360px] w-full md:w-[750px] lg:w-[1000px] xl:w-[1100px] mx-auto">
            <h1 class="text-xl lg:text-2xl font-bold mb-8">User Stats</h1>
            <div class="flex flex-col lg:flex-row gap-6">
                <div class="w-full lg:w-[25%] space-y-5">
                    <div
                        v-for="stat in userStats"
                        class="flex flex-col items-center justify-center border-2 border-border rounded-xl p-4"
                    >
                        <button class="btn btn-circle w-14 h-14 btn-no-animation mb-2" :class="stat.buttonClass">
                            <Icon :name="stat.icon" size="28" :class="stat.class" />
                        </button>
                        <h3>{{ stat.name }}</h3>
                        <p class="text-2xl font-bold">{{ stat.content }}</p>
                    </div>
                </div>
                <ProfileMotivationalCard />
                <div class="w-full lg:w-[45%] border-2 border-border rounded-xl p-6">
                    <h3 class="mb-6">Challenge History</h3>
                    <div class="space-y-6">
                        <div
                            v-for="i in 4"
                            class="rounded-full border border-border py-2 px-4 max-h-20 relative flex items-center cursor-pointer hover:scale-[1.01]"
                        >
                            <NuxtImg
                                src="https://www.washingtonpost.com/resizer/q_Sj-osjhABCigGjPWnL5BfChoo=/arc-anglerfish-washpost-prod-washpost/public/OHBJ2SJ6W5JLRDPQLSOU4233EY.jpg"
                                class="absolute top-0 left-0 w-20 lg:w-32 h-full bg-center object-cover rounded-full"
                            />
                            <div class="ml-[4.5rem] lg:ml-[7.5rem]">
                                <p class="font-semibold text-sm lg:text-base">30-Day Running Challenge</p>
                                <p class="text-content2 text-xs lg:text-sm">11 January 2024 - 12 February 2024</p>
                            </div>
                        </div>
                        <a class="link link-underline-hover text-sm text-primary float-right">View More >></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-[750px] lg:w-[1000px] xl:w-[1100px] mx-auto">
            <h1 class="text-xl lg:text-2xl font-bold my-8">Published Challenges</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <ChallengeCard v-for="i in 8" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Joshualauw`s Profile",
});

const userStats = [
    {
        icon: "mdi:arm-flex",
        name: "Challenges Complete",
        content: "15",
        class: "text-blue-500",
        buttonClass: "btn-solid-primary",
    },
    {
        icon: "solar:fire-bold",
        name: "Longest Streak",
        content: "8",
        class: "text-red-500",
        buttonClass: "btn-solid-error",
    },
    {
        icon: "zondicons:badge",
        name: "Badges Acquired",
        content: "5",
        class: "text-amber-500",
        buttonClass: "btn-solid-warning",
    },
];
</script>
