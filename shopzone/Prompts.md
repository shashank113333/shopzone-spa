
# Phase 1: Base Routing Architecture
*Goal:* Setup client-side routing without page reloads.

**Prompt Used:** "I have created Home, Shop, and Contact components. How do I configure React Router v6 in App.jsx to navigate between them without reloading the page?"
**AI Response & Learning:** The AI explained the difference between traditional MPAs and SPAs, and guided me to use `<BrowserRouter>`, `<Routes>`, `<Route>`, and the `<Link>` component instead of standard `<a>` tags.
**Prompt Used:** "How do I implement dynamic routing for individual products? When I click a product on the Shop page, it needs to open a details page for that specific item."
**AI Response & Learning:** The AI introduced the "useParams()" hook. I learned how to extract the ":id" from the URL and use it inside "useEffect" to fetch specific product data from "dummyjson.com/products/${id}".

## Phase 2: Global State Management (CartContext)
**Goal:** Manage a global shopping cart accessible across different routes.

**Prompt Used:** "I want to add a "CartContext" so that when a user clicks "Add to Cart" in the ProductDetails component, the Navbar in App.jsx updates the cart count instantly. How do I architect this?"
**AI Response & Learning:** The AI guided me to create a "CartProvider" using "createContext". I learned how to wrap the entire `<App />` in "main.jsx" so that any component can use "useContext(CartContext)" to read or mutate the cart state.
**Prompt Used (Debugging):** "My cart is adding duplicate items as separate entries instead of increasing the quantity. How do I fix the dispatch logic?"
**AI Response & Learning:** The AI helped me write logic inside "setCart" using ".find()" and ".map()" to check if "item.id" already exists, and if so, mutate the "quantity" key instead of pushing a new object.

## Phase 3: Auth Mocking & Persistence
**Goal:** Protect checkout routes and persist data on refresh.

**Prompt Used:** "When I refresh the page (F5), my Cart state resets to 0. How can I make this data survive a hard refresh without using a real database?"
**AI Response & Learning:** I was introduced to browser "localStorage". I modified the initial state of my "CartContext" to read from "localStorage.getItem()", and added a "useEffect" to sync the state back to "localStorage" whenever the cart array changes.
**Prompt Used:** "I need to protect the /checkout route so that only logged-in users can access it. I am using a mocked login with localStorage. How do I build a PrivateRoute wrapper?"
**AI Response & Learning:** The AI provided the architectural pattern for a "PrivateRoute" component that intercepts the render cycle. If "localStorage.getItem('isLoggedIn')" is true, it returns "children", otherwise it uses `<Navigate to="/login" />` to redirect the user.

## Conclusion
Through this AI pair-programming sprint, I gained hands-on experience with core React concepts (Hooks, Context, Routing, DOM manipulation) rather than just copying code. I successfully built the connective tissue of an E-Commerce SPA.