# gatsby-plugin-custom-routing

自定义Gatsby路由插件，提供以下功能：

1. 自动处理pages目录中的index文件夹中的文件映射到根路径
2. 配置忽略特定文件或文件夹
3. 创建自定义路径映射

## 安装

由于这是一个本地插件，已经包含在项目中，无需额外安装。

## 配置

在`gatsby-config.js`或`gatsby-config.ts`中添加配置：

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-custom-routing',
      options: {
        // 页面目录的路径（默认 "src/pages"）
        pagesDir: "src/pages",
        
        // 模板目录的路径（默认 "src/templates"）
        templatesDir: "src/templates",
        
        // 要忽略的文件或文件夹的glob模式列表
        ignore: [
          "**/*.css",
          "**/*.scss",
          "**/README.md"
        ],
        
        // 自定义路径映射 {"源路径": "目标路径"}
        customMappings: {
          "src/pages/special-page.tsx": "/custom-url",
          "src/pages/another-page.tsx": "/another-url"
        },
        
        // 是否将嵌套的index文件夹映射到根路径（默认 true）
        nestedIndexToRoot: true
      }
    }
  ]
}
```

## 功能

### 自动处理嵌套index映射

当`nestedIndexToRoot`设置为`true`时，插件会自动将`src/pages/index/index.tsx`映射到网站根路径`/`。

同时，也会创建从`/index`到相应index组件的映射。

### 自定义路径映射

使用`customMappings`选项可以创建自定义路径映射，将任意组件映射到任意URL路径。

### 忽略文件/文件夹

使用`ignore`选项可以指定要忽略的文件或文件夹的glob模式列表。

## 示例

### 基本配置

```js
{
  resolve: 'gatsby-plugin-custom-routing',
  options: {
    // 将src/pages/index/index.tsx映射到根路径("/")
    nestedIndexToRoot: true
  }
}
```

### 高级配置

```js
{
  resolve: 'gatsby-plugin-custom-routing',
  options: {
    ignore: ["**/styles/**", "**/*.test.*"],
    customMappings: {
      "src/pages/contact-us.tsx": "/about/contact",
      "src/templates/special-template.tsx": "/special"
    }
  }
}
```

## 注意事项

此插件会在Gatsby的`createPages` API中运行，确保它在其他可能影响页面创建的插件之前加载，以避免路由冲突。 