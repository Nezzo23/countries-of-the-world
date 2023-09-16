# COUNTRIES BY CONTINENTS

## Author
Nemanja Bajakic 

## Project Overview
- COUNTRIES OF THE WORLD is webpage intended to test users knowlage of geography.
- By clicking on the start button page generates a random country.
- After given country, user provides an answer on which continent is the country possitioned by clicking on one of the continents represented with icons. 

You can view the deployed website [here](https://nezzo23.github.io/countries-of-the-world/)

Here is a github repository [link](https://github.com/Nezzo23/countries-of-the-world/settings/pages)

![responsive](https://github.com/Nezzo23/countries-of-the-world/assets/133032134/d3d73bdd-d7f3-41d1-b3cb-5d367b01572b)




## FEATURES

### Simple Header
- On the top is simple title of the page

![header](https://github.com/Nezzo23/countries-of-the-world/assets/133032134/9938fa31-8ceb-4f58-a36d-3831809ff456)


### Continent sector
- User answers by clicking on one of the continents. When hovered over, pointer appears and background turns white.

![game](https://github.com/Nezzo23/countries-of-the-world/assets/133032134/1be2cfd6-1ee3-4f66-b642-630b1cd2287f)



### PopUp window
- When user provides an answer, pop up window shows up in the top of the page with Correct or Incorrect value.

![popup](https://github.com/Nezzo23/countries-of-the-world/assets/133032134/69f1e67f-b9e5-4106-a512-1e3b97807d19)


## TESTING
- All of the features on the page are working correctly. 

### Validation Testing
- HTML
   - No errors were returned through the official [HTML validator]()
![html-validator](https://github.com/Nezzo23/countries-of-the-world/assets/133032134/4bfef07f-7189-40c8-8f7b-3288e34d1d35)



- CSS
   - No errors were found through the [CSS validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnezzo23.github.io%2Fcountries-of-the-world%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).
![css-validator](https://github.com/Nezzo23/countries-of-the-world/assets/133032134/eac828f6-52a3-4cf9-9213-d7486b67b4ec)


### Compatibility and Responsive Testing
- I have tested that this page works on different browsers: Edge, Chrome, Safari.
- I confirm that this project is responsive and looks good on all the screen sizes using chrome dev tools.
- For the devices under 350px width it is recomended to use landscape mode.

### Outstanding Defects
- When starting a quiz everything functiones how it is suppost to. Later in the game, validation of answers is not accurate. it is possible that the problem lays in nested eventListener, but I couldn't ersolve it.

### Defects of Note
1. The website was designed mostly for desktop users, so optimisation for mobile devices needed to be made. They occure on the breaking points characteristic for this page.
2. The original images needed to be styled in photoshop.
3. When deployed, site didn't display icones, so path needed to be fixed.
4. First version was intended to displays 2 pop up windows: for random and validation. Later random country was redirected to the box ovar the start button.

## ACCESSIBILITY

### Lighthouse Audit
- The deployed website was run through lighthouse to check performance, accessibility, best practices and SEO scores. 

![lighthouse](https://github.com/Nezzo23/countries-of-the-world/assets/133032134/fcb9e037-03aa-4ef9-ad35-55fe84eae192)


## DEPLOYMENT
- The site is deployed in GitHub:
   1. Go to "Settings" tab in GitHub repository
   2. Select "Pages" from the menu on the left
   3. Once in "GitHub Pages" website link appears on top

## CREDITS
- Code Institute Student Template: [gitpod full template](https://https://github.com/Code-Institute-Org/ci-full-template).
- Images and icons were downloaded from: 
      - https://aussiechildcarenetwork.com.au
- tutorials from #whatsdev
