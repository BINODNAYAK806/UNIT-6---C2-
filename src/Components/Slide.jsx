import React from "react";
function Slide({value,handelChange}) {
  
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  // const [error, setError] = React.useState(false);


  
  React.useEffect(() => {
    fetchAndUpdateData();
    // handelChange()
    // console.log(value)

  }, [value]);

  const fetchAndUpdateData = () => {
    setLoading(true);
    fetch(`https://slides-app-220822.herokuapp.com/slides?_page=${value}&_limit=1`)
      .then((res) => res.json())
      .then((res) => setData(res))

      // console.log(value)
  };



  return (
    <div className="slide-container" data-cy="slide">

      {data.map((item)=>{

      return(

      <><h3 data-cy="title">{item.title}</h3><p data-cy="description">{item.description}</p></>
      )
    })
    }
    </div>
  );
}

export default Slide;
