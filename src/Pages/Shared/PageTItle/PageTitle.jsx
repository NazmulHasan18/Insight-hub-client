const PageTitle = ({ title, subTitle }) => {
   return (
      <div className="text-center my-4">
         <h2 className="border-4 w-50 border-black pb-3 mx-auto border-bottom" style={{ maxWidth: "300px" }}>
            {title}
         </h2>
         <p className="fs-5">{subTitle}</p>
      </div>
   );
};

export default PageTitle;
