# Rails with React 

Ruby on Rails web application that uses React as its view layer.  

The primary technologies are:

- Rails 5.1.6
  - Ruby 2.5.3
  - Sqlite3
  - Webpacker
  - RSpec
- React 16
  - React router
  - Axios

## Installation

### Install Ruby 2.5.3

You'll need to install Ruby 2.5.3.  If you're on MacOS with [rbenv](https://github.com/rbenv/rbenv) call:

```
$ rbenv install 2.5.3
```

Otherwise, here is a fantastic, well maintained [resource for Ruby and Rails environment setup](https://gorails.com/setup/osx/10.14-mojave), which also includes instructions for Ubuntu and Windows.


### Run the app

1. Start the rails server with `rails s`
2. In a separate tab run the `bin/webpack-dev-server` script

_This is relevant during development._

```
$ bin/webpack-dev-server
```

This sets up the real time reloading that is standard with a basic React app. 

3. Visit three routes:

- `http://localhost:3000/`
- `http://localhost:3000/blogs`
- `http://localhost:3000/new_blog`
