// webpack4的配置
module.exports = {
    // webpack4需要添加这个配置，development为开发环境，production为生产环境
    mode: "production",
    entry:  __dirname + "/b.js", // 之前提到的唯一入口文件
    output: {
        path: __dirname + "/dist", // 打包后的文件存放的地方
        filename: "sss.js" // 打包后输出文件的文件名
    }
}