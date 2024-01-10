<template>
    <div @click="switchTheme" class="btn btn-circle btn-ghost">
        <Icon v-if="theme == 'light'" name="material-symbols:light-mode" size="24" />
        <Icon v-else name="material-symbols:dark-mode" size="24" />
    </div>
</template>

<script setup lang="ts">
const theme = useTheme();

function switchTheme() {
    if (theme.value == "light") {
        theme.value = "dark";
    } else {
        theme.value = "light";
    }
}
</script>
