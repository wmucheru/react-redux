# React Redux

- [Create React App](https://github.com/facebook/create-react-app)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## Available Scripts

In the project directory, you can run:

- `yarn start`
- [`yarn test`](https://facebook.github.io/create-react-app/docs/running-tests)
- [`yarn build`](https://facebook.github.io/create-react-app/docs/deployment)

## Dockerize

Build the image locally or push to your own Docker hub account

- `docker build -t <username>/react-redux .`

## K8s deployment

Deploy using the scripts in the `k8s/` folder

- `kubectl apply -f k8s/`
