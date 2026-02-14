export default function Task() {

  const info = [
    {
      id: 1,
      name: "harini",
      gender: "Female",
      img: "https://www.bing.com/th/id/OIP.pr_RNb8Lf2EDRCZq4otLAgHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      job: "PHP"
    },
    {
      id: 2,
      name: "Sri nadhi",
      gender: "Female",
      img: "https://www.bing.com/th/id/OIP.hL5_35yI0SD_TsqhzUq6MAHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      job: "PHP"
    },
    
    {
      id: 7,
      name: "Annie",
      gender: "Female",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20220108/pngtree-female-job-candidate-presenting-profile-to-business-manager-photo-image_43822642.jpg",
      job: "PHP"
    },
    {
      id: 8,
      name: "priya",
      gender: "Female",
      img: "https://static.vecteezy.com/system/resources/previews/001/739/285/non_2x/confident-and-beautiful-business-woman-free-photo.jpg",
      job: "PHP"
    }

  ];

  return (
    <div className="container mt-4">
      <div className="row g-3">
        {info.map((item) => (
          <div className="col-md-4 col-lg-3" key={item.id}>
            <div className="card h-100 text-center">
              <img src={item.img} alt="profile"/>
              <div className="card-body">
                <h6 className="card-title">{item.name}</h6>
                <p>{item.gender}</p>
                <p>{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
