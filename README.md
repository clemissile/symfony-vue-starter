<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />

<div align="center">
	<a href="https://github.com/clemissile/symfony-vue-starter">
        <img src="https://symfony.com/images/logos/header-logo.svg" alt="Symfony Logo" width="260" height="66">
		<img src="assets/js/assets/logo.png" alt="Vue Logo" width="80" height="80">
	</a>
	<h3 align="center">symfony-vue-starter</h3>
	<p align="center">
		Symfony 4 skeleton with VueJs, Vuex, Vue-router and Webpack !
		<br />
		<br />
		<a href="https://github.com/clemissile/symfony-vue-starter/issues">Report Bug</a>
		·
		<a href="https://github.com/clemissile/symfony-vue-starter/issues">Request Feature</a>
	</p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
	<summary>Table of Contents</summary>
	<ol>
		<li>
			<a href="#about-the-project">About The Project</a>
			<ul>
				<li><a href="#built-with">Built With</a></li>
			</ul>
		</li>
		<li>
			<a href="#getting-started">Getting Started</a>
			<ul>
				<li><a href="#prerequisites">Prerequisites</a></li>
				<li><a href="#installation">Installation</a></li>
                <li><a href="#vue-development">Vue development</a></li>
                <li><a href="#test-account">Test account</a></li>
			</ul>
		</li>
		<li><a href="#contributing">Contributing</a></li>
		<li><a href="#license">License</a></li>
		<li><a href="#contact">Contact</a></li>
		<li><a href="#acknowledgments">Acknowledgments</a></li>
	</ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

I wanted a skeleton with an API made with Symfony and a front with VueJs but I didn't find one that really suited my needs on Github so I created this enhanced one.

### Built With

* [Symfony 4](https://symfony.com/4)
* [VueJs](https://vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Axios](https://github.com/axios/axios)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* composer 
    [Windows Installation](https://getcomposer.org/doc/00-intro.md#installation-windows)
    [Linux/MacOS Installation](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)

* npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Install composer and node dependencies
   ```sh
    $ composer install
    $ yarn install #recommended
    or
    $ npm install
    ```
2. Migrate database and fixtures
    ```sh
    $ php bin/console make:migration
    $ php bin/console doctrine:migrations:migrate 
    $ php bin/console doctrine:fixtures:load
    ```
3. Compile JS and CSS files
    ```sh
    $ ./node_modules/.bin/encore dev 
    ```
4. Execute built in Symfony web server
    ```sh
    $ php bin/console server:run
    ```

or

1. If you use Docker
    ```sh
    $ docker-compose up
    ```

### Vue development

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

### Test account

Thanks to fixtures, a test account can be create :

    ```sh
    admin@exemple.com
    1234
    ```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.md` for more information.


<!-- CONTACT -->
## Contact

Clemissile - [@clemissile](https://twitter.com/clemissile) - ganivetclement@gmail.com

Project Link: [https://github.com/clemissile/symfony-vue-starter](https://github.com/clemissile/symfony-vue-starter)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/clemissile/symfony-vue-starter.svg?style=for-the-badge
[contributors-url]: https://github.com/clemissile/symfony-vue-starter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/clemissile/symfony-vue-starter.svg?style=for-the-badge
[forks-url]: https://github.com/clemissile/symfony-vue-starter/network/members
[stars-shield]: https://img.shields.io/github/stars/clemissile/symfony-vue-starter.svg?style=for-the-badge
[stars-url]: https://github.com/clemissile/symfony-vue-starter/stargazers
[issues-shield]: https://img.shields.io/github/issues/clemissile/symfony-vue-starter.svg?style=for-the-badge
[issues-url]: https://github.com/clemissile/symfony-vue-starter/issues
[license-shield]: https://img.shields.io/github/license/clemissile/symfony-vue-starter.svg?style=for-the-badge
[license-url]: https://github.com/clemissile/symfony-vue-starter/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/clementganivet
