export default function App() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-12)' }}>
      <h1>NovaCart — Design System Test</h1>
      <p style={{ marginTop: 'var(--space-4)' }}>
        If you see Inter font, correct spacing, and no default margins — the
        design system is working.
      </p>

      <div className="flex gap-3" style={{ marginTop: 'var(--space-8)' }}>
        <button style={buttonStyle('var(--color-primary-800)')}>Primary</button>
        <button style={buttonStyle('var(--color-accent-600)')}>Accent</button>
        <button style={buttonStyle('var(--color-success-600)')}>Success</button>
        <button style={buttonStyle('var(--color-error-600)')}>Error</button>
      </div>

      <div style={{ marginTop: 'var(--space-8)' }}>
        <h2>Heading 2</h2>
        <h3 style={{ marginTop: 'var(--space-3)' }}>Heading 3</h3>
        <p style={{ marginTop: 'var(--space-4)' }}>
          This is a paragraph using <strong>strong</strong> and{' '}
          <small>small</small> text. Colors, spacing, and typography should all
          feel cohesive.
        </p>
      </div>
    </div>
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