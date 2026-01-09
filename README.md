# localStorage Authentication System (FD180: #4/100)

A multi-page authentication web application using localStorage for user registration and login with a success page.

## Features
- Multi-page application with sign-up, log-in, and success pages
- localStorage-based user database (stores multiple users)
- User registration with username, email, and password
- Login validation with username and password matching
- Input validation alerts for empty fields
- Automated page redirection after successful login

## How to Run
1. Run `npm run build` to compile Tailwind CSS (first time only)
2. Run `npm run dev` to start development server with live reload
   - Or simply open `index.html` in your web browser
3. Navigate to sign-up page and create an account
4. After successful registration, navigate to log-in page
5. Enter your credentials to log in
6. Upon successful login, you'll be redirected to the success page

## File Structure
```
├── index.html                 # Landing page with sign-up/log-in navigation
├── sign-up/
│   └── index.html            # User registration page
├── log-in/
│   └── index.html            # User login page
├── success/
│   └── index.html            # Success page after login
├── js/
│   └── script.js             # Authentication logic and localStorage management
├── src/
│   └── input.css             # Tailwind CSS source
└── dist/
    └── output.css            # Compiled Tailwind CSS
```

## Tools/Languages
- **JavaScript** - 48%
- **HTML** - 21%
- **CSS (Tailwind)** - 31%

## What I Learned
- Using `localStorage.setItem()` and `localStorage.getItem()` for persistent data storage
- Storing and retrieving JSON objects with `JSON.stringify()` and `JSON.parse()`
- Adding to Arrays `Array.push()`
- Using `Array.find()` to search for users by username
- Navigating file relative paths (`../js/script.js`)
- Simpler code using `if ((!signupUsername) || (!signupEmail) || (!signupPassword))`
- Page redirection with `window.location.href`
- Early returns if missing value checkers
- Managing shared JavaScript files across multiple pages especially with `addEventListener`, `if (register) { register.addEventListener("click", userToStorage )}`
- Handling empty arrays with `|| []`

- Utilizing `npm run build` to reset `dist/output.css` for first-time CSS code
- Utilizing `npx serve` for localhost running, smaller scale than `npm run dev`

## Available Scripts

### npm run build
Compiles Tailwind CSS from `src/input.css` to `dist/output.css`.
Run this after adding new Tailwind classes to your HTML.

### npm run dev
Runs Tailwind in watch mode and starts a live development server.
The page will auto-reload when you make edits.
Open http://localhost:8080 to view it in the browser.

## Future Improvements
- Add password encryption/hashing for security
- Implement "remember me" functionality
- Add password strength validation
- Create a logout button
- Add user profile page with stored data display
- Implement password reset functionality
