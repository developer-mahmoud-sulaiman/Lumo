import { Check, Mail, Search, Trash2 } from 'lucide-react';
import { Alert, Button, Container, FormField, Input, Skeleton, Spinner } from './components/ui';

export default function App() {
  return (
    <Container style={{ paddingBlock: 'var(--space-12)' }}>
      <h1>Luma - Ui Test</h1>
      <p style={{ marginTop: 'var(--space-3)' }}>All style below for test</p>

      <section title="Button">
        <div>
          <Button>Primary</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="danger">danger</Button>
        </div>

        <div>
          <Button size="sm">Primary - sm</Button>
          <Button variant="secondary" size="md">
            secondary - md
          </Button>
          <Button variant="ghost" size="lg">
            ghost - lg
          </Button>
        </div>

        <div>
          <Button leftIcon={<Check size={16} />}>With Icon</Button>
          <Button rightIcon={<Search size={16} />}>Search</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>

        <div>
          <Button leftIcon={<Trash2 size={16} />} variant="danger">
            {null}
          </Button>
        </div>
      </section>

      <section title="Spinner">
        <div>
          <Spinner size="sm" />.
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </section>

      <section title="Skeleton">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: '400' }}>
          <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
            <Skeleton variant="circle" width={48} height={48} />

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="80%" />
            </div>
          </div>

          <Skeleton variant="rect" height={120} />
        </div>
      </section>

      <section title="Inputs">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
          <Input placeholder="plain input" />
          <Input leftIcon={<Mail size={16} />} placeholder="with left icon" />
          <Input rightIcon={<Search size={16} />} placeholder="with right icon" />
          <Input invalid placeholder="invalid state" />
          <Input disabled placeholder="disabled state" />
        </div>
      </section>

      <section title="form fields">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
          <FormField label="Email" required hint="we all never share it">
            {(props) => <Input {...props} type="email" placeholder="you@example.com" />}
          </FormField>

          <FormField label="Password" required error="must be 8 char">
            {(props) => <Input {...props} invalid={props.invalid} type="password" />}
          </FormField>
        </div>
      </section>

      <section title="Alerts">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 600 }}>
          <Alert variant="success" title="Order Placed">
            Your order has been placed successfully!
          </Alert>

          <Alert variant="error">Payment Failed!</Alert>

          <Alert variant="warning" title="Head Up">
            Cart will expire in 10 mins!
          </Alert>

          <Alert variant="info">new arrivals are here!</Alert>

          <Alert variant="info" onClose={() => alert('closed')}>
            Dismissable Alert
          </Alert>
        </div>
      </section>
    </Container>
  );
}

function buttonStyle(bg: string): React.CSSProperties {
  return {
    background: bg,
    color: 'var(--color-white)',
    padding: `var(--space-2) var(--space-4)`,
    borderRadius: 'var(--radius-md)',
    fontWeight: 'var(--font-semibold)',
    fontSize: 'var(--text-sm)',
    transition: 'opacity var(--transition-fast)',
  };
}
