import UseFetch from "../../hooks/useFetch";
const Privacy = () => {
  const { data } = UseFetch(`privacy`);

  return (
    <div className=" mt-5 md:px-24 sm:px-3">
      <h3 className="text-xl font-bold whitespace-normal text-center">
        Privacy Policy
      </h3>
      <div className="my-10">
        {data.map((item, i) => (
          <div dangerouslySetInnerHTML={{ __html: item.desc }} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Privacy;
