# chrome 二维码嗅探插件
> Qcode


### 运行环境配置:

1. 安装开发工具 

    ```shell
    npm install
    ```
1. clone你的项目（以下为示例）

    ```shell
    git clone git@github.com:StudyForFun/Qcode.git
    ```

### 启动项目

1. 研发时候使用`grunt`命令进行研发

2. 在编码过程中会编译研发源码到plugin > src 目录下对应的js

3. 把js复制出来，复制到需要注入的页面`console`上执行


### 文件结构说明

```
project (develop)
│  .gitignore
├── Gruntfile.js
├── README.md
├── dest
│   ├── index.min.css
│   └── index.min.tpl
├── package.json
├── plugin
│   ├── README.md
│   ├── background.js
│   ├── manifest.json
│   ├── popup.html
│   ├── src
│   │   └── index.dev.js
│   └── tianmao.png
└── src
    ├── index.css
    ├── index.js
    └── index.tpl

```

#### 目录结构与说明：

##### 项目目录
* ``plugin目录``:编译后可运行的JS脚本源码
* ``publish目录``: 编译后可运行的JS脚本生产压缩码
* ``src目录``：进行研发的JS脚本，tpl文件，css文件
* ``gruntfile.js目录``：前端构建组件，负责前端研发，测试，生产环境文件生成。
* ``package.json``：前端依赖描述文件，即npm的 [package.json](https://www.npmjs.org/doc/files/package.json.html) 文件

### 发布
```sh
grunt build
```
> 打包文件在 publish目录内