import React from 'react';

import './About.css';
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  toggle() {
    const showingMore = this.state.show;
    this.setState({ show: !showingMore });
  }

  render() {
    const { show } = this.state;
    let showMore;
    if (show) {
      showMore = (
        <div>
          <p>
            I've been coding ever since I was 15, starting off by learning Java
            in my AP Computer Science class as a high school sophomore. The
            following year I dove into the world of databases by taking Oracle
            Academy, a class offered through my high school where I learned SQL.
            Throughout college, my business classes used VBA in Microsft Excel
            and Visual Studio to help us run financial models. Despite all this
            prior experience in coding, I never truly thought of it as a
            legitimate career opportunity. In 2018, I finally decided to drop
            everything and learn how to build web applications and pursue a
            career as a software developer.
          </p>
          <p>
            I'm currently trying to delve into the world of data science,
            particuarly using Python, with the hopes that it'll somehow help me
            pick my March Madness bracket or improve my fantasy football team.
          </p>
          <p>
            In my free time, I try digesting sports in about any way possible,
            whether that be watching as many sporting events as feasibly
            possible or listening to sports radio all day, particuarly DFW's{' '}
            <i>SportsRadio 1310 AM & 96.7 FM The Ticket</i>. In the fall, my
            Sundays are dedicated to following my multiple fantasy football
            teams and the Dallas Cowboys, although I'm too young to even
            remember any of their Super Bowls. Come every March, my eyes are
            fixed on college basketball as I follow March Madness and pull for
            my Virginia Cavaliers... please don't bring up UMBC. I'll argue with
            any NBA fan that the 2011 Dallas Mavericks championship led by Dirk
            Nowitzki was the best NBA championship run in recent memory and
            continues to age like fine wine with the rise of NBA superteams.
            While the Warriors currently dominate the league, I watch Luka
            Dončić highlight tapes hoping that the Mavs will turn into the next
            NBA superteam someday. My other sports teams include the Texas
            Longhorns, the Texas Rangers, and the Dallas Stars.
          </p>
          <button onClick={this.toggle.bind(this)} className="read-button">
            Read Less
          </button>
        </div>
      );
    } else {
      showMore = (
        <div>
          <button onClick={this.toggle.bind(this)} className="read-button">
            Read More
          </button>
        </div>
      );
    }

    return (
      <div className="About-container">
        <div className="About-card">
          <h2>About me</h2>
          <p>
            I am a full-stack JavaScript developer with experience using
            Node.js, MongoDB, PostgreSQL, React, and jQuery to build web
            applications. I love working in tight-knit team environments,
            collaborating on ambitious projects and solving difficult problems
            with my teammates. My mind is extremely number-driven, quantitative
            problems are my favorite type of problems to crack.
          </p>
          <p>
            I graduated from the University of Virginia in May 2017 with a
            Bachelor of Science in Commerce. My concentrations were in Finance
            and Information Technology alongside a track in Quantitative
            Finance. My previous employers include the endowment of a large
            private research university, a real estate investment firm, an early
            stage venture capital firm, and a private wealth management firm.
            Between my education and past work experience, I am very well-versed
            in the world of finance, particuarly investment management.
          </p>
          {showMore}
        </div>
      </div>
    );
  }
}
