# CRUD Database-template

Install Dependencies

```
npm install
```

Add databases in `knexfile.js`

```
connection: {
            host: '127.0.0.1',
            database: 'INSERT DATABASE HERE'
```

Create your secret session key


```
bash -c 'echo "SESSION_SECRET="$(openssl rand -hex 64)' > .env
```
