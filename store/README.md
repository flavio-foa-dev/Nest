## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Commands DTO
Crie um novo provider, que decorado com @ValidatorConstraint({ async: true }), implemente a interface ValidatorConstraintInterface. Este provider também deve receber como dependência no construtor o repositório de usuários, afinal, é o repositório que faz interação com o banco de dados.

A interface ValidatorConstraintInterface no seu método validate, espera que retornemos um valor booleano que indique se a validação foi um sucesso ou não. Se retornarmos o valor false, o erro de validação deve ser apresentado.

Para criar o decorator que executa a validação personalizada que acabamos de descrever, precisamos criar uma função. O nome desta função será o nome do decorator. E, como parâmetro, essa função deve receber um objeto do tipo ValidationOptions, interface importada do pacote class-validator.

Nossa função decorator deve retornar como resultado uma nova função que tem como parâmetros o objeto a ser validado e o nome da propriedade que será validada.

Esta segunda função deve executar o registro deste decorator no class-validator por meio do uso da função registerDecorator que recebe como argumento um objeto, informando o target alvo da validação, a propriedade a ser validada, as opções de validação, as constraints e por último o validator (classe que já escrevemos antes).