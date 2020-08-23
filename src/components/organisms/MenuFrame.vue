<template>
    <div class="col-4 mx-auto">
        <div class="card">
            <frame-header>
                <h5 class="card-header">
                    MENU
                </h5>
            </frame-header>
            <div class="card-body">
                {{ content }}
            </div>
            <v-button class="menu-btn" btn-name="menu" @click="rooter"></v-button>
            <div class="card-footer"></div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VButton from '@atoms/VButton.vue'
import FrameHeader from '@molecules/FrameHeader.vue'

export default Vue.extend({
    name: 'MenuFrame',
    components: {
        VButton,
        FrameHeader,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    methods: {
        rooter(): void {
            this.$router.push('/ShowBtcPage')
        },
    },
})
</script>

<style>
.menu-btn {
    margin-left: 20px;
}
</style>
