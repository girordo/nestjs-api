<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="http://docker.com/" target="blank"><img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" width="200" alt="Docker logo"/></a>
  <a href="http://jwt.io" target="blank"><img src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png" width="200" alt="JWT logo"></a>
</p>

## Description

This is a little project just for educational and curiosity purpose.
In this project I learned about:

- How to setup a NestJS project
- How to use the NestJS tooling (create controllers, services, modules)
- Concept and how to use Guards
- JWT Authentication Strategy with Guards
- How to dockerize an NestJS application with PostgreSQL
- How to make end-to-end tests (for integration purpose)

## Installation

```bash
$ npm install or yarn
```

## Running the app

```bash
# development
$ npm run start or yarn start

# watch mode
$ npm run start:dev or yarn start:dev

# production mode
$ npm run start:prod or yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test or yarn test

# pretest command
$ npm run pretest:e2e or yarn pretest:e2e

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Inspiration

Besides the NestJS official docs I followed this two videos:
https://www.youtube.com/watch?v=GHTA143_b-s
https://www.youtube.com/watch?v=PfSyDd3Sc5A
https://www.youtube.com/watch?v=X7RULL-wIhE

And the repo:
https://github.com/NikhilCodes/nestjs-best-practices

All the dockerization and setting up the template can be found on the first video,
in the second one I integrate Swagger with the api. In the third video I used the helmet properties but not implement the healthcheck with terminus module. (yet!)
Although in the repo I used the middleware CORS code to implement a middleware for my self.

## License

This project is [MIT licensed](LICENSE).

---

<div align="center">
  <sub>Made with 💜 by <a href="https://github.com/girordo">Tarcísio Giroldo</a></sub>
</div>

#just a quick change for testing git config