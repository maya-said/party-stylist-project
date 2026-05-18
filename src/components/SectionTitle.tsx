type SectionTitleProps = {
  title: string;
  subtitle: string;
};

const SectionTitle = ({
  title,
  subtitle,
}: SectionTitleProps) => {
  return (
    <div className="text-center">

      <h2 className="text-4xl font-bold text-black">

        {title}

      </h2>

      <p className="mt-4 text-gray-600">

        {subtitle}

      </p>

    </div>
  );
};

export default SectionTitle;