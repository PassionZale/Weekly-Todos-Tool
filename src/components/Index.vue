<template>
    <div class="mdui-row">
    
        <div class="mdui-col-xs-6">
            <div class="mdui-card">
                <!-- 卡片头部，包含头像、标题、副标题 -->
                <div class="mdui-card-header">
                    <img class="mdui-card-header-avatar" src="//v2ex.assets.uxengine.net/avatar/2ff9/8699/85234_large.png?m=1466261382" />
                    <div class="mdui-card-header-title">搞开发的</div>
                    <div class="mdui-card-header-subtitle">选这个~~</div>
                </div>
    
                <!-- 卡片的媒体内容，可以包含图片、视频等媒体内容，以及标题、副标题 -->
                <div class="mdui-card-media">
                    <img src="http://www.reqianduan.com/wp-content/uploads/2016/01/yootheme.com_home_slideshow01.jpg" />
    
                    <!-- 卡片中可以包含一个或多个菜单按钮 -->
                    <div class="mdui-card-menu" mdui-tooltip="{content: '点击选择”开发“周报'}">
                        <button class="mdui-btn mdui-btn-icon mdui-text-color-white">
                            <i class="mdui-icon ion-android-checkmark-circle"></i>
                        </button>
                    </div>
                </div>
    
                <!-- 卡片的标题和副标题 -->
                <div class="mdui-card-primary">
                    <div class="mdui-card-primary-title">“开发”周报示例</div>
                    <div class="mdui-card-primary-subtitle">选择我，会生成下面这样的周报</div>
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
                    <div class="mdui-card-header-title">搞设计的</div>
                    <div class="mdui-card-header-subtitle">选这个~~</div>
                </div>
    
                <!-- 卡片的媒体内容，可以包含图片、视频等媒体内容，以及标题、副标题 -->
                <div class="mdui-card-media">
                    <img src="http://www.reqianduan.com/wp-content/uploads/2016/01/yootheme.com_home_slideshow01.jpg" />
    
                    <!-- 卡片中可以包含一个或多个菜单按钮 -->
                    <div class="mdui-card-menu" mdui-tooltip="{content: '点击选择”设计“周报'}">
                        <button class="mdui-btn mdui-btn-icon mdui-text-color-white">
                            <i class="mdui-icon ion-android-checkmark-circle"></i>
                        </button>
                    </div>
                </div>
    
                <!-- 卡片的标题和副标题 -->
                <div class="mdui-card-primary">
                    <div class="mdui-card-primary-title">“设计”周报示例</div>
                    <div class="mdui-card-primary-subtitle">选择我，会生成下面这样的周报</div>
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