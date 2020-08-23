<template>
    <div class="col-4 mx-auto">
        <div class="card">
            <frame-header>
                <h5 class="card-header">
                    API実行
                </h5>
            </frame-header>
            <div class="card-body">
                {{ content }}
            </div>
            <v-button class="execute-btn" btn-name="実行" theme="primary" @click="getBTC"></v-button>
            <div class="card-footer"></div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VButton from '@atoms/VButton.vue'
import FrameHeader from '@molecules/FrameHeader.vue'

export default Vue.extend({
    name: 'ApiFrame',
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
        getBTC(): void {
            this.$emit('getBTC')
        },
    },
})
</script>

<style scoped>
.execute-btn {
    margin-left: 20px;
}
</style>
