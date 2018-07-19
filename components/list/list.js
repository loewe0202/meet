Component({
    externalClasses: ['my-class'], // 组件接受的外部样式类

    /**
     * 组件间关系定义
     */
    relations: {

    },

    /**
     * 组件选项
     */
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },

    /**
     * 组件的对外属性，是属性名到属性设置的映射表
     */
    properties: {
        innerText: { // 这里定义了innerText属性，属性值可以在组件使用时指定
            type: String,
            value: 'default value',
        },
        propA: {
            type: String,
            value: 'default value',
        },
        propB: {
            type: Object,
            value: {},
            observer: function(newVal, oldVal, changedPath) {
                // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
                // 通常 newVal 就是新设置的数据， oldVal 是旧数据
                // console.log(newVal, oldVal, changedPath)
                // console.log(this.data)
            }
        }
    },

    /**
     * 组件的内部数据
     */
    data: {

    },

    /**
     * 组件的方法
     * 生命周期函数无法在组件方法中通过 this 访问到
     */
    methods: {
        _updateTime: function(e) {
            console.log(e); // oldValue
            this.setData({ // newValue
                propB: {
                    author: 'loewe',
                    date: new Date().toLocaleString()
                },
                innerText: '小程序测试'
            })
            this.replaceDataOnPath(['A', 0, 'B'], 'myPrivateData') // 这里将 data.A[0].B 设为 'myPrivateData'
            this.applyDataUpdates();
            console.log(this.data)
        },
        _onTap: function(e) {
            var myEventDetail = {
                name: e.currentTarget.dataset.info
            } // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            // this.triggerEvent('myevent', myEventDetail, myEventOption);
            // this.triggerEvent('customevent', {}) // 只会触发 pageEventListener2
            // this.triggerEvent('customevent', {}, { bubbles: true }) // 会依次触发 pageEventListener2 、pageEventListener1
            this.triggerEvent('customevent', {}, { bubbles: true, composed: true }) // 会依次触发 pageEventListener2 、 smallListFn 、 pageEventListener1
        }
    },

    /**
     * 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
     */
    created() {

    },

    /**
     * 组件生命周期函数，在组件实例进入页面节点树时执行
     */
    attached() {

    },

    /**
     * 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
     */
    ready() {

    },

    /**
     * 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
     */
    moved() {

    },

    /**
     * 组件生命周期函数，在组件实例被从页面节点树移除时执行
     */
    detached() {

    }
})