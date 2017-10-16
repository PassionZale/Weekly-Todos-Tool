<template>
    <div class="mdui-appbar">
        <div class="mdui-toolbar mdui-color-theme">
            <a v-link="{name: 'index'}" class="mdui-typo-headline" style="font-weight: 300;font-style: italic;">Weekly Todos Tool</a>
            <div class="mdui-toolbar-spacer"></div>
            <!-- <a @click.prevent="changeMode" mdui-tooltip="{content: '夜间模式'}" class="mdui-btn mdui-btn-icon">
                            <i class="mdui-icon ion-eye-disabled"></i>
                        </a> -->
            <a href="https://github.com/PassionZale/Weekly-Todos-Tool" mdui-tooltip="{content: '给我点赞'}" target="_blank" class="mdui-btn mdui-btn-icon">
                <i class="mdui-icon ion-social-github"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dark_theme_to_visible: false
        }
    },
    methods: {
        changeMode() {
            this.dark_theme_to_visible = !this.dark_theme_to_visible;
            if (this.dark_theme_to_visible) {
                $('body').addClass('mdui-theme-layout-dark');
            } else {
                $('body').removeClass('mdui-theme-layout-dark');
            }
        }
    }
}
</script>