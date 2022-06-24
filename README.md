# W11K Angular Nest.js boilerplate setup

## Start development setup

run the following commands:

* `docker-compose up`
* `npm install`
* `npm run start`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@app/mylib`.


## TypeORM
Run `npm run create-entities-index`. The migration file can than be generated.

## How to perform database migrations

###1. Create entities first

It is recommended to put all entities into the _'backend/src/app/entities'_ folder.

###2. Create initial migration based on the current entities

Generate a migration file:

`npm run migrate:generate-dev -- ENTER YOUR MIGRATION NAME`

This will create an initial migration script based on the current state of the 
database, and the definitions found in the _/entities_ folder.

The migration script will be created under the _'backend/src/app/migration'_ folder.

###3. Execute a migration:

To effectuate the migration in the database: 

`npm run migrate:run-dev`

This will create all the relations in the database.

###4. Sequential migrations

To update the database:

`npm run migrate:generate-dev -- ENTER YOUR MIGRATION NAME`

Can be run whenever new entities have been created or existing ones altered.
This will result in a new migration file containing all the necessary 'SQL' statements
to update the database.

###5. Create custom (empty) migration files

Run the following command:

`npm run migrate:create -- ENTER YOUR MIGRATION NAME`

This will create a new empty migration file that can be populated with
database queries.

Example:

``` 
public async up(queryRunner: QueryRunner): Promise<void> { 
    await queryRunner.query(`INSERT INTO user (id, mail) VALUES (1, "Anton")`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DELETE FROM user WHERE name="Anton"`);
    }
``` 

###6. Changing environment variables for development

All TypeOrm CLI commands depend on the _ormconfig.js_ file which defines all necessary
configurations. Some rely on the setting of environment variables. Therefore, the
`migrate:generate-dev` and `migrate:run-dev` are convenient scripts designed to export and set environmental variables
to allow the execution of the tasks in the development environment. Variables will be imported from the
_backend/src/.env_ file and can be adjusted accordingly.

###7. Run migrations programmatically

To run migrations during start of the backend, configurations have been set up in the _app.modules.ts_ file. Migrations will be executed
automatically in the production mode (build). Therefore, migration files stored in the *migration* folder have to be imported through
a corresponding file (_/database/migration-index.ts_). Consequently, new migrations have to be added to this file, which can be done by hand or
by executing the npm _create-migrations-index_ script.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use
the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that
are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s
advanced code generation and project dependency graph, plus a unified experience for both frontend and backend
developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
