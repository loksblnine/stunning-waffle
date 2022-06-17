# stunning-waffle
тук, стартуем с 
```sh
git clone https://github.com/loksblnine/stunning-waffle.git
```
скачается папка с названием `stunning-waffle` в ней архитектура: `frontend` (React+Redux), `backend` (Express, PostgreSQL), `worker1` (NodeJS) тут мы реализовали воркер, чтоб через крон таску забирать с урлы рсс-ленту, `nginx` со своим конфигом и `dev-env-setup` в котором лежит docker-compose.yml
в каждой папке, где есть `.env.example` надо создать `.env` и перенести все переменные, вставив значения, особенно это касается клиента постгреса.
далее прописываем в каждой папке, где есть `package.json` 
```sh
npm install
```
далее в папках `frontend`, `backend` прописываем 

```sh
npm run start
```
а в папке `worker1`
```sh
node src/index.js
```
фронт и бек будут доступны на локале под http://localhost:3000 и http://localhost:5000
По средством ОРМ сиквелайзы пассивная работа воркера никак не повлияет на транзакции отправляемые с фронта
