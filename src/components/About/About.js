import React from 'react';

import './About.css';
export default class About extends React.Component {
  render() {
    return (
      <div className="About-container">
        <div className="About-card">
          <h2>About me</h2>
          <p>About my aspirations to be a coder.</p>
          <p>
            I graduated from the University of Virginia in May 2017 with a
            Bachelor of Science in Commerce. My concentrations were in Finance
            and Information Technology and I completed the rigourous
            Quantitative Finance track. Between my education and past work
            experience, I am very well-versed in the world of finance and
            particuarly investment management.
          </p>
          <p>
            About my personal interests. I spend way too of my time digesting
            sports in about any way possible, whether that be watching as many
            sporting events as feasibly possible or listening to sports radio
            all day, particuarly <i>SportsRadio 1310 AM & 96.7 FM The Ticket</i>{' '}
            in DFW. In the fall, my Sundays are dedicated to following my
            multiple fantasy football teams and the Dallas Cowboys, although I'm
            too young to even remember any of their Super Bowls. Come every
            March, my eyes are fixed on college basketball as I follow March
            Madness and pull for my Virginia Cavaliers... please don't bring up
            UMBC. I'll argue with any NBA fan that the 2011 Dallas Mavericks
            championship led by Dirk Nowitzki was the best NBA championship run
            in recent memory and continues to age like fine wine with the rise
            of superteams across the league. I watch way too many Luka Dončić
            highlight tapes while I hope that the Mavs will turn into the next
            superteam. My other sports teams include the Texas Longhorns, the
            Texas Rangers, and the Dallas Stars.
          </p>
        </div>
      </div>
    );
  }
}
