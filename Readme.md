# dubbo-composer-api-gen
[中文](Readme_CN.md)
Auxiliary java To dubbo composer style api generator

# Usage
By default you already have a java development environment and mvn tools. Before you start, you have to build a pure api project which only define the interface.

## Setp1
Package the project `mvn clean install`, and record the address of the generated target directory.

## Setp2
Configure the configuration file dubbo-composer.json
```json
{
    "src":"/yourProjectDir/your-api/target",
    "out":"/yourProjectDir/outputDir"
}
```
## Setp3

```shell
$ dubbo-composer-gen-api  -c dubbo-composer.json
```
Then you can find it in the output file. Upload to github or gitLab. Can be used in conjunction with



# Known deficiency
- Did not resolve the naming conflict
- Can't specify the version of dubbo call
- Does not support the resolution of custom generics
- No good support for Map

# With the use of
[dubbo-composr](https://www.npmjs.com/package/dubbo-composer) since 0.1.0