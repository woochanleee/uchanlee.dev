---
templateKey: 'blog-post'
title: 'Relay compiler를 사용할때 파일명 안에 하이픈(-)이 포함되어 있다면?'
description: Relay compiler의 사용법을 차근차근 정리해보려 합니다.
date: 2021-02-24 14:45:00
category: Relay
thumbnail: ./images/logo.png
tags:
  - 재밌당
  - 신기방기
  - relay-compiler
---

![Realy Logo](./images/logo.png)

## 서론

Relay를 능숙하게 다루진 못하지만 앞으로 사용하면서 알아낸 경험을 바탕으로 글을 작성합니다. 따라서 글을 작성하다가 사실과 어긋난 내용을 얘기할 수도 있습니다. 이 점은 양해 부탁드리며 댓글로 지적해주시면 감사한 마음으로 수정하겠습니다.

> 글을 작성하는 2021.2.24일 참고하고 있는 [Relay Version](https://relay.dev/en/versions)은 `v10.1.3` 입니다.

## Relay compiler란?

Relay compiler는 코드 내의 graphql tagged templates를 감지해 js로 컴파일 해주는 역할을 합니다. 이 js 파일은 런타임에 babel plugin에 의해 가져다 쓰입니다.

## Relay compiler 사용법

https://relay.dev/docs/en/installation-and-setup#set-up-relay-compiler
https://relay.dev/docs/en/graphql-in-relay.html#relay-compiler

위 링크에서 자세히 다루지만 제가 아는 내용을 바탕으로 간단히 정리해보겠습니다.

먼저 우리는 프로젝트를 구동하기 전에 relay compiler를 사용하여 컴파일 해줘야 합니다(graphql과 관련되어 수정이 되었다면). 이유는 babel이 컴파일된 파일을 사용하기 때문이죠.

흔히 `package.json`에 다음과 같이 script를 정의합니다.

```json
"scripts": {
  "relay": "relay-compiler --src ./src --schema ./schema.graphql"
}
```

command line으로 Option을 넘겨줄 수 도 있지만 `relay-config`를 사용해 `relay.config.js` 파일을 만들어서 쉽게 설정할 수 도 있습니다.

https://relay.dev/docs/en/installation-and-setup#set-up-relay-with-a-single-config-file

```js
module.exports = {
  language: 'typescript',
  extensions: ['ts', 'tsx'],
  src: './',
  schema: './graphql/schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  artifactDirectory: './__generated__',
};
```

제가 테스트 해본 결과 별도 config 파일 보다 command line이 우선순위를 갖고 적용 됩니다.

## Query, Mutation Name 작성법

```js
commitMutation(environment, {
  variables,
  mutation: graphql`
    mutation signup($input: CreateUserInput!) {}
  `,
});
```

위와 같이 mutation을 작성한 후 컴파일을 해봤습니다.

제가 docs를 잘 안읽어서 그런가 `yarn relay`를 실행하니 컴파일 과정에서 오류가 발생했습니다.

```shell
ERROR:
Parse error: Error: RelayFindGraphQLTags: Operation names in graphql tags
must be prefixed with the module name and end in "Mutation", "Query",
or "Subscription". Got `signup` in module `signUp`. in "pages/sign-up.tsx"
```

번역해보면 graphql tags를 사용할때 반드시 module name(file name)를 접두사로 사용하고 `Mutation`, `Query`, `Subscription` 중 해당하는 것으로 마지막에 사용하라고 합니다. 따라서 아래처럼 네이밍을 수정했습니다.

```graphql
mutation sign-upCreateUserMutation($input: CreateUserInput!) {}
```

하지만 이렇게 하면 아래와 같은 에러가 납니다.

```shell
ERROR:
Parse error: Syntax Error: Invalid number, expected digit but got: "u".
12 |
13 |   mutation sign-upCreateUserMutation($input: CreateUserInput!) {}
   |                 ^
```

번역해보면 숫자가 와야 하는데 "u"가 왔다고 뭐라 하네요. 왜 hypen(-)을 사용하면 digit을 기대하는지는 잘 모르겠습니다.

사실 이 글을 작성하게된 이유가 바로 hypen 때문인데요. 글을 작성하면서 보니까 터미널을 잘 보면 해결할 수 있는 문제였네요.

**만약 파일명에 (-)이 포함되어 있다면 (-)를 빼고 뒤에 있는 알파벳을 대문자로 작성하면 됩니다.**

예를 들어 `sign-up.tsx`라고 한다면 `signUp`으로 사용하여 다음과 같은 뮤테이션을 작성할 수 있겠죠.

```graphql
mutation signUpCreateUserMutation($input: CreateUserInput!) {}
```

위 에러들중 첫번째 에서 `in module "signUp"`이라고 나와 있는데 제가 이걸 못보고 몇분간 구글링 했네요.

## 마치며

오늘의 경험을 바탕으로 에러 문구를 잘 확인해야겠다고 다시한번 깨달았습니다. 대부분은 여기서 해결되니까 말이죠.

지금은 아직 미숙한 부분이 많게 정리를 하였는데 이 부분들은 앞으로 하나씩 배워나가면서 추가해나갈 예정입니다.
