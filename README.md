# LOHONO STAYS TASK - REACT (TYPESCRIPT) NEWS APPLICATION

---

A simple news application which renders the news in a paginated way. The application uses Typescript. It invests the use of Pagination Logic, Search Capability, Hooks etc.
Some of the key tasks were:

1. `Search` is an input. `Prev` and `Next` are buttons to pagination navigation controlling
   the current page number. You add `1` for `Next` and subtract `1` for `Prev`
2. Both `Search` and `Pagination` state should be synchronized with `search` and `page`
   query parameters.
3. The values from `search` and `page` should be passed to the `getNewsArticles`
   provided earlier to fetch data.
4. This data should be used to construct the news article list presented in the render above.
5. Each item has a button upon whose click a context menu is opened. This context should
   have `Edit` and `Delete` as an option.
6. Upon clicking of any of the options of the context, you need to show an alert with
   following string `id: #1, action: #2` with `#1` as the id of the item and `#2` as the text of
   the context menu selection (`Edit` or `Delete`).

---

### Instruction for Running the code

This application is a simple CRA application with its tempate set to typescript. Therefore, to run the application

1. Clone the repository from gitHub
2. Open up your terminal in the same folder as your repo.
3. Type in `npm install` or `yarn` for installing the module dependency.
4. After installing, type in `npm start` or `yarn start` in your terminal to start the application.
5. Your application should be up and running on localhost:3000

Similarly to build the application you can do a simple `npm run build` or `yarn run build`.

---

### Dev Notes

The application makes the use of `master` branch and have a TDD (Trunk based development) approach.
There are no branches made at the moment for the sake of simplicity and convenience, however when more developers are working, adopt the TDD policy for maintainence.

1. The `components` folder in the application are the common renders which will be reused throughout the application and should be made generic in nature. This will ensure the business requirement for a consistent UI across the appliation.

2. To ensure that `principle of separtion` is followed, do not keep the render and the logic in the same file, instead use the HOC, Render Props or Hooks pattern to decouple the rendering from the logic.

3. For better structural typing, keep all the interfaces in a common folder with right naming convention.
