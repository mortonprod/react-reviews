# React Review Component

A review component based on bootstrap and animate.css. Written in typescript.
Setup with

* Node and docker.
* Redux and ismorphic react.
* Webpack and webpack-dev-server.
* Test driven development with jest.
* Deployed to npm

CHECK THE BRANCHES. If you just want the component then run

```
npm install react-review
```

This will come with styles attached to component.

##Functionality

* A default initial animation when entering the component
* Can replace the child component which it encapsulates and hide reviews.
* Add reviews through props 
	* Name
	* Message
	* Rating
* Add your own look with props 


## Adding to the repository 

If you want to play about with this component
```
git clone https://github.com/mortonprod/react-reviews <Your-branch-name>
```

##The different branches

Each branch will be started up in different ways. Each part is as simple as possible
so you can see the progression in complexity. The idea is to go from component to deployment


###Hot module replacement
You can setup a webpack-dev-server running through a node js proxy server with:
```
gulp 
npm run start:dev
```

This will create node server and run webpack dev server from it. Webpack dev server acts as a proxy.

### Test driven development with jest.

Tests are run with 

```
npm run tests
```

###Redux and isomorphic react 

###Inclusion of docker