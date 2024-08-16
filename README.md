# Interactive Portfolio Card
This project is an interactive portfolio card with a sleek, space-themed design. It features a responsive layout, smooth animations, and dynamic content loading.

## Features
- Responsive design that works on desktop and mobile devices
- Interactive card with front and back sides
- Parallax effect that responds to mouse movement
- Typing animation for the tagline
- Dynamically loaded project list
- Social media links
- Skills showcase
- Space-themed background with twinkling stars

## Setup and Customization
1. Clone this repository to your local machine.
2. Open the `index.html` file in your preferred text editor.
3. After that you can edit it of your choice and enjoy your portfolio web.
### Customizing Content

- **Profile Picture**: Replace the `src` attribute of the `<img>` tag with your own image path.
- **Name**: Change the text inside the `<span id="name">` tag.
- **Tagline**: Modify the text inside the `<p id="tagline">` tag.
- **Skills**: Add or remove `<span class="skill">` elements within the `<div class="skills">` section.
- **Social Links**: Update the `href` attributes of the social media links with your own profiles.
# Changing Colors
To change the color scheme, modify the following CSS variables in the `styles.css` file:
```css
:root {
    --primary-color: #9b59b6;
    --background-color: #1a1a2e;
    --card-background: rgba(22, 33, 62, 0.8);
    --text-color: #ffffff;
}```

### Customizing Projects
In the `script.js` file, locate the `projects` array and modify it to include your own projects:
```js
const projects = [
    'Your Project 1',
    'Your Project 2',
    'Your Project 3',
    'Your Project 4'
];```

# Credits
- [@volksgeistt](https://volksgeistt.tech)
