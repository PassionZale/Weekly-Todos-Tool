<template>
    <div class="mdui-row">
        <div class="mdui-col-xs-8">
            <div class="mdui-row">
                <div class="mdui-col-xs-3">
                    <ul class="mdui-list mdui-list-dense">
                        <li class="mdui-subheader-inset">本周工作内容</li>
                        <li class="mdui-list-item mdui-ripple" v-for="item in template" @click="set_current_todos_index($index)" track-by="$index" :class="current_todos_index == $index ? 'mdui-list-item-active' : '' ">
                            <i class="mdui-list-item-avatar mdui-icon material-icons">&#xe85d;</i>
                            <div class="mdui-list-item-content">{{item.title}}</div>
                        </li>
                        <li class="mdui-subheader-inset">下周工作计划</li>
                        <li class="mdui-list-item mdui-ripple" @click="fill_in_plan">
                            <i class="mdui-list-item-avatar mdui-icon material-icons">&#xe85d;</i>
                            <div class="mdui-list-item-content">填写计划</div>
                        </li>
                    </ul>
                </div>
                <div class="mdui-col-xs-9">
                    <div v-show="plan_to_visible">
                        <div class="mdui-textfield mdui-textfield-floating-label">
                            <label class="mdui-textfield-label">Enter The Plan Todos</label>
                            <input id="plan_input" class="mdui-textfield-input" type="text" v-model="plan_input" @keyup.enter="enter_plan" />
                        </div>
                        <ul class="mdui-list">
                            <li class="mdui-list-item mdui-ripple" v-for="item in plans" track-by="$index">
                                <div class="mdui-list-item-content">{{item}}</div>
                                <i class="mdui-list-item-icon mdui-icon material-icons" @click="remove_plans(item)">&#xe872;</i>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <div class="mdui-textfield mdui-textfield-floating-label">
                            <label class="mdui-textfield-label">Enter The Weekly Todos</label>
                            <input id="manual_input" class="mdui-textfield-input" type="text" v-model="manual_input" @keyup.enter="enter_manual" />
                        </div>
                        <ul class="mdui-list">
                            <li class="mdui-list-item mdui-ripple" v-for="item in current_todos_data" track-by="$index">
                                <div class="mdui-list-item-content">{{item}}</div>
                                <i class="mdui-list-item-icon mdui-icon material-icons" @click="remove_todos(item)">&#xe872;</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="mdui-col-xs-4 mdui-hoverable mdui-p-a-3">
            <div class="mdui-typo">
                <h3>本周工作内容</h3>
                <div v-for="item in template" track-by="$index">
                    <h4>{{item.title}}</h4>
                    <div v-show="item.todos.length">
                        <p v-for="todo in item.todos" track-by="$index">
                            <!-- {{todo | serialize_index}} -->
                            {{($index + 1) + '. ' + todo}}
                        </p>
                    </div>
                    <p v-else>暂无</p>
                </div>
            </div>
            <div class="mdui-typo">
                <h3>下周工作计划</h3>
                <div v-show="plans.length">
                    <p v-for="item in plans" track-by="$index">
                        {{($index + 1) + '. ' + item}}
                    </p>
                </div>
                <p v-else>暂无</p>
            </div>
        </div>
    </div>
</template>

<script>
import { MONKEY_TODOS } from '../templates/monkey.js'
export default {
    data() {
        return {
            template: MONKEY_TODOS,
            manual_input: '',
            plan_input: '',
            current_todos_index: 0,
            current_todos_data: [],
            plans: [],
            plan_to_visible: false
        }
    },
    computed: {
        current_todos_data: function() {
            if (this.current_todos_index > -1) {
                return this.template[this.current_todos_index].todos;
            } else {
                return [];
            }
        }
    },
    methods: {
        fill_in_plan() {
            this.$set('manual_input', '');
            this.$set('current_todos_index', -1);
            this.$set('plan_to_visible', true);
            $('#plan_input').focus();
        },
        set_current_todos_index(index) {
            this.$set('plan_input', '');
            this.$set('plan_to_visible', false);
            this.$set('current_todos_index', index);
            $('#manual_input').focus();
        },
        enter_plan() {
            this.plans.push(this.plan_input);
            this.$set('plan_input', '');
        },
        enter_manual() {
            this.template[this.current_todos_index].todos.push(this.manual_input);
            this.$set('manual_input', '');
        },
        remove_todos(item) {
            this.template[this.current_todos_index].todos.$remove(item);
        },
        remove_plans(item) {
            this.plans.$remove(item);
        }
    }
}
</script>