<template>
    <div
        class="rounded-lg bg-backgroundSecondary border border-border h-[250px] relative group flex flex-col items-center justify-center"
    >
        <div class="absolute top-4 right-4 hidden group-hover:flex items-center space-x-1">
            <button class="btn btn-primary btn-circle">
                <Icon name="mingcute:edit-line" size="24" />
            </button>
            <button class="btn bg-red-500 btn-circle text-white">
                <Icon name="material-symbols:delete" size="24" />
            </button>
        </div>
        <Icon name="humbleicons:upload" size="72" class="text-content3" />
        <p class="text-content3">Upload a new image</p>
    </div>
</template>
