# XAcademy - Cypress Testing Project

## Activity for 11/12

### Delivery Method:
1. Upload a compressed file
2. Upload the project to GitHub and attach the repository link

---

### Test Instructions

Visit https://automationintesting.online/ to complete the activity. Implement the following Cypress methods:

#### Tests Included

1. **Hotel Information Tests** (`cypress/e2e/hotel-info.cy.js`)
   - Verify that the hotel name is present on the page
   - Verify the hotel address
   - Verify the phone number
   - Verify the email
   - Ensure at least one image is visible
   - Confirm the hotel description text matches the expected content

2. **Contact Form Tests** (`cypress/e2e/contact-form.cy.js`)
   - Validate empty form submission
   - Validate form submission with invalid data
   - Validate form submission with valid data

### Running Tests

```bash
npm install
npx cypress open
```

### Project Structure

```
cypress/
├── e2e/
│   ├── hotel-info.cy.js
│   └── contact-form.cy.js
├── fixtures/
│   └── example.json
├── support/
│   ├── commands.js
│   └── e2e.js
cypress.config.js
package.json
```