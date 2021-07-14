
# symfony-vue-starter
Symfony 4 skeleton with Vue, Vuex, Vue-router and Webpack

## Installing the project

Install composer and node dependencies

```sh
$ composer install
$ yarn install #recommended
or
$ npm install
```

Migrate database and fixtures

```sh
$ php bin/console make:migration
$ php bin/console doctrine:migrations:migrate 
$ php bin/console doctrine:fixtures:load
```

Compile JS and CSS files

```sh
$ ./node_modules/.bin/encore dev 
```

Execute built in Symfony web server

```sh
$ php bin/console server:run
```

or

```sh
$ docker-compose up
```

In each case, it will start a server accessible at http://localhost:8000

## Vue development

Vue files are located at /assets/js folder. Just modify these files as a regular Vue project.

I suggest you using hot-reload encore server. When a file is updated webpack will be launched automatically. Start it with this command

```sh
$ ./node_modules/.bin/encore dev --watch
```

Files app.js and app.css will be compiled at /public/build folder.

Default controller contains just one root route that renders this necessary files.

SassLoader is activated, so all changes on /assets/js/app.scss will be compiled too.

Axios are prototyped as $http. This service will be available at the whole Vue app.

Vuex and Vue-router are included too. Be free to add as routes and stores as you want.

## Test account

Thanks to fixtures, a test account can be create :

```sh
admin@exemple.com
1234
```