export default function SingleBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4">
      <div className="inline-block max-w-full justify-center">{children}</div>
    </section>
  );
}
