# dubbo-composer-api-gen
[English](Readme.md)
辅助 java To dubbo composer 风格 api 生成器


# 使用方法
默认你已经有了java开发环境和mvn工具。在开始前你要建立纯api项目只进行接口的定义。

## 第一步

打包项目`mvn clean install`,并且记录下生成target目录的地址。

## 第二部

配置好配置文件dubbo-composer.json
```json
{
    "src":"/yourProjectDir/your-api/target",
    "out":"/yourProjectDir/outputDir"
}
```

## 第三部

```shell
$ dubbo-composer-gen-api  -c dubbo-composer.json
```
之后就可以在输出文件找到了。上传到github或者gitLab。就可以引入配合使用了

# 已知不足

- 没有解决命名冲突问题
- 不能指定dubbo调用的版本问题
- 不支持自定义泛型的解析
- 对Map没有很好的支持

# 配合使用
[dubbo-composr](https://www.npmjs.com/package/dubbo-composer) 自从 0.1.0