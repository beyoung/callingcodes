# 世界电话区号地图 🌍📞

一个基于 Astro 构建的交互式世界电话区号查询网站，支持在地图上展示和查询世界各国的国际长途电话区号信息。

## ✨ 功能特性

- 🗺️ **交互式世界地图** - 点击地区查看电话区号信息
- 🔍 **智能搜索** - 支持按国家名称、区号、地区等多种方式搜索
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🚀 **SEO 优化** - 完整的 SEO 配置，包括 sitemap、robots.txt 等
- ⚡ **快速部署** - 一键部署到 Cloudflare Pages
- 🌐 **多语言支持** - 中英文双语显示

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build/) - 现代静态网站生成器
- **样式**: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **部署**: [Cloudflare Pages](https://pages.cloudflare.com/) - 全球 CDN 加速
- **语言**: TypeScript - 类型安全的 JavaScript

## 🚀 快速开始

### 本地开发

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd ayamap-callingcodes
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **打开浏览器访问** `http://localhost:4321`

### 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `dist/` 目录。

## 📦 部署到 Cloudflare Pages

### 方法一：通过 GitHub Actions 自动部署

1. **设置 GitHub Secrets**
   在 GitHub 仓库的 Settings > Secrets and variables > Actions 中添加：
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID

2. **推送代码**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

   GitHub Actions 将自动构建并部署到 Cloudflare Pages。

### 方法二：手动部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **使用 Wrangler CLI 部署**
   ```bash
   npx wrangler pages deploy dist
   ```

### 方法三：通过 Cloudflare Dashboard

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Pages 页面
3. 连接 GitHub 仓库
4. 设置构建配置：
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
   - **Node.js 版本**: `18`

## 📁 项目结构

```
src/
├── components/          # 组件目录
│   ├── SimpleWorldMap.astro  # 简化版世界地图组件
│   └── WorldMap.astro        # 完整版世界地图组件
├── data/               # 数据目录
│   └── calling-codes.ts     # 世界电话区号数据
├── pages/              # 页面目录
│   ├── country/        # 动态国家详情页面
│   │   └── [code].astro
│   ├── index.astro     # 首页
│   ├── search.astro    # 搜索页面
│   ├── sitemap.xml.ts  # 动态 sitemap
│   └── robots.txt.ts   # robots.txt
└── public/             # 静态资源
    └── favicon.svg     # 网站图标
```

## 🌐 页面说明

- **首页** (`/`) - 交互式世界地图，展示各地区电话区号
- **搜索页** (`/search`) - 高级搜索功能，支持多种筛选条件
- **国家详情页** (`/country/[code]`) - 显示特定国家的详细电话区号信息

## 📊 SEO 优化

- ✅ 完整的 meta 标签配置
- ✅ Open Graph 和 Twitter Cards 支持
- ✅ 结构化数据 (JSON-LD)
- ✅ 动态生成的 sitemap.xml
- ✅ robots.txt 配置
- ✅ 语义化 HTML 结构
- ✅ 快速加载优化

## 🔧 自定义配置

### 修改域名

在以下文件中更新域名：
- `src/pages/index.astro` - Open Graph URL
- `src/pages/country/[code].astro` - Canonical URL
- `src/pages/search.astro` - Canonical URL
- `src/pages/sitemap.xml.ts` - Base URL

### 添加新的电话区号数据

编辑 `src/data/calling-codes.ts` 文件，按照现有格式添加新的国家数据。

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过 GitHub Issues 联系我们。

---

**注意**: 所有电话区号数据仅供参考，请以官方信息为准。
