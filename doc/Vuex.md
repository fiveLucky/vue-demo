## Vuex

[官方文档](https://vuex.vuejs.org/zh/guide/)

根据官方文档介绍的使用方法，对比 redux 

Vuex | redux | 共同点 | 不同点 | 描述
-   | -  | - | - | -
store | store | 都只有一个store | redux 不允许直接修改原始state，vuex 直接在state上修改 | - 
mutation | reducer | 修改数据的方法集合，都以 type 映射 方法，都需要指定方法触发数据更新 | - | -
commit | dispatch | 都是修改数据的触发操作 | - | - |
action | action | 包含触发方法的函数，冗杂一些异步请求、数据操作等逻辑
getter | - | - | - | 定义一些可复用的数据读取操作，redux 可定义一些action来实现复用
module | - | - | - | 支持一个 stateTree 管理多个局部 store ，很强大