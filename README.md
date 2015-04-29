# [DUSTI.X(yz)](http://www.dusti.xyz/) [![devDependency Status](https://david-dm.org/opendata-stuttgart/opendata-stuttgart.github.io/dev-status.svg)](https://david-dm.org/opendata-stuttgart/opendata-stuttgart.github.io#info=devDependencies)

Bezahlbare open source DIY Feinstaub-Sensoren

## Local builds

1. Create development environment

  1. Clone [git](http://git-scm.com/) repository

    ```
    git clone https://github.com/opendata-stuttgart/opendata-stuttgart.github.io.git
    ```

  2. Install [Ruby](https://www.ruby-lang.org/en/downloads/) `>= 1.9.3`

  3. Install [Bundler](http://bundler.io/)

    ```
    gem install bundler
    ```

  4. Install [Jekyll](http://jekyllrb.com/)

    ```
    bundle install
    ```

  5. Install [Node.js and npm](https://docs.npmjs.com/getting-started/installing-node)

  6. Install javascript dependencies

    ```
    $ npm install -g grunt-cli
    $ npm install -g bower
    $ npm install
    $ grunt
    ```

2. Run Jekyll

  ```
  bundle exec jekyll serve
  ```

3. Open [`http://localhost:4000/`](http://localhost:4000/) in your browser


## License

All code is licensed under the MIT License.

### Third party code

- [Bootstrap](http://getbootstrap.com/) is licensed under the MIT
  License, Copyright (c) 2011-2015 Twitter, Inc.

- [jQuery](https://jquery.com/) is licensed under the MIT License,
  Copyright (c) 2014 jQuery Foundation and other contributors.
