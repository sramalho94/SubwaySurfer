# SubwaySurfer

### Project 2: Subway Review Web App

### By: Stephan D Ramalho

---

![picture](https://static01.nyt.com/packages/flash/photo/20090610-Lens-Showcase-SubwayArt/016-20090610-Showcase-SubwayArt.jpg)

---

# Links

## Component Hierarchy

[Component Hierarchy](https://lucid.app/lucidchart/e9698d3c-e009-4e7d-ac34-87f849b5572b/edit?viewport_loc=-21%2C64%2C1560%2C756%2C0_0&invitationId=inv_b7f22fc4-0ce5-498a-a2b3-58a97358ad39)

## Trello

[My Project Board](https://trello.com/invite/b/poozAc5o/ATTI56f231de0694f4e9c084f1d216926f18266D4040/subway-surfer)

## ERD

[ERD](https://drive.google.com/file/d/1Nqq-NP9CVvOiskwQ7pi0_ouXn9zHwBCn/view?usp=sharing)

## Heroku Deployment

[Heroku Link](https://subway-surfers2022.herokuapp.com/)

---

![picture](https://imgur.com/oa5R5Va.png)

---

## App Description

---

The Subway Surfers Web App is a way for users to write reviews of subway lines.
The landing page contains a navigation bar as well as section that displays all reviews. The nav bar serves as a router that takes users to a sign up form, a write review form, and a button that takes the user back to the landing page. Within each review are buttons that allows for the deletion and update of the specific review.

---

![picture](https://imgur.com/whjJ6jN.png)

---

## Challenges Face

---

I think my main challenge was, as usual, learning how to break a project into bare basic components and building it up from there. I do think I did a better job of that during this project than I did with Project 1. I also bit off more than I could chew when it came to tracking whether or not a specific user was currently logged in to write reviews. To overcome that barrier I made a generic Anonymous user that is used for all reviews.

---

## Entity Relationships

---

There are three schemes in the App. User, Review and Subway.
The relationship between User and Review is one to many; as one user can post multiple reviews but a review can only be posted by one user. The relationship between Review and Subway is Many to One; as a Review can only be about one Subway line but a Subway line can have many reviews. The relationship between Subway to User is not direct, they are linked through the Review Model.

---

## Component Hierarchy

---

The heirarchy begins with the App at the top, then it goes to the Landing Page/Main Page. The Landing Page will have a nav bar that the user can use to navigate to a sign up page, a write review page, and back to the home page. The landing page will be populated with reviews. Within each review there are buttons that allow for the deletion of that review, or route the user to a form that allows them to edit that specific review.

---

## Technologies Used

---

-Mongo DB
-Express
-React
-Node JS
-Nodemon
-Cors
-Morgan
-Insomnia

---

## Acknowledgments

---

I'd like to thank all my peers who helped me when I was struggling to meet the Update requirement for MVP, mainly Jeremy and Kalen. With John and Austin's help I was able to stay on track and manage my time effectively. I'd also like to shout out Ben's lectures on the backend related subjects we've covered, they definitely helped solidy my understanding of key concepts. I'd also like to thank
my friend and mentor Ziquan Miao who helped improve my understanding of React and how props are passed down.

---

![picture](https://imgur.com/Ix56Cuo.png)

---

## Future Updates

---

I'd like to add a component that displays all subway calls, this is a relatively simple addition that make the Project a little more feature rich. I'd also like to learn how to monitor which specific user is logged in and how I can use that information in the review writing process. I'd also like to add a form that allows a user to add a new subway line to be reviewed.
