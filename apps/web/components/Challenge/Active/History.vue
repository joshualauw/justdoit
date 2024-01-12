<template>
    <div class="space-y-4">
        <div v-for="hist in history">
            <p class="text-content2 mb-3 text-sm uppercase">{{ hist.day }}</p>
            <div
                v-for="log in hist.logs"
                class="bg-backgroundSecondary rounded-lg p-4 flex items-center justify-between mb-2 group"
            >
                <div class="flex items-center space-x-3">
                    <Icon name="majesticons:keyboard-line" size="20" class="mr-2" />
                    {{ log.value }} mins
                </div>
                <div class="flex items-center space-x-3">
                    <span class="text-content3 text-sm">{{ log.time }}</span>
                    <div class="hidden group-hover:block text-sm cursor-pointer text-secondary">
                        <label for="edit-log" class="cursor-pointer"> edit </label>
                        <UIModal id="edit-log" classes="w-[500px]">
                            <div>
                                <h3 class="font-semibold text-lg mb-6">Edit Log Progress</h3>
                                <div class="items-center space-x-3">
                                    <input type="number" class="input max-w-20 lg:max-w-24" min="0" value="0" />
                                    <span class="font-semibold">Minutes</span>
                                </div>
                                <div class="flex items-center justify-end space-x-2">
                                    <div class="btn btn-error">Submit</div>
                                    <div class="btn btn-outline-error">
                                        <Icon name="iconamoon:trash-fill" size="20" class="mr-2" />
                                        Delete
                                    </div>
                                </div>
                            </div>
                        </UIModal>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const history = [
    {
        day: "today",
        logs: [
            {
                value: 20,
                time: "20:40",
            },
        ],
    },
    {
        day: "yesterday",
        logs: [
            {
                value: 12,
                time: "18:14",
            },
            {
                value: 16,
                time: "21:24",
            },
        ],
    },
    {
        day: "jan 10, 2024",
        logs: [
            {
                value: 12,
                time: "18:14",
            },
            {
                value: 16,
                time: "21:24",
            },
        ],
    },
];
</script>
