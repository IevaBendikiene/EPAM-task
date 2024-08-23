# SauceDemo Login Tests

This project contains automated tests for the login functionality of the SauceDemo website. The tests are designed to validate various login scenarios such as handling empty credentials, partial credentials, and valid credentials. The tests are implemented using WebdriverIO.

## Table of Contents

- [Project Setup](#project-setup)
- [Test Cases](#test-cases)
- [Running the Tests](#running-the-tests)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)

## Project Setup

To get started with this project, ensure that you have Node.js installed on your machine. Follow the steps below to set up the project:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/saucedemo-login-tests.git
    cd saucedemo-login-tests
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **WebdriverIO Configuration:**

    Make sure your `wdio.conf.js` is correctly set up to specify the browser and test framework. This project uses WebdriverIO for running the tests.

## Test Cases

This project includes three primary test cases:

1. **UC-1: Test Login Form with Empty Credentials**
   - **Steps:**
     1. Enter credentials in the "Username" and "Password" fields.
     2. Clear both inputs.
     3. Click the "Login" button.
   - **Expected Result:** The error message "Username is required" should be displayed.

2. **UC-2: Test Login Form with Username Only**
   - **Steps:**
     1. Enter credentials in the "Username" field.
     2. Clear the "Password" field.
     3. Click the "Login" button.
   - **Expected Result:** The error message "Password is required" should be displayed.

3. **UC-3: Test Login Form with Valid Credentials**
   - **Steps:**
     1. Enter valid credentials in the "Username" and "Password" fields.
     2. Click the "Login" button.
   - **Expected Result:** The page should successfully log in, and the title should be "Swag Labs".

## Running the Tests

To run the test suite, execute the following command in the terminal:

```bash
npx wdio