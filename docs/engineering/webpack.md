## 构建层面
  * 处理资源,代码转换
    * 处理文字图标、图片的导入
    * sass，less转换成css
    * vue/react转换
    * 处理非js的导入
      * webpack->loader
  * 文件优化
    * 压缩代码
    * 压缩图片，图片转换成base64
  * 代码转换

  * 代码分割
     * 懒加载，异步加载
     * 提取公共代码
  * 模块合并
     * 合并多个模块的文件
  * 自动刷新
     * 监听文件变化，自动重新构建并刷新浏览器
  * 代码校验
    * eslint、pretter等检验代码是符合规范 
  * 自动发布
    * 更新代码后自动构建（基本不会更新代码后就构建）

## webpack
  * 基础
    * entry 入口
      * 数组和字符串为单入口
      * 对象为多入口，打包多个
    * context 打包资源的根路径，默认当前文件夹
    * output
      * filename文件名，推荐使用hash值
      * chunkFilename，运行时额外生成的chunk名字（代码分割生成）
      * path：打包的输出路径
      * pablicPath：加载异步资源的地址
      * crossOriginLoading：配置异步加载时标签的crossorigin值
      * library导出库名称
      * libraryTarget导出的方式
  * 模块（module）使用loader处理
    * rules：配置loader规则
      * test 文件命中的正则
      * include：检测的文件夹
      * exclude：排除的文件夹
      * use：使用的loader，从后往前执行
        * 使用对象配置loader的选项
        * enforce 调整执行的顺序
      * noParse： 忽略解析
        * 注意命中的文件不能包含模块化语句
      * parser：细节配置可解析的模块语法
  * resolve 寻找模块的规则
    * alias 别名
    * mainFields： 当第三方有多种环境适配的产出，配置采用的优先级
    * extensions：导入文件路径没有后缀时的查找顺序
      * 个人不太建议匹配过多，增加不必要的查询损耗
    * enforceExtension: 导入必须带后缀
    * enforceModuleExtension：导入语句必须带后缀，但是只对node_modules生效，搭配上面的配置使用，避免第三方库有冲突
    * modules: 寻找第三方模块目录的优先级
      * 当导入路径不明确时的寻找优先级，默认就是node_modules
  * plugin 插件
    * 接收一个数组，每一项都是一个plugin的实例
  * devserver
    * hot 热更新
      * 默认是刷新整个页面来做到实时刷新
      * 当hot为true时，会在不更新整个页面的情况下，替换旧模块