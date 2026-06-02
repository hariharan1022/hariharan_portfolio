# Deploy portfolio to GitHub Pages

## Fix blank white page

GitHub Pages must serve the **built** site (`gh-pages` branch), not the raw React source on `main`.

1. Open: https://github.com/hariharan1022/hariharan_portfolio/settings/pages
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
3. Set **Branch** to `gh-pages` and **Folder** to `/ (root)`
4. Click **Save**
5. Wait 1–2 minutes, then hard-refresh: https://hariharan1022.github.io/hariharan_portfolio/

## Automatic deploy

Every push to `main` (except changes only in `docs/`) runs the **Deploy to GitHub Pages** workflow and updates `gh-pages`.

## Manual deploy

```powershell
cd "c:\Users\HARIHARAN S\Desktop\hari-portfolio"
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch.

## Git in Cursor

Open this folder in Cursor (not a parent folder):

`c:\Users\HARIHARAN S\Desktop\hari-portfolio`

Then use Source Control or:

```powershell
git add .
git -c user.name="hariharan" -c user.email="hariharanmahesh34@gmail.com" commit -m "Your message"
git push origin main
```
