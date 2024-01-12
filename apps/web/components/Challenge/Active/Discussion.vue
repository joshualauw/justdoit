<template>
    <div class="w-full">
        <div class="space-y-6 flex flex-col">
            <div
                v-for="chat in chats"
                class="flex items-center p-2 lg:p-4 rounded-lg bg-backgroundSecondary w-fit relative"
                :class="{ 'flex-row-reverse self-end': chat }"
            >
                <div class="avatar avatar-sm lg:avatar-md">
                    <NuxtImg src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                </div>
                <div class="mx-3" :class="chat ? 'text-right' : 'text-left'">
                    <p class="font-semibold">Joshua William</p>
                    <p class="text-sm text-content2">Hello Guys Are you still pumped up?</p>
                </div>
                <p class="absolute top-2 w-fit text-xs text-content3" :class="chat ? 'left-2' : 'right-2'">11.06</p>
            </div>
        </div>
        <div class="flex items-center space-x-4 mt-8">
            <div class="rounded-lg bg-backgroundSecondary py-2 px-4 w-full">
                <input
                    type="text"
                    class="w-full h-full outline-none bg-backgroundSecondary"
                    placeholder="Lets keep pumping up!"
                />
            </div>
            <button class="btn btn-secondary">Send</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const chats: boolean[] = [];
for (let i = 0; i < 18; i++) {
    chats.push(Math.random() <= 0.5);
}
</script>
