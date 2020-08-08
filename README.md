# About the project.

This project is about creating a web application taht allows users to run natural language processing (NLP) on any text that user enters. This text could be a news article. It uses an API called meaning cloud. There is also an alternative for meaning cloud called Aylien API but it is not used as Aylien has stopped taking new subscriptions.

API details are at:
https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/what-is-sentiment-analysis

The goal of this project is to practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Jest testing
- Get the taste of Natural Language Processing

It also uses service workers for offline caching and webpack for setting up build process.

# How to run this project locally

## Client
- Build your client using webpack prod config by running below command
  `npm run build-prod`

  This should create a `dist` folder with all the artefacts

## Server
- create `.env` file inside `./src/server`
- enter API_KEY for meaning cloud API as below:
```
API_KEY='<YOUR_API_KEY>'
```
- Now, switch your current directory to ./src/server and run `node index.js`
- You should see the message on your server console as
`Example app listening on port 3000!`
- Now, go to browser and enter `https:localhost:3000`

# Test coverage using JEST

![img](https://github.com/dilipagheda/evaluate-news-nlp/blob/master/screenshots/jest_test_report.PNG)


# Home page - Screenshot

![img](https://github.com/dilipagheda/evaluate-news-nlp/blob/master/screenshots/homepage.png)
