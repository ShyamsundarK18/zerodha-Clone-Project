import "../Style/AboutTeam.css";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container px-5 pb-4">
      <div className="row ms-5">
        <div className="col">
          <img
            className="team_image"
            src="/media/images/NikhilKamath.jpg"
            alt="NikhilKamath"
          />
          <h4 className="ms-5 pt-3">Nikhil Kamath</h4>
          <p className="ms-5 mb-0">Co-founder & CFO </p>

          <div className="bio-section">
            <button
              className="team_bio_icon mt-0"
              data-bs-toggle="collapse"
              href="#collapseNikhilKamath"
              role="button"
              aria-expanded="false"
              aria-controls="collapseNikhilKamath"
            >
              Bio &nbsp;<i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="collapse" id="collapseNikhilKamath">
              <div className="card team_bio_para card-body">
                Nikhil is an astute and experienced investor, and he heads
                financial planning at Zerodha. An avid reader, he always
                appreciates a good game of chess.
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <img
            className="team_image"
            src="/media/images/KailashNadh.jpg"
            alt="Dr. Kailash Nadh"
          />
          <h4 className="ms-5 pt-3">Dr. Kailash Nadh</h4>
          <p className="ms-5 mb-0 ps-5"> &nbsp; &nbsp; CTO</p>

          <div className="bio-section">
            <button
              className="team_bio_icon mt-0"
              data-bs-toggle="collapse"
              href="#collapseKailashNadh"
              role="button"
              aria-expanded="false"
              aria-controls="collapseKailashNadh"
            >
              Bio &nbsp;<i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="collapse" id="collapseKailashNadh">
              <div className="card team_bio_para card-body">
                Kailash has a PhD in Artificial Intelligence & Computational
                Linguistics, and is the brain behind all our technology and
                products. He has been a developer from his adolescence and
                continues to write code every day.
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <img
            className="team_image"
            src="/media/images/VenuMadhav.jpg"
            alt="Venu Madhav"
          />
          <h4 className="ms-5 pt-3">Venu Madhav</h4>
          <p className="ms-5 mb-0 ps-5"> &nbsp; &nbsp;COO</p>

          <div className="bio-section">
            <button
              className="team_bio_icon mt-0"
              data-bs-toggle="collapse"
              href="#collapseVenuMadhav"
              role="button"
              aria-expanded="false"
              aria-controls="collapseVenuMadhav"
            >
              Bio &nbsp;<i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="collapse" id="collapseVenuMadhav">
              <div className="card team_bio_para card-body">
                Venu is the backbone of Zerodha taking care of operations and
                ensuring that we are compliant to rules and regulations. He has
                over a dozen certifications in financial markets and is also
                proficient in technical analysis. Workouts, cycling, and
                adventuring is what he does outside of Zerodha.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5 ms-5 py-5">
        <div className="col">
          <img
            className="team_image"
            src="/media/images/HananDelvi.jpg"
            alt="Hanan Delvi"
          />
          <h4 className="ms-5 pt-3">Hanan Delvi</h4>
          <p className="ms-5 mb-0 ps-5"> &nbsp;COO</p>

          <div className="bio-section">
            <button
              className="team_bio_icon mt-0"
              data-bs-toggle="collapse"
              href="#collapseHananDelvi"
              role="button"
              aria-expanded="false"
              aria-controls="collapseHananDelvi"
            >
              Bio &nbsp;<i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="collapse" id="collapseHananDelvi">
              <div className="card team_bio_para card-body">
                We take pride in the way we support our clients, and Hanan is
                responsible for this with his never ending flow of energy. He is
                the man behind many of our support initiatives that have helped
                us stay ahead of the game. A free thinker, Hanan can be seen
                posing as one in his free time.
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <img
            className="team_image"
            src="/media/images/SeemaPatil.jpg"
            alt="Seema Patil"
          />
          <h4 className="ms-5 ps-2 pt-3">Seema Patil</h4>
          <p className="ms-5 mb-0 ps-5">Director</p>

          <div className="bio-section">
            <button
              className="team_bio_icon mt-0"
              data-bs-toggle="collapse"
              href="#collapseSeemaPatil"
              role="button"
              aria-expanded="false"
              aria-controls="collapseSeemaPatil"
            >
              Bio &nbsp;<i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="collapse" id="collapseSeemaPatil">
              <div className="card team_bio_para card-body">
                Seema who has lead the quality team since the beginning of
                Zerodha, is now a director. She is an extremely disciplined
                fitness enthusiast.
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <img
            className="team_image"
            src="/media/images/karthikRangappa.jpg"
            alt="Karthik Rangappa"
          />
          <h4 className="ms-4 pt-3">Karthik Rangappa</h4>
          <p className="ms-4 mb-0 ps-4"> Chief of Education</p>

          <div className="bio-section">
            <button
              className="team_bio_icon mt-0"
              data-bs-toggle="collapse"
              href="#collapsekarthikRangappa"
              role="button"
              aria-expanded="false"
              aria-controls="collapsekarthikRangappa"
            >
              Bio &nbsp;<i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="collapse" id="collapsekarthikRangappa">
              <div className="card team_bio_para card-body">
                Karthik "Guru" Rangappa single handledly wrote Varsity,
                Zerodha's massive educational program. He heads investor
                education initiatives at Zerodha and loves stock markets,
                classic rock, single malts, and photography.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row ms-5 mb-5">
        <div className="col">
          <img
            className="team_image"
            src="/media/images/AustinPrakesh.jpg"
            alt="Austin Prakesh"
          />
          <h4 className="ms-4 pt-3"> &nbsp; Austin Prakesh</h4>
          <p className="ms-5 mb-0 ">Director Strategy</p>

          <div className="bio-section">
            <button
              className="team_bio_icon mt-0"
              data-bs-toggle="collapse"
              href="#collapseAustinPrakesh"
              role="button"
              aria-expanded="false"
              aria-controls="collapseAustinPrakesh"
            >
              Bio &nbsp;<i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="collapse" id="collapseAustinPrakesh">
              <div className="card team_bio_para card-body">
                Austin is a successful self-made entrepreneur from Singapore.
                His area of specialty revolves around helping organisations
                including grow by optimizing revenue streams and creating growth
                strategies. He is a boxing enthusiast and loves collecting
                exquisite watches.
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Team;

// // src/components/Team.jsx
// import "../Style/AboutTeam.css";

// function Team() {
//   const members = [
//     {
//       name: "Nikhil Kamath",
//       title: "Co-founder & CFO",
//       image: "/media/images/NikhilKamath.jpg",
//       bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
//       collapseId: "collapseNikhilKamath",
//     },
//     {
//       name: "Dr. Kailash Nadh",
//       title: "CTO",
//       image: "/media/images/KailashNadh.jpg",
//       bio: "Kailash has a PhD in AI & Computational Linguistics, and is the brain behind all our technology. He continues to write code every day.",
//       collapseId: "collapseKailashNadh",
//     },
//     {
//       name: "Venu Madhav",
//       title: "COO",
//       image: "/media/images/VenuMadhav.jpg",
//       bio: "Venu is the backbone of Zerodha operations. He holds over a dozen certifications and enjoys workouts, cycling, and adventuring.",
//       collapseId: "collapseVenuMadhav",
//     },
//     {
//       name: "Hanan Delvi",
//       title: "COO",
//       image: "/media/images/HananDelvi.jpg",
//       bio: "Hanan drives our client support initiatives. A free thinker, he brings energy and innovation to everything he does.",
//       collapseId: "collapseHananDelvi",
//     },
//     {
//       name: "Seema Patil",
//       title: "Director",
//       image: "/media/images/SeemaPatil.jpg",
//       bio: "Seema has led the quality team since Zerodha's inception. A disciplined fitness enthusiast, she now serves as Director.",
//       collapseId: "collapseSeemaPatil",
//     },
//     {
//       name: "Karthik Rangappa",
//       title: "Chief of Education",
//       image: "/media/images/karthikRangappa.jpg",
//       bio: 'Karthik "Guru" Rangappa wrote Varsity, Zerodha’s educational program. He loves stock markets, classic rock, and photography.',
//       collapseId: "collapsekarthikRangappa",
//     },
//     {
//       name: "Austin Prakesh",
//       title: "Director Strategy",
//       image: "/media/images/AustinPrakesh.jpg",
//       bio: "Austin is a self-made entrepreneur from Singapore. He specializes in growth strategy and is a boxing and watch enthusiast.",
//       collapseId: "collapseAustinPrakesh",
//     },
//   ];

//   return (
//     <div className="container px-5 pb-4">
//       {Array.from({ length: Math.ceil(members.length / 3) }, (_, i) => (
//         <div className="row ms-5 mb-5" key={i}>
//           {members.slice(i * 3, i * 3 + 3).map((member) => (
//             <TeamMember key={member.name} {...member} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Team;

// // src/components/TeamMember.jsx
// import React from "react";

// function TeamMember({ name, title, image, bio, collapseId }) {
//   return (
//     <div className="col">
//       <img className="team_image" src={image} alt={name} />
//       <h4 className="ms-5 pt-3">{name}</h4>
//       <p className="ms-5 mb-0">{title}</p>

//       <div>
//         <button
//           className="team_bio_icon mt-0"
//           data-bs-toggle="collapse"
//           href={`#${collapseId}`}
//           role="button"
//           aria-expanded="false"
//           aria-controls={collapseId}
//         >
//           Bio &nbsp;<i className="fa-solid fa-caret-down"></i>
//         </button>
//         <div className="collapse" id={collapseId}>
//           <div className="card team_bio_para card-body">{bio}</div>
//         </div>
//       </div>
//     </div>
//   );
// }
