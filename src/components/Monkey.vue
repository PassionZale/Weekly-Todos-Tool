<template>
    <div class="mdui-row">
        <div class="mdui-col-xs-6">
            <div class="mdui-panel mdui-panel-popout" mdui-panel>
                <div class="mdui-panel-item" v-for="item in template">
                    <div class="mdui-panel-item-header">{{item.title}}</div>
                    <div class="mdui-panel-item-body">
                        <p>First content</p>
                        <p>First content</p>
                        <p>First content</p>
                        <p>First content</p>
                        <p>First content</p>
                        <p>First content</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mdui-col-xs-6">
            right
        </div>
    </div>
</template>

<script>
import { MONKEY_TODOS } from '../templates/monkey.js'
export default {
    data() {
        return {
            template: MONKEY_TODOS,
            render: []
        }
    },
    created() {

    },
    methods: {

    }
}
</script>