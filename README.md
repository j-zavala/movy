# SPECTATE

## Technologies Used

### Back-end
1. PostgreSQL
2. Docker
3. Spring Boot

### Front-end
1. Styled Components
2. Fetch API
5. React
6. Amazon Web Services

## General Approach
I started with the frontend. By designing out the features of my MVP, I got a clearer idea of what I wanted in my initial
product. This is one of the benefits of starting here than in the backend. After doing some hand-drawn mockups of website and
I started building out my Styled Components for each React component in my frontend. By doing this, I was able to build a **design system.**
This allowed me to just apply styles instead of creating the styles as I also build out the component.

After the frontend, I started my microservices. I started with the Eureka Server, moved to to the Zuul-Gateway API to finally my app's 
own API. I then made sure each worked with ```maven clean install```. I also used Postman to test my API CRUD calls. Then I dockerize the application setting up my 
docker-compose.yml and made sure that configuration was set up right. 

Finally, I connected the backend with the frontend. In the beginning, I have a different project in mind that I was working at,
but I quickly pivoted to this as a project that could be done in less than 10 days.

I was then in a good place to deploy to production.

## Unsolved Problems
1. Signup/Login - I need to implement on the front end and backend.
2. Good Vibes Button - I would like to go through an iterable list of positive messages for future state.
3. Styling - I wanted to add animations using Adobe After Effects and Airbnb's Lottie integration.
4. Logo - I used an svg from thenounproject.com. I ideally I wanted to design my own logo to have more ownership of the project.

## Deliverables

| Monday 11/04 | Tuesday 11/05 | Wednesday 11/06 | Thursday 11/07 | Friday 11/08 |
|--------------|---------------|-----------------|----------------|--------------|
| Front-end    | Front-end     | Front-end       | Front-end      | Front-end    |

| Monday 11/11 | Tuesday 11/12 | Wednesday 11/13 | Thursday 11/14 | Friday 11/15 |
|--------------|---------------|-----------------|----------------|--------------|
| Back-end     | Back-end      | Back-end        | Back-end       | Back-end     |

## Dependencies
+ Reach Router
https://www.npmjs.com/package/@reach/router
+ Styled Components
https://www.npmjs.com/package/styled-components
+ React
https://www.npmjs.com/package/react

## User Stories
* As User, I want sign up and login to favorite and save movies.
* As a User, I want to search for any movie that comes to mind.
* As a User, I want to get more information about a movie form description to actors in it.
* As a User, I want to be able to load more movies than what I am currently being shown.
