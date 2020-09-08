
#!/usr/bin/env sh
set -e
npm run build
cd dist
git init 
git add -A
git commit -m 'deploy'
git push -f https://github.com/dontz1230/easydemo.git master:gh-pages
cd -