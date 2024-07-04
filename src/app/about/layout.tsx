import "../about.css";
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>About Page title from layout</h1>
      {children}
    </div>
  );
}
