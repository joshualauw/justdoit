<template>
    <ClientOnly>
        <Teleport to="#__nuxt">
            <input class="modal-state hidden" :id="id" v-model="isOpen" type="checkbox" />
            <div class="modal z-50">
                <label class="modal-overlay" :for="id"></label>
                <div
                    class="modal-content max-w-[600px] lg:max-w-[700px] max-h-[800px] px-5 md:px-8 py-8"
                    :class="classes"
                >
                    <label :for="id" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <slot :setOpen="setOpen"></slot>
                </div>
            </div>
        </Teleport>
    </ClientOnly>
</template>

<script setup lang="ts">
defineProps<{ id: string; classes?: string }>();
const emits = defineEmits(["visibleChanged"]);

const isOpen = ref(false);

function setOpen(val: boolean) {
    isOpen.value = val;
    emits("visibleChanged", val);
}
</script>
