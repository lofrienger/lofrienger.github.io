# An Wang · Academic Homepage

独立静态站点。修改 HTML、CSS 或 JavaScript 后即可预览，不需要 Jekyll、Ruby、npm 或生成脚本。

## 文件位置

- `index.html`：首页正文、News、Publications、Experience、Education 等。
- `assets/css/homepage.css`：排版、配色和移动端样式。
- `assets/js/homepage.js`：论文主题筛选和深浅色切换。
- `images/`：头像、论文配图和旧图片。配图来源可记在 `images/PUBLICATION_FIGURES.md`。
- `.nojekyll`：让 GitHub Pages 直接发布静态文件。

旧 Jekyll 主题源码和 Ruby 构建文件已移除，可在 Git 历史中找回。原有图片和公开的 CSS、JavaScript、字体资源仍保留；更新内容时只改 `index.html`。旧地址 `/about/` 和 `/about.html` 会转到主页，原来常用的栏目锚点也保留了兼容入口。

## 添加 News

打开 `index.html`，搜索 `id="news"`。在第一个 `<ul class="news-list">` 内，把新条目加到最前面：

```html
<li><time datetime="2026-12">2026.12</time><span>
  We released <a href="https://example.org/project">Project Name</a>.
</span></li>
```

- `datetime` 用 `YYYY-MM`，页面显示用 `YYYY.MM`。
- 如果继续保持首页只显示最新 7 条，把第一组最旧的条目移到 `Earlier updates` 里的第二个列表开头。两个列表都按时间倒序维护。
- 链接用 `<a href="…">链接文字</a>`；在 HTML 文字中用 `&amp;` 表示 `&`。

## 添加论文

先把配图放入 `images/`，再编辑 `index.html`。将新卡片放在合适主题的 `<div data-group="…">` 内，不需要改筛选脚本。

| 研究主题 | 搜索位置 |
| --- | --- |
| World Models & Agent Evaluation | `data-group="world-models"` |
| Surgical Vision & Video Understanding | `data-group="surgical-vision"` |
| Medical Image Segmentation | `data-group="segmentation"` |

可以复制已有卡片，或使用下方模板。把标题、作者、会刊或技术报告信息、配图和链接换成实际内容；不适用的链接可直接删除。

```html
<div class="paper-box">
  <div class="paper-box-image"><div>
    <img src="images/new-paper.webp" alt="Overview of the proposed method"
         loading="lazy" decoding="async">
  </div></div>
  <div class="paper-box-text">
    <h4>Paper Title</h4>
    <p><strong>An Wang*</strong>, Coauthor Name†</p>
    <p>Conference or Journal Name, 2026</p>
    <p><a href="https://example.org/paper">Paper</a> |
       <a href="https://example.org/project">Project</a></p>
  </div>
</div>
```

`*` 表示第一作者，`†` 表示通讯作者；只在适用时添加。配图路径相对于首页，例如 `images/new-paper.webp`。

## 本地预览与发布

在仓库根目录运行：

```sh
python -m http.server 8000 --bind 127.0.0.1
```

打开 [http://127.0.0.1:8000/](http://127.0.0.1:8000/)，检查修改、图片和链接；按 Ctrl+C 停止服务器。也可以直接用浏览器打开 `index.html`，但检查旧地址跳转时要使用本地服务器。

确认后再提交并推送。若 GitHub Pages 已从 `main` 的仓库根目录发布，无需改部署来源；推送后等待部署完成，再刷新线上页面。也可以在 GitHub 文件页面直接编辑 `index.html`，但保存到发布分支会触发上线，想先预览就先在本地改。
