<template>
    <div class="w-full mx-auto space-y-6">
        <div
            v-for="i in 8"
            class="w-full py-4 px-8 rounded-full flex justify-between items-center border-[1.5px] border-warning"
        >
            <div class="flex items-center space-x-3 md:space-x-4">
                <p class="text-lg md:text-xl font-bold">{{ i }}.</p>
                <div class="avatar">
                    <NuxtImg src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                </div>
                <div>
                    <p class="text-base md:text-lg font-semibold">Anil Cakmak</p>
                    <p class="text-content2 text-sm md:text-base">{{ 100 - i * 2 }} Miles</p>
                </div>
            </div>
            <div class="flex items-center space-x-1.5">
                <Icon name="solar:fire-bold" class="text-red-500 w-5 h-5 md:w-8 md:h-8" />
                <span class="text-lg md:text-xl font-semibold">{{ 9 - i }}</span>
            </div>
        </div>
    </div>
</template>
