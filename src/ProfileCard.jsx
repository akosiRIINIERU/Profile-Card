import React from 'react';

function ProfileCard(props) {
  const { name, bio, avatar, socials } = props;

  return (
    <div style={{
      width: '280px',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
      textAlign: 'center',
      backgroundColor: '#fff',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <img 
        src={avatar} 
        alt={`${name} avatar`} 
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }} 
      />
      <h2 style={{ margin: '10px 0 5px', fontSize: '1.5rem' }}>{name}</h2>
      <p style={{ fontSize: '1rem', color: '#555', marginBottom: '15px' }}>{bio}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#1DA1F2', fontWeight: '600' }}>
            🐦 Twitter
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#0077b5', fontWeight: '600' }}>
            💼 LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

ProfileCard.defaultProps = {
  name: "Renhiel Maghanoy",
  bio: "Low End Programmer",
  avatar: "https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/486153221_1067477512076913_6442048388245512466_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFRDJ0asxG2DbJK20pbxjhTFbNwfvdUzecVs3B-91TN57PFGxdrTbBJ4zYOtqwymLKnSQs9LjXMaaSzxt8zIi4q&_nc_ohc=9TQYrkM4gfwQ7kNvwFG99KD&_nc_oc=AdkKaXWqLZYujcP6Od6gkjFPQyCuPr8mZDW9du7XFwgcauAN_DdPUrLqDIZeXg42y10&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=uWeNedjVFN945zK4Z-9eow&oh=00_AfOyl-BLSfU7KSrum0hjGm7SnjJ-cn0NOLlHZxfIS-CATQ&oe=68468D9C",
  socials: { twitter: "https://x.com/RyunnArts", linkedin: "https://www.linkedin.com/in/niel-o-botay/" },
};

export default ProfileCard;
