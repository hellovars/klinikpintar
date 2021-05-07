# klinikpintar

## Installation & usage

```
git clone https://github.com/faropedia/klinikpintar.git
cd klinikpintar

cp ./backend/.env.example ./backend/.env
cp ./frontend/.env.local.example ./frontend/.env.local

cd ./backend
npm install
cd ../frontend
npm install
cd ..

docker-compose build
docker-compose up -d
```

Frontend: http://localhost:3000

Backend: http://localhost:3001

MySQL: localhost:3306
