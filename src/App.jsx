import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="app-container">
      <ProfileCard 
        name="Renhiel Maghanoy" 
        bio="Programmer" 
        avatar="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/486153221_1067477512076913_6442048388245512466_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFRDJ0asxG2DbJK20pbxjhTFbNwfvdUzecVs3B-91TN57PFGxdrTbBJ4zYOtqwymLKnSQs9LjXMaaSzxt8zIi4q&_nc_ohc=9TQYrkM4gfwQ7kNvwFG99KD&_nc_oc=AdkKaXWqLZYujcP6Od6gkjFPQyCuPr8mZDW9du7XFwgcauAN_DdPUrLqDIZeXg42y10&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=uWeNedjVFN945zK4Z-9eow&oh=00_AfOyl-BLSfU7KSrum0hjGm7SnjJ-cn0NOLlHZxfIS-CATQ&oe=68468D9C"
        socials={{
          twitter: "https://x.com/RyunnArts",
          linkedin: "https://www.linkedin.com/in/niel-o-botay/" 
        }}
      />
    </div>
  );
}

export default App;
