export function CodeBlock({ code }: { code: string }) {
  return (
    <div className="mockup-code">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
