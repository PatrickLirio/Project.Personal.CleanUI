# UI Templates
A React application built with Vite.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v18 or later recommended)
- npm (comes with Node.js)

You can verify your installation by running:

```bash
node -v
npm -v
```

---

## Clone the Repository

Clone the project from GitHub:

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/PatrickLirio/Project.Personal.CleanUI.git
```

Navigate into the project directory:

```bash
cd project-name
```

---

## Install Dependencies

Install all required packages:

```bash
npm install
```

---

## Run the Development Server

Start the application:

```bash
npm run dev
```

Vite will display an output similar to:

```text
VITE vX.X.X ready in XXX ms

➜  Local:   http://localhost:5173/
```

Open the displayed URL in your browser.

---

## Build for Production

Generate an optimized production build:

```bash
npm run build
```

The compiled files will be placed in the `dist` folder.

---

## Preview the Production Build

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

##empty
```



Token Primitives
└── Raw values: colors, spacing, radius, shadows
    These are not components. They are variables.

        ↓

Layout Primitives
└── Box, Flex, Stack, Grid, Spacer, Container
    No visual opinion. Structure only.
    Invisible when rendered alone.

        ↓

UI Components  ← you are here
└── Button, Input, Card, Table, Badge,
    Avatar, Checkbox, Select, Tooltip...
    Have visual opinion. Consume tokens.
    Usable standalone.

        ↓

Composite Components
└── Modal, Dropdown, DatePicker,
    DataTable, Form, Navbar, Sidebar...
    Combine multiple UI components.
    Contain internal layout primitives.
    Too complex to be a single element.

        ↓

Feature Components
└── LoginForm, UserProfileCard,
    TransactionHistory, DashboardSummary...
    Business logic lives here.
    Specific to your application domain.
    Not reusable across products.

        ↓

Pages
└── DashboardPage, SettingsPage, LoginPage...
    Orchestrate features.
    Own routing and data fetching concerns.

