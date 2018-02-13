
##Prisma/ GraphQL/ Node/ React / React-Native/ Typescript Boilerplate
<h4 align="center"><strong>Boilerplate for an Advanced GraphQL Server w/ TypeScript:
<h5 align="center"><img src="https://imgur.com/1MfnLVl.png" />
#### Features
<h5 align="center">

- Auth,
    - JWT
    - Bcrypt
- Profiles
    - One type or Multiple types
- Server
    - Apollo
    - Express
    - Typescript
    - Prisma
 <h5 align="center"><strong>🚀 Bootstrap your GraphQL server within seconds</strong></h5>

- CRUD,
- React/React-Native Frontend
- Database
    - MySQL
    - Possible to use 2 or more DB
- GraphQL API
    - Real-time
    - Easy to adjust
</strong></h5></h4>

<br />


###This was made from Prismas
<h5 align="center">Advanced starter kit for a flexible GraphQL server for TypeScript - based on best practices from the GraphQL community.</h5>
###Boilerplate



# Documentation

- **Scalable server:** [`graphql-yoga`](https://github.com/prisma/graphql-yoga) based on Apollo Server & Express
- **Static types:** TypeScript types for GraphQL queries & mutations are generated in a build step
- **Auth:** Signup/login workflows ready to use
- **Database:** Includes GraphQL database binding to [Prisma](https://www.prismagraphql.com) (MySQL)
- **Tooling:** Support for [GraphQL Playground](https://github.com/prisma/graphql-playground) & [query performance tracing](https://github.com/apollographql/apollo-tracing)
- **Extensible:** Simple/Flexible [data-model](./database/datamodel.graphql) – easy to adjust and extend
- **No configuration overhead**: Preconfigured [`graphql-config`](https://github.com/prisma/graphql-config) setup
- **Realtime updates:** GraphQL subscriptions (_coming soon_)

## Getting started

```sh
# 1. Navigate to the new project
cd (this-app)

# 2. Install Dependencies for NPM
yarn 

#3 Start server (runs on http://localhost:4000) and open GraphQL Playground
 Start server (runs on http://localhost:4000) and open GraphQL Playground
yarn dev

```

![](https://imgur.com/hElq68i.png)

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

> **Note**: We recommend that you're using `yarn dev` during development as it will give you access to the GraphQL API or your server (defined by the [application schema](./src/schema.graphql)) as well as to the Prisma API directly (defined by the [Prisma database schema](./generated/prisma.graphql)). If you're starting the server with `yarn start`, you'll only be able to access the API of the application schema.

### Project structure

![](https://imgur.com/95faUsa.png)

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>|
| :--  | :--         |
| `├── .env` | Defines environment variables |
| `├── .graphqlconfig.yml` | Configuration file based on [`graphql-config`](https://github.com/prisma/graphql-config) (e.g. used by GraphQL Playground).|
| `└── database ` (_directory_) | _Contains all files that are related to the Prisma database service_ |\
| `　　├── prisma.yml` | The root configuration file for your Prisma database service ([docs](https://www.prismagraphql.com/docs/reference/prisma.yml/overview-and-example-foatho8aip)) |
| `　　└── datamodel.graphql` | Defines your data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)) |
| `└── src ` (_directory_) | _Contains the source files for your GraphQL server_ |
| `　　├── index.ts` | The entry point for your GraphQL server |
| `　　├── schema.graphql` | The **application schema** defining the API exposed to client applications  |
| `　　└── generated` (_directory_) | _Contains generated files_ |
| `　　　　├── prisma.ts` | The generated TypeScript bindings for the Prisma GraphQL API  |
| `　　　　└── prisma.grapghql` | The **Prisma database schema** defining the Prisma GraphQL API  |

## Contributing

The GraphQL boilerplates are maintained by the GraphQL community, with official support from the [Apollo](https://dev-blog.apollodata.com) & [Graphcool](https://blog.graph.cool/) teams.

Your feedback is **very helpful**, please share your opinion and thoughts! If you have any questions or want to contribute yourself, join the [`#graphql-boilerplate`](https://graphcool.slack.com/messages/graphql-boilerplate) channel on our [Slack](https://graphcool.slack.com/).
