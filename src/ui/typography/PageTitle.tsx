export const PageTitle = (props: { title: string }) => {
  return (
    <h1 className="py-6 pl-10 text-yellow-400 bg-gray-800 text-2xl">
      {props.title}
    </h1>
  );
};
