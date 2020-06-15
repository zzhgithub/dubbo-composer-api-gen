#!/usr/bin/env node

const klaw = require("klaw");
const { readFile, writeFile, readJSON } = require("fs-extra");
const prettier = require("prettier");
const program = require("commander");
const path = require("path");
const execa = require("execa");

program
  .version("0.0.1")
  .usage("-c dubbo-composer.json")
  .option("-c, --config [value]", "specify interpret Config ")
  .parse(process.argv);

(async () => {
  try {
    var config = await readJSON(program.config);
  } catch (err) {
    console.error("没有找到dubbo-composer.json文件");
    console.error("Can't find dubbo-composer.json File");
    return;
  }

  //config.out output
  //config.src target

  // 格式化代码
  // path.join(__dirname,)
  try {
    const { stdout } = await execa("java", [
      "-jar",
      path.join(__dirname, "./ext/gen-api-helper.jar"),
      "-t",
      config.src,
      "-o",
      config.out,
    ]);
    console.log(stdout);
  } catch (error) {
    console.log(error);
    return;
  }
  // 调用命令行
  await formatSourceDir("/Users/zhouzihao/lab/output");
})();

async function formatSourceDir(srcDir) {
  return new Promise((resolve, reject) => {
    klaw(srcDir)
      .on("data", async (item) => {
        if (item.path.endsWith(".js")) {
          try {
            let fileContent = await readFile(item.path);
            await writeFile(
              item.path,
              prettier.format(fileContent.toString(), {
                parser: "babel",
                singleQuote: true,
                bracketSpacing: false,
                trailingComma: "all",
                semi: true,
              })
            );
          } catch (err) {
            reject(err);
          }
        }
      })
      .on("end", () => {
        resolve();
      });
  });
}

process.on("uncaughtException", (err) => {
  console.log(err);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
});
