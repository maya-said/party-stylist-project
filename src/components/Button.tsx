type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">

      {text}

    </button>
  );
};

export default Button;