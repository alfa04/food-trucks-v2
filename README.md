<div>
  <h1 align="center"><a href="https://foodtruckv2.netlify.app/">🌮🚚 Fresh Flavors on Wheels!  🍔🚚 </a></h1>
  <strong>
    Get ready to taste victory on wheels! Find the hottest food trucks in town, right at your fingertips!
  </strong>

  <div>
    <img
      alt="Tacos truck"
      src="https://as2.ftcdn.net/v2/jpg/01/84/80/31/1000_F_184803125_DWAPNK9iw5qBD0u7Bs72fYYHLmgEuJ6y.jpg"
    />
  </div>
  <p>Whoa there, adventurer! 🚧 Danger ahead! ⚠️ 
The notorious Page 15—a mandatory pit stop on this wild ride! 🛑 </p>

</div>

<hr />

<!-- prettier-ignore-start -->
[![Netlify Status](https://api.netlify.com/api/v1/badges/7d65cd85-1868-48cc-b26b-090d7f1812b6/deploy-status)](https://app.netlify.com/sites/foodtruckv2/deploys)
<!-- prettier-ignore-end -->

## Prerequisites

- You’ll need to have Node >= 14 on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.


## Setup

> If you want to commit and push your work as you go, you'll want to
> fork
> first and then clone your fork rather than this repo directly.

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```shell
git https://github.com/alfa04/food-trucks-v2.git
```

This may take a few minutes. 

Then run the following command:

```shell
npm install
```

## Running the app

To get the app up and running (and really see the best tacos on town), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

You can also open
[the deployment of the app on Netlify](https://foodtruckv2.netlify.app/).

## Running the tests

```shell
npm test
```

This will start [Jest](https://jestjs.io/) in watch mode.

## CI / CD

To maintain the integrity and quality of our codebase, we have implemented a Continuous Integration (CI) pipeline using GitHub Actions. This pipeline automatically runs tests and deploys the project whenever changes are made to the main branch or when pull requests are opened against it. 
The pipeline ensures that all contributions undergo thorough testing before integration into the main codebase. Upon successful testing, the project is deployed to Netlify for further validation. Contributors are encouraged to review the pipeline's configuration in the .github/workflows directory and ensure that their changes adhere to the established standards. 

---

## Strategic Decisions and Development Approach

Let me walk you through my decision-making process for this project. Initially, I contemplated developing a .NET Core API to support the frontend client. However, given the constraints of time, I opted to explore if the website offered a public API—and fortunately, it did. This led me to leverage their API and build a React app, aligning well with the UI position I'm pursuing. I aimed to inject creativity into the challenge while showcasing my proficiency in React, though striking a balance was occasionally challenging.

To streamline development and minimize time spent on CSS, I devised a 'reader' concept. While this approach seemed promising initially, it required some workarounds, particularly regarding error handling. I utilized the 'create-react-app' template for its efficiency in producing polished results swiftly.

I hope you appreciate this innovative solution for discovering food trucks in San Francisco!

## Future work

There are numerous areas for improvement in the project, so I'll provide a concise list:

**Unit Testing and Code Coverage:** Ensure all components have comprehensive unit tests and consider implementing code coverage analysis. While it doesn't guarantee test quality, it provides insights. Additionally, incorporate tools to assess test quality.

**Pipeline Enhancement:** Enhance the pipeline with static code analysis and performance checks aligned with core web vitals. Visual regression tests could complement this, ensuring visual consistency.

**Accessibility:** Enhance accessibility by implementing accessibility best practices and conducting accessibility testing.

**Documentation Enrichment:** Enrich documentation by adding architecture diagrams for clarity and understanding.

**React Exploration:** Add new features to leverage other hooks and design patterns, such as useContext or performance-oriented ones like useMemo/useCallback (spoiler alert: react compiler will remove this need). Utilize code splitting and dynamic imports for efficient component loading.

**Component Refinement:** Refactor components to be more agnostic and consider consolidating them into a UIBox, establishing a coherent design system.

**Feature Additions:** Implement filters and sorting options for the created list to enhance user experience.

**TypeScript Migration:** Consider migrating the project to TypeScript for improved type safety and developer experience.

**Translations:** Integrate translation support to make the project accessible to a wider audience.