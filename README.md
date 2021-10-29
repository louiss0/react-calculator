
# Project Commands 

- This template is a docker-centric template that runs only using docker commands

- Read the docker-compose yaml file to understand these commands  

<br/>

###  Start up the server

```
docker-compose up -d server 
```
<br/>

### Build production image

- Use the name of the project folder plus build as the image name . Ex 
    ```
    docker build -f ./docker-files/prod.dockerfile -t react-template-build    
    ```

```
docker build -f ./docker-files/prod.dockerfile -t {{tag name}} 
```
<br/>

### Run npm 
```
docker-compose run --rm npm   
```


