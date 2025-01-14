 HEAD
# Flatiron Cake Off

Today you'll be using a local API to build out the frontend for an app for a new
show, _Fantastic Flatiron Cake Off_! Bakers submit submit photos of their cakes,
and viewers submit comments on the cakes.

## Demo

Use this gif as an example of how the app should work.

![demo gif](https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-flatabeer/cakeoff.gif)

> To view in VSCode, right click on the README.md file and select "Open
> Preview".

## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/cakes](http://localhost:3000/cakes)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).

## Deliverables

As a user, I can:

1. See the first cake's details, including its **name, image, description, and
   reviews**, when the page loads. You will need to make a GET request to the
   following endpoint to retrieve the cake data, along with its associated
   reviews:

   ```txt
   GET /cakes/1

   Example Response:
    {
      "id": 1,
      "name": "Let It Drip",
      "description": "Quadruple chocolate cake just drip drip dripping in flavor!",
      "image_url": "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/let-it-drip-cake.jpg",
      "reviews": [
        "Yummy Yummy Yummy!",
        "Is this a real cake, or is this just fantasy?",
        "I've always hated cakes with no flavor, so this is absolutely delightful.",
        "Best cake ever!! I love you!!!"
      ]
    }
   ```

2. See a menu of all cakes in the `<nav>` element on the left side of the page
   when the page loads. You will need to make a GET request to the following
   endpoint to retrieve the cake data:

   ```txt
   GET /cakes

   Example response:
   [
    {
      "id": 1,
      "name": "Let It Drip",
      "description": "Quadruple chocolate cake just drip drip dripping in flavor!",
      "image_url": "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/let-it-drip-cake.jpg",
      "reviews": [
        "Yummy Yummy Yummy!",
        "Is this a real cake, or is this just fantasy?",
        "I've always hated cakes with no flavor, so this is absolutely delightful.",
        "Best cake ever!! I love you!!!"
      ]
    },
    {
      "id": 2,
      "name": "My Cake is Poppin, My Cake is Cool",
      "description": "My Cake is Poppin, My Cake is Cool is elegant, refined, assured, tasty... This cake shows that fruit cakes do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.",
      "image_url": "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/popcorn-cake.jpg",
      "reviews": [
        "Lil Mama's fav cake!!!",
        "Like a river of joy"
      ]
    }
   ]
   ```

3. Add a new review to the page when the review form is submitted. **No
   persistence is needed**.

### Bonus Deliverables

These bonus deliverables are here if you want an extra challenge and won't
affect your score. **Make sure to commit your work to save your progress before
attempting the bonus deliverables!**

1. Remove a review from the page when it is clicked. (Note: no persistence is
   needed; it's fine if the review shows up again when the page is refreshed)

2. Click a cake in the `<nav>` element on the left side of the page and have
   that cake's details displayed in the main section of the page, replacing the
   cake that is currently being displayed. Note that you may have to make an
   additional GET request to access the cake's details.

## Extra Bonus

These extra bonus deliverables involve using `fetch` to update data on the
`json-server` backend by using `POST`, `PATCH`, and `DELETE` requests. These are
meant for an extra, extra challenge and won't affect your grade. **Make sure to
commit your work to save your progress before attempting the extra bonus
deliverables!**

1. When the review form is submitted, the review should be saved on the server
   in addition to being displayed in the list of reviews. You will need to make
   a request that follows this structure. Note that the body must contain an
   array of **all** reviews for the cake, including your newly added review.

   ```txt
   PATCH /cakes/:id

   Request Headers: {
     Content-Type: application/json
   }

   Request Body: {
     "reviews": [
        "old review(s)",
        "new review"
      ]
   }
   ----

   Example response:
    {
      "id": 1,
      "name": "Let It Drip",
      "description": "Quadruple chocolate cake just dripping in flavor!",
      "image_url": "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/let-it-drip-cake.jpg",
      "reviews": [
        "old reviews(s)",
        "new review"
      ]
    }
   ```

2. When the description form is submitted, the cake's description should be
   updated on the server in addition to being updated on the page. You will need
   to make a request that follows this structure:

   ```txt
   PATCH /cakes/:id

   Request Headers: {
     Content-Type: application/json
   }

   Request Body: {
     "description": "new description"
   }
   ----

   Example response:
    {
      "id": 1,
      "name": "Let It Drip",
      "description": "new description",
      "image_url": "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/let-it-drip-cake.jpg",
      "reviews": [
        "old review(s)",
        "new review"
      ]
    }
   ``
#Overview#
The Cake-Off Project is a fun and interactive cake display application where users can view different cakes, read customer reviews, and see detailed information about each cake. This project allows you to fetch cake data from a JSON file and dynamically display it on the webpage. It features clickable cake names that display cake details, reviews, and descriptions.

Features
Cake List: Displays a list of cakes with clickable names.
Cake Details: When a cake name is clicked, detailed information such as the name, image, description, and customer reviews are displayed.
Customer Reviews: Users can view and add their own reviews to cakes.
Dynamic Data: Cake details are fetched from a JSON file, making it easy to update the data without modifying the HTML directly.
How to Use


Clone or download the repository.
Open the index.html file in your browser to view the application.

Click on a cake name in the list to see its details, description, and reviews.
Add your own review to any cake by filling in the review form and clicking "Add review."

Project Structure
index.html: The main HTML file containing the structure of the application.
index.js: The JavaScript file responsible for fetching the cake data, displaying the cake list, and handling interactions.
db.json: The JSON file containing the cake data, including names, descriptions, and reviews.
styles.css: The CSS file containing the styling for the application.


assets/: Folder for any additional images or assets related to the project.
Technologies Used
HTML: For creating the structure of the application.
CSS: For styling the application.
JavaScript: For fetching the data, managing events, and dynamically updating the page.
JSON: For storing and managing the cake data.# phase-trial
# cake-off-challenge
 8163710382fcf1435fa12681cebc1d09acdaa001
