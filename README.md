
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/brian-bowen-36456a7/)



<!-- PROJECT LOGO -->
<br />
<!-- <p align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h1 align="center">ALGO APP</h1>

  <p align="center">
    The study app that will help you ACE and pass your next technical interview!
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
 
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
<p>Part portfolio project, part personal study helper, it's a collection of various algorithm problems I've solved with detailed notes/pseudo code, solutions, and Big-O analysis. Key features of the project combining stack, tab, and drawer navigators, filter by difficulty, and a favorites section. Also, it's has cross-platform functionality with adaptable screen sizing.</p>
<br/>
<div>
<img src="./assets/Screen Shot 2021-03-30 at 12.54.27 PM.png"  height="650" />

<img src="./assets/Screen Shot 2021-02-26 at 10.04.31 PM.png"  height="650" />
</div>




### Built With

* [JavaScript]()
* [React Native](https://reactnative.dev/)
* [Redux]()
* [Expo](https://expo.io/)
* [Xcode](https://docs.expo.io/workflow/ios-simulator/)
* [Android Studio](https://developer.android.com/studio)




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
<ul>
  <li><a href="https://expo.io">Expo SDK</a></li>
  <li><a href="https://docs.expo.io/workflow/ios-simulator/">Native iOs Simulator</a></li>
</ul>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bbowen1036/algo-app
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run app
   ```sh
   npm start
   ```
4. Launch Simulator
   ```sh
   [for iOs]: i
   [for android]: a
   ```




<!-- USAGE EXAMPLES -->
## Usage

<img src="./assets/2021-03-30 16.05.07.gif" height="70%" width="70%" >




<!-- ROADMAP -->
## Features

- ### <div style="color: red">Filter by level</div>
```

const initialState = {
  problems: PROBLEMS,
  filteredProblems: PROBLEMS,
  favoriteProblems: [],
};
------------------------------
case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredProblems = state.problems.filter(problem => {
        if (appliedFilters.easy && problem.isEasy) {
          return true
        }
        if (appliedFilters.medium && problem.isMedium) {
          return true
        }
        if (appliedFilters.hard && problem.isHard) {
          return true
        }
        if (appliedFilters.blackDiamond && problem.isBlackDiamond) {
          return true
        }
        return false
      });

      return { ...state, filteredProblems: updatedFilteredProblems}
```
- ### <div style="color: red">Favorites tab</div>
```
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteProblems.findIndex(
        (problem) => problem.id === action.problemId
      );
      if (existingIndex >= 0) {   // problem is already in favorites -> need to remove
        const updatedFavProblems = [ ...state.favoriteProblems ];
        updatedFavProblems.splice(existingIndex, 1)
        return { ...state, favoriteProblems: updatedFavProblems }
      } else {
        const problem = state.Problems.find(problem => problem.id === action.problemId);
        return { ...state, favoriteProblems: state.favoriteProblems.concat(problem)}
      }
```

- ### <div style="color: red">Stack and Drawer Navigators
- ### <div style="color: red">Cross platform functionality with adaptable screen sizing</div>
```

const ProblemsFavTabNavigator =
  Platform.OS === "android" && Platform.Version >= 21
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });
```
- ### <div style="color: red">React Hooks

```
const ProblemDetailScreen = (props) => {
  const availableProblems = useSelector((state) => state.problems.problems);
  const problemId = props.navigation.getParam("problemId");
  const currentProblemIsFavorite = useSelector((state) =>
    state.problems.favoriteProblems.some((problem) => problem.id === problemId)
  );

  const selectedProblem = availableProblems.find((problem) => problem.id === problemId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(problemId));
  }, [dispatch, problemId]);

  useEffect(() => {
    // props.navigation.setParams({problemTitle: selectedProblem.title})
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);


  useEffect(() => {
    props.navigation.setParams({ isFav: currentProblemIsFavorite})
  }, [currentProblemIsFavorite]);

  .... }
  ```


<!-- CONTACT -->
## Contact

Brian Bowen - [LinkedIn](https://www.linkedin.com/in/brian-bowen-36456a7/) 
<br/>
Email - <a href="mailto:bbowen1036@gmail.com">bbowen1036@gmail.com</a>

Project Link: [https://github.com/bbowen1036/algo-app](https://github.com/bbowen1036/algo-app)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
