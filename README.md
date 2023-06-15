# Project Experience Summary

Just wanted to leave a small summary of my experience working on this project for myself and to help give more insight into the decisions I made and why I chose them over other options.


## Figma

- [Link to Figma file](https://www.figma.com/file/ZTziRVzeXgcguEh9kTUxZo/Rios-Landing-Page?type=design&node-id=0%3A1&t=htDspu7BnbX8bo5X-1)

## Live

- [Link to live website](https://rios-partners.vercel.app)




### Breakpoints Creation

I spent most of my time creating breakpoints for all the sections of the website in Figma for devices with screens ranging from 1440p all the way down to 375p width screens with a portrait aspect ratio. I was trying to make sure I was catching edge cases where the user has an iPad or some other form of a tablet.

### Anima Plugin

I thought this would be a good opportunity to try out the Anima plugin for Figma to convert a Figma file to a React project so it can be coded and deployed quickly. While it did work and create the breakpoints where I wanted them, some of the styling doesn't seem to translate well even with all the same dependencies installed as the web client. So looking back, I don't think I would use it again for the sake of having to go back and fix a lot of these small intricate bugs that are padding or font size based in some way. 

### Hamburger Menu Implementation

I tried a few methods of implementing a menu hamburger on the right side of the screen and I did settle on a particular method of creating one using just HTML CSS. But after wasting so much time trying to fix the issues with the breakpoints, I didn't really have much time left over to implement it in a meaningful way instead of just setting it up to function on the screen. I wanted to stay true to the assessment and try to stay under the 4-hour time constraints. the hamburger i set up is on the smallest break point.

### Future Improvements

- Use plain HTML instead of React to avoid strange styling issues
- Break up the CSS for each breakpoint and create reusable styles when possible
- Make each section/page its own component/folder with its style sheet for the sake of my own sanity and code cleanliness
- Get much more creative with the actual styling of the page with an eye for making it accessible for other kinds of people that may not have the same input controls or visual acuity as the average person. While still taking cues from websites in the FAANG tech companies

## Dependencies

- React

## Local Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



The page will reload when you make changes.
You may also see any lint errors in the console.


```
npm test
```

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


```
npm run build
```

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
