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


Um ponto importante na evolução de APIs Restful é como lidamos com a evolução dessas APIs. Uma API precisa se manter estável quando em produção com clientes fazendo uso de seus recursos. Diante disso, não é recomendável que simplesmente removamos valores ou alteremos como determinado recurso funciona, pois os clientes dessa API podem parar de funcionar de forma inesperada.

Claro, se é uma API privada, onde as alterações são negociadas entre as partes, este é um problema mais fácil de lidar. Mas em APIs públicas, como a do GitHub e outros serviços, essa é uma problemática para se ter cuidado.

Por isso, existem maneiras de lidar com essa evolução. Uma delas é o versionamento da API. Em casos em que determinado endpoint precise de mudanças, cria-se uma versão nova daquele mesmo endpoint onde essas mudanças serão aplicadas.

Este versionamento pode acontecer de algumas formas, a mais comum delas é a adição de um sub-caminho para o recurso, que especifica que versão está sendo usada daquela API. O exemplo abaixo ilustra melhor:
```
https://api.exemplo.com.br/v2/user
```
O v2 presente na URL do endpoint indica a versão da API que estamos utilizando. Outra forma é usando query parameters, enviando também na URL, qual a versão da API que estamos usando:
```
https://api.example.com.br/user?v=2
```
Por último, podemos usar cabeçalhos do HTTP para indicar para o servidor qual versão queremos usar da API. Normalmente, o cabeçalho usado é o Accept, mas pode ser um outro. O NestJS já possui um mecanismo que lida com o versionamento das APIs, facilitando a gestão desses endpoints.
```
https://docs.nestjs.com/techniques/versioning
```
Em APIs Restful, você pode ter endpoints isolados, ou seja, lidam com as operações de CRUD de forma isolada sob um recurso só e endpoints que lidam com relacionamentos ou agregações.

Nos endpoints que lidam com relacionamentos/agregações, dependendo do tipo de relacionamento, a recomendação geral é que esse relacionamento seja expresso também nas URLs dos recursos.

Vejamos nosso exemplo da loja: Um usuário possui produtos. Sendo assim, os produtos da loja estão com um relacionamento forte com seus usuários. De fato, o usuário cria e remove produtos como bem entender. Sendo assim, a recomendação geral é que o CRUD de produtos tivesse endpoints relativos ao de usuários. O que isso quer dizer na prática? A URL a seguir demonstra a relação entre produtos e usuário:

```
http://localhost:3000/usuarios/1234/produtos
```

O número 1234 na URL representa o usuário com aquele identificador. O /produtos logo após o identificador de usuário, representa o endpoint raiz de operações do CRUD para produtos daquele usuário. Considerando isso, teríamos o seguinte esquema de CRUD para produtos:

- POST http://localhost:3000/usuarios/1234/produtos, para criar um produto;
- GET http://localhost:3000/usuarios/1234/produtos, para listar todos os produtos;
- PUT/PATCH http://localhost:3000/usuarios/1234/produtos/4321, para atualizar um produto;
- DELETE http://localhost:3000/usuarios/1234/produtos, para remover um produto.



