# Deploy portfolio to GitHub Pages

## Fix blank white page

GitHub Pages must serve the **built** site, not the raw React source.

1. Open: https://github.com/hariharan1022/hariharan_portfolio/settings/pages
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
3. Set **Branch** to `main` and **Folder** to `/docs`
4. Click **Save**
5. Wait 1–2 minutes, then hard-refresh: https://hariharan1022.github.io/hariharan_portfolio/

**Alternative:** Branch `gh-pages`, folder `/ (root)`.

## Manual deploy

```powershell
cd "c:\Users\HARIHARAN S\Desktop\hari-portfolio"
npm run deploy
git add .
git -c user.name="hariharan" -c user.email="hariharanmahesh34@gmail.com" commit -m "deploy: update docs build"
git push origin main
```

Pushes to `main` also run the GitHub Action that updates `docs/` automatically.
