<template>
    <div
        class="rounded-xl border-2 border-border hover:scale-[1.02] hover:rotate-1 hover:brightness-90 cursor-pointer shadow-md"
    >
        <NuxtLink to="/challenge/as92kmv9asd9" class="relative">
            <div class="relative">
                <NuxtImg
                    src="https://www.washingtonpost.com/resizer/q_Sj-osjhABCigGjPWnL5BfChoo=/arc-anglerfish-washpost-prod-washpost/public/OHBJ2SJ6W5JLRDPQLSOU4233EY.jpg"
                    class="rounded-xl rounded-b-none object-cover bg-center"
                />
                <div v-show="Math.random() > 0.5" class="absolute bottom-4 left-4 badge badge-sm badge-secondary">
                    21d 14h remaining
                </div>
            </div>
            <button
                v-show="Math.random() > 0.5"
                class="absolute top-4 right-4 btn btn-solid-primary btn-circle w-9 h-9"
            >
                <Icon name="material-symbols:check" size="28" />
            </button>
            <div class="p-6">
                <p class="text-lg font-bold mb-1.5">30-Days Running Challenge</p>
                <p class="text-content2 text-sm flex items-center mb-2">
                    <Icon name="material-symbols:date-range" size="16" class="mr-1.5" />
                    10 Jan - 12 Feb
                </p>
                <div class="avatar-group flex items-center mt-3">
                    <div v-for="i in 4" class="avatar avatar-sm">
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                    </div>
                    <span class="text-content3 text-sm ml-2">15 joined</span>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
