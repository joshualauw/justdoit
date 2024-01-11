<template>
    <div
        class="py-4 px-5 md:px-8 items-center justify-between fixed top-0 left-0 flex w-full z-50 transition-all ease-out duration-300 border-border"
        :class="{ 'border-b-2 shadow-md py-5 bg-pink-1': addBorder }"
    >
        <div class="flex items-center">
            <h1 class="text-2xl md:text-3xl font-extrabold">
                <NuxtLink to="/challenge">JUST<span class="text-error">DO</span>IT!</NuxtLink>
            </h1>
            <p v-if="$route.meta.title" class="font-bold hidden lg:block text-lg md:text-xl ml-8">
                {{ $route.meta.title }}
            </p>
        </div>
        <div class="flex items-center space-x-3 lg:space-x-7">
            <UIThemeToogle />
            <NuxtLink v-if="loggedUser" to="/challenge/create" class="text-base md:text-lg hidden md:block">
                <button class="btn btn-error">
                    <Icon name="ic:baseline-plus" size="20" class="mr-1" />
                    Create a Challenge
                </button>
            </NuxtLink>
            <button v-if="!loggedUser" class="btn btn-outline-error">
                <label @click="isLogin = true" for="login" class="cursor-pointer">Sign In</label>
                <UIModal id="login" classes="w-[500px]">
                    <AuthLogin v-if="isLogin" @switch="isLogin = !isLogin" />
                    <AuthRegister v-else @switch="isLogin = !isLogin" />
                </UIModal>
            </button>
            <div v-else class="dropdown">
                <div class="avatar avatar-ring cursor-pointer hover:border-2 border-border" tabindex="0">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                </div>
                <div class="dropdown-menu w-48 bg-backgroundPrimary">
                    <a @click="navigateTo('/profile/c9kbshv2lm')" class="dropdown-item text-sm">Profile</a>
                    <a @click="navigateTo('/challenge/my')" tabindex="-1" class="dropdown-item text-sm">
                        My Challenges
                    </a>
                    <a tabindex="-1" class="dropdown-item text-sm">Subscriptions</a>
                    <a @click="navigateTo('/challenge/create')" tabindex="-1" class="dropdown-item text-sm">
                        + Create Challenge
                    </a>
                    <div class="dropdown-divider" role="separator"></div>
                    <a
                        @click="loggedUser = false"
                        tabindex="-1"
                        class="dropdown-item text-sm flex-row items-center text-red-500"
                    >
                        <Icon name="mingcute:exit-fill" size="16" class="mr-1.5" /> Logout
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const loggedUser = useAuth();
const isLogin = ref(true);

const addBorder = ref(false);
if (process.client) {
    document.addEventListener("scroll", (e) => {
        addBorder.value = window.scrollY >= 75;
    });
}
</script>
