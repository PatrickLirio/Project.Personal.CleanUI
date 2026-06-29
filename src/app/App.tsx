import { Dropdown } from "@/components/composite/Dropdown"
import { Form } from "@/components/composite/Form"
import { FormField } from "@/components/composite/Form/Form"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "@/components/composite/Modal"
import { Stack } from "@/components/layout/stack"
import { Button } from "@/components/ui/Button/Button"
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table"
import type { FormValues } from "@/hooks/useForm"
import { composeRules, isEmail, minLength, required } from "@/utils/validation"
import { useState } from "react"

const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular", disabled: true },
    { value: "svelte", label: "Svelte" },
];


function App() {
 const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>("");

     async function handleSubmit(values: Record<string, string>) {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert(`Submitted: ${values}`);
    }

  return (
    <>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "32px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
                <Button isLoading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button isFullWidth>Full Width</Button>
            </div>
        </div>

        <Stack gap="var(--space-8)" style={{ padding: "var(--space-8)" }}>

            {/* Card */}
            <Card variant="elevated">
                <CardHeader>Card Title</CardHeader>
                <CardBody>This is the card body content.</CardBody>
                <CardFooter>
                    <Button variant="ghost" size="sm">Cancel</Button>
                    <Button variant="primary" size="sm">Confirm</Button>
                </CardFooter>
            </Card>

            {/* Input */}
            <Input
                label="Email address"
                placeholder="you@example.com"
                helperText="We will never share your email."
            />
            <Input
                label="Password"
                placeholder="Enter password"
                errorText="Password must be at least 8 characters."
            />

            {/* Table */}
            <Table isHoverable isStriped>
                <TableHead>
                    <TableRow>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Role</TableHeader>
                        <TableHeader>Status</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Patrick</TableCell>
                        <TableCell>Developer</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Maria</TableCell>
                        <TableCell>Designer</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </Stack>
        <Stack gap="var(--space-4)" style={{ padding: "var(--space-8)" }}>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                ariaLabel="Example modal"
            >
                <ModalHeader onClose={() => setIsOpen(false)}>
                    Confirm Action
                </ModalHeader>
                <ModalBody>
                    Are you sure you want to proceed with this action?
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setIsOpen(false)}>
                        Confirm
                    </Button>
                </ModalFooter>
            </Modal>
        </Stack>

        <Stack gap="var(--space-6)" style={{ padding: "var(--space-8)" }}>
            <Dropdown
                label="Framework"
                options={options}
                value={value}
                onChange={setValue}
                placeholder="Select a framework"
                helperText="Choose your preferred framework"
                isFullWidth
            />
            <Dropdown
                label="With error"
                options={options}
                value={value}
                onChange={setValue}
                errorText="This field is required"
                isFullWidth
            />
            <Dropdown
                label="Disabled"
                options={options}
                value={value}
                onChange={setValue}
                isDisabled
                isFullWidth
            />
        </Stack>

         <div style={{ padding: "var(--space-8)", maxWidth: "480px" }}>
            <Card variant="elevated">
                <CardHeader>Create Account</CardHeader>
                <CardBody>
                    <Form
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                        }}
                        rules={{
                            name: required(),
                            email: composeRules(required(), isEmail()),
                            password: composeRules(required(), minLength(8)),
                        }}
                        onSubmit={handleSubmit}
                    >
                        <FormField
                            name="name"
                            label="Full name"
                            placeholder="Patrick"
                        />
                        <FormField
                            name="email"
                            label="Email address"
                            placeholder="patrick@example.com"
                            type="email"
                        />
                        <FormField
                            name="password"
                            label="Password"
                            placeholder="Min. 8 characters"
                            type="password"
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            isFullWidth
                        >
                            Create Account
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>

    </>
  )
}

export default App
