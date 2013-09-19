# Ona UI

## Install
Make sure you have nodejs (atleast v 0.8.19) and npm installed

To update node, run
```
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n stable
```

Install the dependencies

```
$ bower install
```

```
$ npm install
```

## Run
```
$ grunt server
```

# Create Distribution
```
$ grunt build
```

This will create a ./dist directory with all the production files bundled

## Test
You must have karma installed in your global node packages

```
$ npm install -g karma
```