import './Profile.css';
import profilImage from './assets/image5.webp';
import sportImage from './assets/sport.png';
import musicImage from './assets/music.png';
import tripImage from './assets/voyage.jpg';

function Profile() {
  return (
    <>
    <div className="profile">
      <div className="profileHeader">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQHu0jmgPTFKmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729153667094?e=1749081600&v=beta&t=KwX8ShKdpbf9sKdt3xWYSgAK4LvIeHpvmBDDisDK-7I" alt="Profile" className="profilePic" />
        <div className="profileInfo">
          <h2>@Eduard_Baescu</h2>
          <div className="stats">
            <span><strong>3</strong> posts</span>
            <span><strong>1</strong> abonnés</span>
            <span><strong>0</strong> abonnements</span>
          </div>
          <p className="bio">🚀 Étudiant chez My Digital School - Bordeaux | Bachelor Web et Multimédia
          <br/>💻 Passionné par l'innovation en ligne et le développement web. </p>
        </div>
      </div>


      <div className="postGrid">
        <img src={sportImage} alt="Post 1" className="post" />
        <img src={musicImage} alt="Post 2" className="post" />
        <img src={tripImage} alt="Post 3" className="post" />
      </div>
    </div>
    </>
  );
}

export default Profile;
