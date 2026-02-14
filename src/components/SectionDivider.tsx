const SectionDivider = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="max-w-4xl mx-auto relative">
        <div className="h-px bg-border" />
        <div className="absolute top-0 left-0 h-px w-10 bg-primary" />
      </div>
    </div>
  );
};

export default SectionDivider;
