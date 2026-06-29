import { Stack } from "@/components/layout/stack"
import { Button } from "@/components/ui/Button/Button"
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table"


function App() {
 

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

    </>
  )
}

export default App
