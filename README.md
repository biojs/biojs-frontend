# biojs-frontend

> Frontend for BioJS as a part of GSoC 2018.

## Status

[![Build Status](https://travis-ci.org/biojs/biojs-frontend.svg?branch=develop)](https://travis-ci.org/biojs/biojs-frontend)  <img src="http://www.bichromate.org/images/browserstack.png" height=25 />
## Build Setup

``` bash
# clone GitHub repository
git clone https://github.com/biojs/biojs-frontend

# change directory
cd biojs-frontend

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Website Documentation

### About
#### The about section is an informational page which provides insights about BioJS and its foundation.

---

### Component
#### A dynamic page for each component.

The component page gets the data from backend through an API call and renders it to display all the information for a specific component. A watcher has been added to the component to render the details dynamically when the component changes.

##### API structure

###### Various methods have been implemented:
1. fetchData() fetches the data from the database through an API call and stores it.
2. computeLicense() returns "Not available" is a license is not present in the data and returns the license otherwise.
3. isAuthor() shows the author under the component's name is an author is present in the data received otherwise it does not show the author.

```
<p id="author" v-if="isAuthor()">..rendered if author is present..</p>
<p>{{description}}</p>
<div id="install">..renders the npm install command..</div>
<div id="tags">..renders the tags..</div>
<div id="social>..displays social stats (stars, watchers, contirbutors, forks)..</div>
<div id="stats>..displays general stats (downloads, last modified, commits, version, created at, open issues)..</div>
<div id="contributors></div>
<div id="legal>..displays the license information if it exists..</div>
```
---

### Components
#### The components page

The components page renders the top ten components (icon, name, author, description, tags, downloads, stars and last modified) from the data received by the API call. It also has a search bar to search amongst all the components and displays top 3 component for each category.

##### Searchbar

A fuzzy search has been implemented. You can find the details of the search component in its documentation.

```
<div id="component" v-for="component in components">
	 ..loop through the ten components..
	<div class="image"
	:style="{backgroundImage: 'url(' + component.icon_url + ')' }">
	..display the icon..
	</div>
	<div id="componentInfo">
		..render all the other component information..
	</div>
</div>
```

---

### ComponentStat
#### A component for displaying inidividual statistics like stars for a component under the "Social" and "Stats" category.

The ComponentStat component renders the stat for each property. It renders an image and the statistic corresponding to that property. It is used in the "Component" component and is used in the individual page of a component to show the stats. 

```
<div id="stat">
	<img :src="imageURL" :alt="propName" />
	<span>{{ propValue }} {{ propName }}</span>
</div>
```
NAME |TYPE | DEFAULT | NOTES
------------ | ------------- | ------------ | ----------------------------
propName | string | "" | The name of the property. e.g.: stars, downloads, etc.
imageURL | string | "" | URL of the image of the property.
propValue | any | "" | Statistic of the property (a numerical in most cases).

---

### ComponentTable
#### Component table for loading the top 3 components for various categories: Most downloaded, Top starred, and Most recent.
This component is a dynamic table to load and render the top 3 components of the desired category. An API call is made through Axios (npm package) for the desired category once the component is mounted.

##### UI

```
<div id="componentTable">
	<div id="table">
		...
	</div>
</div>
```

NAME | TYPE | DEFAULT | NOTES
------------ | ------------- | ------------ | -------------------------------------------------
title | string | "undefined" | Title defines the heading of the table which is the category desired.
components | string | "undefined" | Components prop accepts the category required. For example, passing "most_recent" would render the three most recent components.

---

### Contributor
#### Render each contributor in the list of contributors in the component page.
The Contributor component renders an image and the name of the contributor.

```
<div id="contributor">
	<img :src="imageURL" :alt="name" />
	<span>{{ name }}</span>
</div>
```

NAME | TYPE | DEFAULT | NOTES
------------ | ------------- | ------------ | ----------------------------
imageURL | string | "" | Circular icon of the contributor.
name | string | "" | Name of the contributor.

---

### Guide
#### The guide component is indeed the documentation for the BioJS website.
BioJS uses PropDoc with a custom stylesheet for enhanced responsiveness.

```
<div id="documentation">
	<prop-doc :component="component_name"></prop-doc>
</div>
```

---

### Heading
#### The heading component is meant for all the headings in each section.
Heading component is undoubtedly the most used component. It defines the heading for each section. It accepts two props: title and color.

```
<h1 :style="{color: color}">
	<u>{{ title }}</u>
</h1>
```

NAME | TYPE | DEFAULT | NOTES
------------ | ------------- | ------------ | -------------------------------------------------
title | string | "undefined" | Title simply accepts the name of heading of the section, for instance, "Components" for the Components' page.
color | string | "#007E3A" | As you can see, almost all the headings in the website are green colored. Except one! The color component has a default value, the green color, and accepts any other color in any format acceptable by SASS (RGBA, Hex, etc.)

---

### Home
#### The home component is a master component which combines most of the other components and renders the landing page.
It uses various major components and compiles them to produce the home page: nav-bar, heading, visualization, component-table, testimonial.

```
<div id="cover">
	...
</div>
<div id="visualize">
	...
</div>
<div id="components">
	...
</div>
<div id="testimonials">
	...
</div>
<div id="about">
	...
</div>
```
---

### NavBar
#### A custom navigation bar for the website
The navigation bar is made up with pure CSS. Vue-Router has been used for links to various pages.

```
<div class="navBar">
	<div id="nav">
		<router-link to="/"><span>..</span></router-link>
	</div>
</div>
```

NAME | TYPE | DEFAULT | NOTES
------------ | ------------- | ------------ | -------------------------------------------------
isShadow | boolean | true | The navigation can either have a shadow at the bottom as observed in this page or it can be without a shadow as observed in the landing page.

---

### SearchComponent
#### Search bar to query across all the components.
The SearchComponent component queries across all the components' names and tags. A fuzzy search is implemented, more about which can be found here: https://github.com/jeancroy/fuzz-aldrin-plus

---

### Testimonial
#### Testimonials for the BioJS landing page written by awesome bioinformaticians!
The testimonial component consists of three static testimonials as seen in the home page. It implements core vue-bootstrap design, the b-card template.

```
<b-card-groups>
	<b-card v-for="" :key="">
	...
	</b-card>
</b-card-groups>
```

---

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
