# gatsby-rehype-meta-attributes

一个Gatsby插件，将Markdown代码块中的元数据信息转换为HTML属性。

## 功能

该插件可以解析Markdown代码块中的元数据信息，并将这些信息转换为对应的HTML属性。例如：

````markdown
```javascript title="示例代码" highlight="1,3-5"
console.log("Hello world");
const a = 1;
const b = 2;
const c = a + b;
console.log(c);
```
````

将被转换为：

```html
<pre>
  <code class="language-javascript" title="示例代码" highlight="1,3-5">
    console.log("Hello world");
    const a = 1;
    const b = 2;
    const c = a + b;
    console.log(c);
  </code>
</pre>
```

## 安装

这是一个本地插件，不需要通过npm安装，直接在Gatsby配置中使用即可。

## 使用方法

在`gatsby-config.ts`中配置插件：

```typescript
// gatsby-config.ts
import rehypeMetaAttributes from "./plugins/gatsby-rehype-meta-attributes"

const config = {
  // ... 其他配置
  plugins: [
    // ... 其他插件
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeMetaAttributes, rehypeKatex],
        },
        gatsbyRemarkPlugins: [],
      },
    },
  ],
}

export default config
```

## 支持的元数据格式

插件支持以下元数据格式：

1. 键值对：`key=value`
2. 属性简写：`{highlight}`

## 示例

以下是一些使用示例：

````markdown
```javascript title="示例.js" lineNumber {1,3-5}
// 第1行会被高亮
const x = 1;
// 第3-5行会被高亮
const y = 2;
console.log(x + y);
```
````
```javascript title="示例.js" lineNumber {1,3-5}
// 第1行会被高亮
const x = 1;
// 第3-5行会被高亮
const y = 2;
console.log(x + y);
```

````markdown
```css filename="styles.css" editable
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}
```
````

## 贡献

欢迎提交问题或改进建议！ 