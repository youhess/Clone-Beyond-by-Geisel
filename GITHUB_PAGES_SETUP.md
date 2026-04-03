# GitHub Pages 配置指南

## 已完成的配置

本项目已配置以支持 GitHub Pages 部署。以下是关键更改：

### 1. Vite 配置 (`vite.config.js`)
- 添加了 `base` 配置参数，支持根据环境变量自动调整
- 开发环境默认为 `/`
- 部署到 GitHub Pages 时会使用正确的路径

### 2. GitHub Actions 工作流
- 创建了 `.github/workflows/deploy.yml`
- 每次推送到 `main` 分支时自动构建并部署
- 使用官方的 GitHub Pages 部署 Action

### 3. NPM 脚本
- `npm run deploy` - 构建并部署项目

## 部署步骤

### 方案 A：个人/组织页面（推荐 GitHub Pages 主页）
如果你的仓库名是 `username.github.io`：

```bash
git push origin main
```
自动部署，无需额外配置。

### 方案 B：项目页面（非 io 结尾的仓库）
如果你的仓库名是其他名称（例如 `my-project`），需要按以下步骤配置：

1. **修改 vite.config.js 中的 base 路径**：
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/my-project/',  // 改为你的仓库名
})
```

2. **配置 GitHub Pages 设置**：
   - 进入仓库 Settings
   - 找到 Pages 部分
   - Source 选择 "Deploy from a branch" 或 "GitHub Actions"
   - 如果选择 branch，选择 `gh-pages` 分支

3. **使用 gh-pages 包自动化部署**（可选）：
```bash
npm install --save-dev gh-pages
```

修改 package.json：
```json
{
  "homepage": "https://yourusername.github.io/my-project",
  "scripts": {
    "deploy": "npm run build && npx gh-pages -d dist"
  }
}
```

### 方案 C：使用 GitHub Actions（当前配置）
- 默认配置已启用了 GitHub Actions 自动部署
- 每次 push 到 main 分支会自动构建和部署
- 在 Settings → Pages 中确保 Source 选择 "GitHub Actions"

## 验证配置

1. **提交代码**：
```bash
git add .
git commit -m "Configure GitHub Pages"
git push origin main
```

2. **检查工作流**：
   - 进入仓库的 Actions 选项卡
   - 查看 "Deploy to GitHub Pages" 工作流执行状态

3. **访问网站**：
   - 个人页面：`https://yourusername.github.io`
   - 项目页面：`https://yourusername.github.io/my-project`

## 环境变量配置

如果需要在不同环境使用不同的 base URL，可以设置环境变量：

```bash
# 本地开发
npm run dev

# 构建时指定 base
BASE_URL=/my-project/ npm run build
```

## 常见问题

### Q: 部署后页面显示空白或资源 404
**A**: 检查 vite.config.js 中的 `base` 配置是否与实际仓库路径一致。

### Q: 如何分离开发和生产的 base 路径
**A**: 修改 vite.config.js：
```javascript
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/my-project/' : '/',
})
```

### Q: 想要自定义域名
**A**: 在仓库根目录创建 `public/CNAME` 文件，内容为你的自定义域名：
```
mydomain.com
```

## 需要的手动配置

- [ ] 如果是项目页面，修改 vite.config.js 中 base 的值为 `/your-repo-name/`
- [ ] 前往 GitHub 仓库 Settings → Pages，确保配置正确
- [ ] 推送代码到 main 分支触发自动部署

配置完成后，下次 push 会自动部署到 GitHub Pages！
