## Backend for feedback form

Open API that receives requests and stores them into the
database

NodeJs,
DB on https://cloud.mongodb.com/

Technology, frameworks and middleware:

- cors
- cross-env
- dotenv
- express
- http-errors
- joi
- mongoose
- morgan

Deploy: https://feedbacks-backendd.herokuapp.com/

### Get All feedbacks (GET)

https://feedbacks-backendd.herokuapp.com/api/feedbacks/

### Get by Id (GET)

https://feedbacks-backendd.herokuapp.com/api/feedbacks/:id

### Add feedback (POST, {name, email, feedback - required)

https://feedbacks-backendd.herokuapp.com/api/feedbacks/

### Comands:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок
