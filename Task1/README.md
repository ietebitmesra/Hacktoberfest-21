# Task 1


## Steps to follow :scroll:

###    (a) Fork the Repository to your GitHub 
###    (b) Clone the Repository into your machine
```$ cd Task1 ```

### 1. Upload your image in `img folder` and rename as `yourusername.jpg`

### 2. Now, in index.html 

``` Paste the following code below <body> tag..

  .... other people code ....
  

<div class="github-main starting-div col-md-3 col-sm-6 my-12 mx-auto p-relative"> 
        <div class="github-wrapper">
          <div class="github-banner">
            <canvas
              width="320"
              height="200"
              style="background-image: url(./img/banner.jpg)"
            ></canvas>
          </div>
          <div class="github-details">
            <div class="github-dp">
              <canvas
               class="yourName-Pic"
                width="150"
                height="150"
                style="background-image: url('#')"
              ></canvas>
            </div>
            <div class="github-name">
              <h2>
                <b class="yourName-name"></b><span class="yourName-Description" ></span>
              </h2>
            </div>
            <div class="github-button">
              <a class="yourName-Portfolio" href="#">Portfolio</a>
            </div>
            <div class="github-bio">
              <p class="yourName-Bio" style="text-align: center"></p>
            </div>
          </div>
        </div>
        <script>YourName()</script> 
      </div>


<!-- Paste Above this line -->

```
### 3. Now, in index.js

``` Copy below code and paste at bottom of the file 

function YourName() {
    document.querySelector('.yourName-name').innerText="Enter your Name";
    document.querySelector('.yourName-Bio').innerText="Enter your Bio";
    document.querySelector('.yourName-Pic').style.backgroundImage="url('./img/yourName.jpg')";
    document.querySelector('.yourName-Description').innerText="your Description";
    document.querySelector('.yourName-Portfolio').attributes[1].nodeValue="your Portfolio URL";
}

```

Make sure to write all your details in the space provided.
(If you don't have a portfolio URL, put a '#' instead)


### 4. Send a PR with `Task1-yourUserName` and wait for it to get merged. 

View Your contribution at: https://ietebitmesra.github.io/Hacktoberfest-21/Task1/

### 5. Points Distribution

Complete the above mentioned tasks properly, as these are mandatory tasks which will count towards your score for task1.

(Optional task to score more)

- You can modify the design of the cards belonging to you keeping the dimensions of the card same.
- Add responsiveness to the website so that it looks more appealing!
- Also the contributors are free to open valid issues to work on which can contribute towards making the website better.

### Humble Request !important

All the enthusiastic contributors are requested to add their part carefully following the proper code block which is to be to be copy-pasted and then edited. Also,before sendng a PR, it would be great if you yourself render the html page at least once to see how your changes are manifested. There have been instances where a single contribution destroyed the entire layout of the page, even affecting others' contributions.

