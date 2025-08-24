git clone ssh  
code .  

docker compose up -d --build  

docker compose exec app bash  
cp .env.development .env  
composer install  
php artisan key:generate  
php artisan migrate --seed  
php artisan storage:link  

docker compose exec node sh  
npm install  
