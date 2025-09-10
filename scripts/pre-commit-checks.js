#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { execSync } = require("child_process")

// 颜色输出函数
const colors = {
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  blue: (text) => `\x1b[34m${text}\x1b[0m`,
  cyan: (text) => `\x1b[36m${text}\x1b[0m`,
}

const checks = [
  {
    name: "ESLint 检查",
    command: "pnpm lint:check",
    emoji: "📋",
  },
  {
    name: "Prettier 格式检查",
    command: "pnpm format:check",
    emoji: "💄",
  },
  {
    name: "TypeScript 类型检查",
    command: "pnpm type-check",
    emoji: "🔧",
  },
]

// eslint-disable-next-line no-console
console.log(colors.blue("🔍 开始代码校验...\n"))

let hasErrors = false

for (const check of checks) {
  try {
    // eslint-disable-next-line no-console
    console.log(colors.cyan(`${check.emoji} ${check.name}...`))
    execSync(check.command, { stdio: "inherit" })
    // eslint-disable-next-line no-console
    console.log(colors.green(`✅ ${check.name}通过\n`))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(colors.red(`❌ ${check.name}失败\n`))
    hasErrors = true
  }
}

if (hasErrors) {
  // eslint-disable-next-line no-console
  console.log(colors.red("❌ 代码校验失败，请修复上述问题后再提交"))
  // eslint-disable-next-line no-process-exit
  process.exit(1)
} else {
  // eslint-disable-next-line no-console
  console.log(colors.green("🎉 所有代码校验通过！"))
  // eslint-disable-next-line no-process-exit
  process.exit(0)
}
