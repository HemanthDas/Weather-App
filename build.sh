DIRECTORY="$(ls)"
cd $DIRECTORY
echo "Moved to $DIRECTORY"
npm i
npm run build
mv dist/* /usr/share/nginx/html/
echo "Moved files to /usr/share/nginx/html/"
sudo systemctl restart nginx
echo "Restarted nginx"
