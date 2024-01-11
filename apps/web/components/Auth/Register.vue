<template>
    <div class="w-full text-center">
        <h3 class="text-xl md:text-2xl font-semibold mb-4">Register</h3>
        <div class="space-y-3">
            <input type="text" class="input input-rounded max-w-full" placeholder="Your email address..." />
            <input type="password" class="input input-rounded max-w-full" placeholder="Your password..." />
            <input type="password" class="input input-rounded max-w-full" placeholder="Confirm Password..." />
        </div>
        <button class="btn btn-rounded btn-error w-full mt-4">Register</button>
        <div class="divider divider-horizontal">-or-</div>
        <div class="flex items-center justify-center space-x-2 mt-2">
            <button class="btn btn-rounded px-4 border-2 border-border bg-backgroundPrimary w-full">
                <Icon name="devicon:google" size="20" />
                <span class="text-sm ml-2">Google</span>
            </button>
        </div>
        <p class="text-content2 text-sm mt-6">
            Already have an account?
            <span @click="$emit('switch')">
                <a class="hover:underline text-primary cursor-pointer">login now</a>
            </span>
        </p>
    </div>
</template>

<script setup lang="ts">
defineEmits<{ (e: "switch"): void }>();
</script>
