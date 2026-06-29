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