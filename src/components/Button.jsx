export default function Button({ children, type, onClick }) {
  const base =
    "text-2xl rounded-xl hover:bg-white border-2 border-transparent hover:border-soft-blue hover:text-soft-blue font-medium py-6";

  const styles = {
    primary: base + " text-white bg-soft-blue basis-2/4 ",
    secondary: base + " text-very-dark-blue bg-gray-100 basis-2/4  ",
    ternary:
      base +
      " text-white bg-soft-blue w-3/4 self-center mt-6 md:self-start md:w-2/6",
    forth: base + " text-white bg-soft-blue w-11/12 mt-6 justify-self-center",

    fifth:
      base +
      " text-white bg-soft-red w-full border-transparent hover:border-soft-red hover:bg-white hover:text-soft-red md:basis-1/4 md:self-start",

    sixth: base + " text-white bg-soft-blue mt-6 self-center w-2/5 md:w-1/4",
  };
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
