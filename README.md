# React Tutorial

# Food Ordering App

Header
-logo
-Nav Items
Body
-Search
-Restaurant Conatainer
-Restaurant Card
-Img
-Name of Res, Star Rating, Cuisine, delivery time
Footer
-Copyright
-Links
-Address
-Contact

# Two Types of EXPORT/IMPORT

- Default Export/Import

  export default Component; // export default Header;
  import Component from "path"; // import Header from "./Header";

- Named Export/Import (use it when you have to import multiple things form same file)

  export const Component; // include export before defining any component like export cost Header =...
  import {Component} from "path";

# CORS issue

- using allow CORS extension
- or just use corsproxy.io - you just have to include a url before the api url

# 2 types of Routing in web apps

- Client Side Routing
- Server Side Routing

# Redux Toolkit (RTK)

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store
- Slice (cartSlice)
- Dispatch(action)
- Selector

# Tyepes of Testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing (e2e testing)
