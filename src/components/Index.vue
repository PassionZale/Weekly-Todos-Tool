<template>
    <div class="mdui-row">
    
        <div class="mdui-col-xs-6">
            <div class="mdui-card">
                <!-- 卡片头部，包含头像、标题、副标题 -->
                <div class="mdui-card-header">
                    <img class="mdui-card-header-avatar" src="//v2ex.assets.uxengine.net/avatar/2ff9/8699/85234_large.png?m=1466261382" />
                    <div class="mdui-card-header-title">程序猿</div>
                    <div class="mdui-card-header-subtitle">redirect to program monkey router</div>
                </div>
    
                <!-- 卡片的媒体内容，可以包含图片、视频等媒体内容，以及标题、副标题 -->
                <div class="mdui-card-media">
                    <img src="http://wx2.sinaimg.cn/mw690/006OyqbNly1fg60cosx5aj30qo0bodji.jpg" />
    
                    <!-- 卡片中可以包含一个或多个菜单按钮 -->
                    <div class="mdui-card-menu" v-link="{name:'program'}">
                        <button class="mdui-btn mdui-btn-icon mdui-text-color-white">
                            <i class="mdui-icon ion-android-checkmark-circle"></i>
                        </button>
                    </div>
    
                    <div class="mdui-card-media-covered">
                        <!-- 卡片的标题和副标题 -->
                        <div class="mdui-card-primary">
                            <div class="mdui-card-primary-title">“程序猿”周报示例</div>
                            <div class="mdui-card-primary-subtitle">choose me & happy coding.</div>
                        </div>
                    </div>
                </div>
    
                <!-- 卡片的内容 -->
                <div class="mdui-card-content">
                    <ul class="mdui-list">
                        <li class="mdui-subheader">完成开发</li>
                        <li class="mdui-list-item mdui-ripple">1、....</li>
                        <li class="mdui-subheader">测试通过</li>
                        <li class="mdui-list-item mdui-ripple">1、....</li>
                        <li class="mdui-subheader">部署上线</li>
                        <li class="mdui-list-item mdui-ripple">1、....</li>
    
                    </ul>
                </div>
    
            </div>
        </div>
    
        <div class="mdui-col-xs-6">
            <div class="mdui-card">
                <!-- 卡片头部，包含头像、标题、副标题 -->
                <div class="mdui-card-header">
                    <img class="mdui-card-header-avatar" src="//v2ex.assets.uxengine.net/avatar/9b45/2e3d/58074_large.png?m=1394808808" />
                    <div class="mdui-card-header-title">设计狮</div>
                    <div class="mdui-card-header-subtitle">redirect to design lion router</div>
                </div>
    
                <!-- 卡片的媒体内容，可以包含图片、视频等媒体内容，以及标题、副标题 -->
                <div class="mdui-card-media">
                    <img src="http://wx1.sinaimg.cn/mw690/006OyqbNly1fg5zsk6p9aj30qo0bon0x.jpg" />
    
                    <!-- 卡片中可以包含一个或多个菜单按钮 -->
                    <div class="mdui-card-menu" v-link="{name:'designer'}">
                        <button class="mdui-btn mdui-btn-icon mdui-text-color-white">
                            <i class="mdui-icon ion-android-checkmark-circle"></i>
                        </button>
                    </div>
    
                    <!-- 卡片的标题和副标题 -->
                    <div class="mdui-card-media-covered">
                        <div class="mdui-card-primary">
                            <div class="mdui-card-primary-title">“设计狮”周报示例</div>
                            <div class="mdui-card-primary-subtitle">choose me & happy designing.</div>
                        </div>
                    </div>
    
                </div>
    
                <!-- 卡片的内容 -->
                <div class="mdui-card-content">
                    <ul class="mdui-list">
                        <li class="mdui-subheader">制定方案</li>
                        <li class="mdui-list-item mdui-ripple">1、....</li>
                        <li class="mdui-subheader">设计初稿</li>
                        <li class="mdui-list-item mdui-ripple">1、....</li>
                        <li class="mdui-subheader">协调调整</li>
                        <li class="mdui-list-item mdui-ripple">1、....</li>
                    </ul>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '1'
        }
    }
}
</script>