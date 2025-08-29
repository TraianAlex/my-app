### `yarn start`

### `yarn test`

### `yarn build`

### `yarn eject`

nvm use 14.17.0


✅ React 18 Upgrade Summary
Here's what we accomplished step by step:
1. Resolved Merge Conflicts
Fixed package-lock.json deletion issues
Updated node-sass → sass for Node.js v20 compatibility
Fixed webpack configuration issues
2. Upgraded to React 18
✅ Updated react from v17.0.2 to v18.3.1
✅ Updated react-dom from v17.0.2 to v18.3.1
✅ Updated TypeScript types to @types/react@^18.0.0
✅ Updated TypeScript types to @types/react-dom@^18.0.0
3. Updated Code for React 18
✅ Changed import from react-dom to react-dom/client
✅ Replaced ReactDOM.render() with ReactDOM.createRoot()
✅ App compiles and runs successfully
4. Key Changes Made
// Before (React 17)
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// After (React 18)
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
