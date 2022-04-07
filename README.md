# Tech Challenge

O desafio consiste na integração com a API de um SaaS utilizado por nossos clientes, precisamos extrair seus dados através de endpoints REST descritos nesse repositório, consolida-los em uma base única e exibi-los de forma consolidada.

## Nós precisamos que você implemente

1. Uma aplicação simples (console, API, worker, o que se sentir mais confortável) que será responsável pela integração com a API do nosso SaaS Mock para coletar os dados dos usuários cadastrados

2. Um usuário deve conter ao menos as seguintes informações:

- ID
- Nome
- Email
- Data de última atividade
- Flag para indicar se o usuário é pagante ou não
- Flag para determinar se o usuário está ativo ou não

3. A API que estamos integrando retorna a propriedade `status` com os possíveis valores: `enabled`, `disabled`. Sendo que o usuário apenas não está ativo quando o valor é igual a `disabled`

4. Também temos a necessidade de mapear se o usuário é pagante ou não, porém a API que estamos integrando não possui informação direta para definir este campo, mas sabemos que ela retorna um campo de `role` e através deste conseguimos determinar o que precisamos. Devemos considerar a seguinte regra para este campo:

| Role | Pagante |
|:----:|:-------:|
|viewer| não     |
|system| não     |
|editor| sim     |
|admin | sim     |

5. Também devemos considerar que usuários inativos nunca são pagantes

6. Como o email pode ser uma informação pessoal de contato daquele usuário devemos afusca-lo de modo que só seja possível visualizar os primeiros e últimos 2 caracteres do alias e o domínio

## Extra

- Você pode utilizar qualquer framework e biblioteca
- É um diferencial ter ao menos a lógica principal seja testada
- É um diferencial trabalhar com Typescript no dia a dia

# Instalação

Requisito é ter docker em sua máquina para rodar nossa API de mock:

```
docker-compose up
```

## Mock API

Com o serviço executando você poderá utilizar as seguintes API's:

### Users

Listagem de `users` registradas
`GET http://0.0.0.0:8080/users`