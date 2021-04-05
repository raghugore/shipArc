## Common

1. Use prettier as your default code formatter. Get the VSCode extension if not already installed.
2. File name should be all in small case seperated by '-' wherever required. Only files inside components directory will be pascal case. Eg. BottomSheets.tsx
3. Entire code should follow Javascript coding standards.

## Front End

1. All components inside /pages directory map to a URL, so the file name should be all small case and separated by “-” in case of multiple words. Eg. /pages/my-cart.tsx
2. The components inside /pages should be as small as possible and the actual component implementation should reside inside /components directory.
3. The components inside /components directory should be pascal case. Eg. BottomSheets.tsx
4. Use ReactQuery for your network requests instead of Axios inside useEffect hook. This will significantly improve the performance of the site and make your code much cleaner to reason about.
5. Make resuable components wherever possible. The strength of React is in its component model and props drill-down. Make the best use of this. Try not stuff everything inside one single monolithic component.
6. Please comment/remove your console.log statements after debugging on your local machine. You need to have a strong reason to explain why a console.log statement is printing something when the code is deployed to Dev or QA.
7. Every call to setState rerenders the component. In order to improve page performance your rerenders should be kept to the minimum. Wherever possible directly derive the state at component function level itself rather than in useEffect

## Back End

1.
